"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itunesLookupRoot = void 0;
exports.lookupItunes = lookupItunes;
const result_1 = require("../result/result");
const lookup_options_1 = require("./lookup-options");
exports.itunesLookupRoot = "https://itunes.apple.com/lookup";
function lookupItunes(options) {
    return new Promise((resolve, reject) => {
        const phin = require("phin");
        //Initializing passed options (adding methods when directly passing an object)
        const lookupOptions = lookup_options_1.ItunesLookupOptions.from(options);
        phin(`${exports.itunesLookupRoot}?${lookupOptions.toURI()}`, (err, res) => {
            if (err) {
                reject(err);
            }
            else {
                res.body = JSON.parse(res.body);
                resolve(result_1.ItunesResult.from(res.body));
            }
        });
    });
}
