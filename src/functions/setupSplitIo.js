import getUpdatedViewCount from './getUpdatedViewCount';
import setUpdatedViewCount from './setUpdatedViewCount';
import { SPLIT_IO_KEY, MINIMUM_VIEW_COUNT_BEFORE_INCENTIVE } from 'configuration/config';

export default async function setupSplitIo() {
	// Set a wider segment group as standard
	let key = 'USER';

	const UPDATED_NUMBER = getUpdatedViewCount();

	// The WINDOW_SHOPPER segment is set in the Split.io web GUI as being recipient of special purchase intent actions
	if (UPDATED_NUMBER > MINIMUM_VIEW_COUNT_BEFORE_INCENTIVE) {
		key = 'WINDOW_SHOPPER';
		console.log('Customer key is set to WINDOW_SHOPPER');
	}

	// Configuration for Split.io
	const factory = splitio({
		core: {
			authorizationKey: SPLIT_IO_KEY,
			key,
			trafficType: 'user'
		}
	});
	const client = factory.client();

	// Make sure Split.io client is available for React as well
	window.splitio = client;

	let splitIoReady = false;

	async function start() {
    let promise = await new Promise((resolve, reject) => {
				client.on(client.Event.SDK_READY, function() {
					console.log('Split.io client is ready...');

					// Yep, ready to use!
					splitIoReady = true;

					// Make sure to set new value in localStorage
					setUpdatedViewCount(UPDATED_NUMBER);

					// End
					resolve();
				});
    })
    .catch(err => {
			throw err;
		});

    return promise;
	}

	return start()
		.then(data => {
			return splitIoReady; // true
		})
		.catch(err => {
			console.error(err);
			return splitIoReady; // false
		})
}