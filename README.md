# sendn #



the sendN can send push notifications for your android to test your applications!

### How do I get set up? ###

## Installation

    $ npm install sendN

## Usage
```bash
sendn -k GSMKEY -d DeviceId1 DeviceId2 DeviceIdN -m '{\"message\":{\"alert\":\"Test\",\"type\":\"url\",\"data\":{\"url\":\"http://www.google.com\"}}}'
```

## Options

	Commands:
	  	android  Send notifications for Android

	Options:
	  -k, --key      Api key for android                         [string] [required]
	  -d, --devices  Devices list to send notifications           [array] [required]
	  -m, --message  Message                                                [string]
	  -h, --help     Show help                                             [boolean]

### Contribution guidelines ###

* Fork
* Create a new branch
* Create a pull request
