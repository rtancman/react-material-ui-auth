setup:
	yarn install
	cp sample-env .env

run: run.client 

run.client:
	yarn start

chrome.debugmode:
	google-chrome --remote-debugging-port=9222 --no-first-run --no-default-browser-check --user-data-dir=$(mktemp -d -t 'chre-remote_data_dir')