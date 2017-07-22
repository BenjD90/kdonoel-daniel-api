import { MongoClient, ObjectID } from 'mongodb';

const {mongo} = global.conf;
const log = global.log.module('mongo');

export const connect = async () => {
	log.info(`Connecting to ${mongo.url}...`);
	global.db = await MongoClient.connect(mongo.url);
	log.info(`Connected`);
};

export const oid = (id: string) => new ObjectID(id);