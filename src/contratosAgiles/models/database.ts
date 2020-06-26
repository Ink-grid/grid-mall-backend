/** @format */
import env from 'mandatoryenv';
import admin from 'firebase-admin';

env.load(['PRIVATE_KEY_CONTRATOS_AGILES']);

const { PRIVATE_KEY_CONTRATOS_AGILES } = process.env;

const serviceAccount: any = {
	type: 'service_account',
	project_id: 'contratos-agiles',
	private_key_id: 'f9ef339c60fbc20c73509d30068d171fdd1879e1',
	private_key: PRIVATE_KEY_CONTRATOS_AGILES,
	client_email:
		'firebase-adminsdk-nqbvq@contratos-agiles.iam.gserviceaccount.com',
	client_id: '109470876227242518644',
	auth_uri: 'https://accounts.google.com/o/oauth2/auth',
	token_uri: 'https://oauth2.googleapis.com/token',
	auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
	client_x509_cert_url:
		'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-nqbvq%40contratos-agiles.iam.gserviceaccount.com'
};

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://contratos-agiles.firebaseio.com'
});

// export services

export const { auth } = admin;
export const storage = admin.storage();
export const firestore = admin.firestore();
export const database = admin.database();
export const FieldValue = admin.firestore.FieldValue;
export const Timestamp = admin.firestore.Timestamp;
