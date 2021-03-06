const mongoose = require('mongoose');
const BluebirdPromise = require("bluebird");
BluebirdPromise.promisifyAll(require("mongoose"));
const Schema = mongoose.Schema;

const PlayersdataSchema = new Schema({
    player_name: { type: String, trim: true, default:'cid_0'},
    player_guid: { type: String},
    player_steam_id: { type: String},
    player_ip: { type: String},
    player_country: { type: String},
    player_country_short: { type: String},
    player_city:  { type: String},
    player_name_aliases: [{type: String, trim: true}],
    server_id: [{type: Schema.Types.ObjectId, ref: 'Servers'}],
    sshack:  { type: Boolean, default:true}
}, { timestamps: true });

module.exports = mongoose.model('Playersdata', PlayersdataSchema);
