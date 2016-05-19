var properties = require(__dirname + '/../../properties/properties');

exports.schema = {
    "auto_create_user": {
        type: Boolean,
        required: true,
        default: properties.getEsupProperty('auto_create_user')
    },
    "proxyUrl": {
        type: String,
        required: true,
        default: properties.getEsupProperty('proxyUrl')
    },
    "api_password": {
        type: String,
        required: true,
        default: properties.getEsupProperty('api_password')
    },
    "users_secret": {
        type: String,
        required: true,
        default: properties.getEsupProperty('users_secret')
    },
    "apiDb": {
        type: String,
        required: true,
        default: properties.getEsupProperty('apiDb')
    },
    "userDb": {
        type: String,
        required: true,
        default: properties.getEsupProperty('userDb')
    },
    "mongodb": {
        "address": {
            type: String,
            required: true,
            default: properties.getEsupProperty('mongodb').address
        },
        "db": {
            type: String,
            required: true,
            default: properties.getEsupProperty('mongodb').db
        },
        "transport": {
            "mail": {
                type: String,
            },
            "sms": {
                type: String,
            }
        }
    },
    "ldap": {
        "uri": {
            type: String,
        },
        "baseDn": {
            type: String,
        },
        "adminDn": {
            type: String,
        },
        "password": {
            type: String,
        },
        "transport": {
            "mail": {
                type: String,
            },
            "sms": {
                type: String,
            }
        }
    },
    "mysql": {
        "host": {
            type: String,
        },
        "user": {
            type: String,
        },
        "password": {
            type: String,
        },
        "database": {
            type: String,
        },
        "userTable": {
            type: String,
        },
        "transport": {
            "mail": {
                type: String,
            },
            "sms": {
                type: String,
            }
        }
    },
    "methods": {
        "totp": {
            "activate": {
                type: Boolean,
            },
            "sms_window": {
                type: Number,
            },
            "mail_window": {
                type: Number,
            },
            "app_window": {
                type: Number,
            },
            "default_window": {
                type: Number,
            },
            "transports": {
                type: Array,
            }
        },
        "random_code": {
            "activate": {
                type: Boolean,
            },
            "sms_validity": {
                type: Number,
            },
            "mail_validity": {
                type: Number,
            },
            "code_type": {
                type: String,
            },
            "code_length": {
                type: Number,
            },
            "transports": {
                type: Array,
            }
        },
        "bypass": {
            "activate": {
                type: Boolean,
            },
            "codes_number": {
                type: Number,
            },
            "code_type": {
                type: String,
            },
            "code_length": {
                type: Number,
            },
            "transports": {
                type: Array,
            }
        }
    },
    "transports": {
        type: Array,
        required: true,
        default: properties.getEsupProperty('transports')
    },
    "mailer": {
        "sender_mail": {
            type: String,
            required: true,
            default: properties.getEsupProperty('mailer').sender_mail
        },
        "sender_name": {
            type: String,
            required: true,
            default: properties.getEsupProperty('mailer').sender_name
        },
        "port": {
            type: String,
            required: true,
            default: properties.getEsupProperty('mailer').port
        },
        "hostname": {
            type: String,
            required: true,
            default: properties.getEsupProperty('mailer').hostname
        }
    },
    "sms": {
        "url": {
            type: String,
            required: true,
            default: properties.getEsupProperty('sms').url
        }
    }
}
