"use strict";
/** @format */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = process.env, TYPE = _a.TYPE, PROJECT_ID = _a.PROJECT_ID, PRIVATE_KEY_ID = _a.PRIVATE_KEY_ID, PRIVATE_KEY = _a.PRIVATE_KEY, CLIENT_EMAIL = _a.CLIENT_EMAIL, CLIENT_ID = _a.CLIENT_ID, AUTH_URI = _a.AUTH_URI, TOKEN_URI = _a.TOKEN_URI, AUTH_PROVIDER = _a.AUTH_PROVIDER, CLIENT_CERT = _a.CLIENT_CERT;
var firebase_admin_1 = __importDefault(require("firebase-admin"));
var serviceAccount = {
    type: 'service_account',
    project_id: 'inkmark-d4044',
    private_key_id: 'a7c3a04d66d8c8fc39ce3ae9c7d30573a5e5e3d0',
    private_key: '-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQC1/ZkbzSiuE3wi\nr1N/h1bySA1BIS9NerUkKon+UCD+xflG3C/X80A/rzuoFqOghK8iR6z9p4Ynood1\n+JZ6H7r1b3F3R1msT8/jMdNjcDdirivePoT16L5rV7pFAqY7G2LSaOC7iIJNnLUK\nlVXSWY5okN1G/2hCl1dnqogsKzHqAEfl2AVXj8ckQPBHLXl/fLIiJ1LqMWHYGisa\nx4M5wi94f8zp/dFcp3Oi5Dw0ZMpFAVHYC5AckNDsFAUaeIBXSvkGHcyyUq0rG9oF\n0xEV5KT2bwIAJ+szHl+R7ibN8ItOOzJQ14y9tYdJHQEmVYI3xHGfKX/yN/GqUrqz\npUskmENhAgMBAAECggEABlm3cWTI7/0aUnAFhQBVIH5y5vRIXSbkYgMRfmQvqJBC\nNO6rRTj145sC5QhINKpYnaS8ZLwHJoQpf6x5XMDVcmnNfuzolEaTMaF8F77TUfBT\ns81A8L9KwL5mj7CqWgroOYEjIWwfpuNqXliMbnsFSQEQFaGFMviqukF1P7xQoTKK\n+0J/A/iS97PZhVMZnDAoNFvX1zL/SWF152yzK6Zw1e3hS0B/0uWCiYb2ZHvmh1ZK\nGDTdkUZhlM/9ED/DWhbwRIpfQRzei7AGsJDX6ybbEFawW2QxLZioiWATJXM/AmG4\nDfs8iF6eeh+5KpXsnhRLEFdQ4MNPi4MsLsOEPOXkKQKBgQDiDJOE2oEqkB3XJOjo\nAtv+V+hclYzuUXufNTXUCnji+KLm5iR1BVWVveJU7z8S4RYw7Cpli7ijM1hGInfR\n9WH038tuulb1On+DPHSfyswCXxO65Z+TyZy1rqgfWrQUZ60MDkftUZzoCiYMJEp7\nDGu1tBfCKunBovgDC0zD51k9WQKBgQDOGpbDZ/zcjRrqUnW3+h01h8Y8uWGjBHUt\n+a3iIrjkzHa9R+tuWP1UQZzJJj8HMXPVNNCjUp+w/sm5injBw960lqQbyLORQdTX\nkSC1KM+Yl7EsFp+BgzAR9pI++J1QVfut0JH//UT7kmVXreTG1GB0w2m0QSmTYlNn\nwFXXagJNSQKBgQCsQzc8PCPI4tDKvqb7AArUdftuas1eZBwYRL2DnINpPF8wJNxN\njUYeefj8DuJ7Kar2l1Lr1aFcRWmU8PlsuFnw+YcXF8viz7SSt0SM7Uew2vG3MPv9\n7NuOnM4kLsQi9KssD8oCcXpoXiuGfzV/NgTzEI42eutulBn6f+b9N9WK6QKBgQCo\notrOwewErbPjHFtTkGOL5C8QioJX9xLF7nAXAmAUXTOehhUdcdS9tv3JG/EgOpdT\nUOaRa85b7O0zUhiiOlijnEpkrWA3rwyu4QFJGT5a1WtS7qPOPX/8gqqAub1F+UR3\noJuFQD7MNKmVBySUhzrw7t8zbMnO3Pnvf1D9c7C0eQKBgQDgRVECqdb2z69ArY4f\ntuKOJD/4BNBAWgLCxCFzF1OzkJEkxCLpWWcejOA1q+bp73Nvo85DidwO5JYUfbR3\nNCJfU2sOjKkfNWDbGTSdZKH/pPMkItHFkbdz8wl+6O/4pRVFT7GRsGTGHiRfxA+p\nKq4yHM7YvLL5I2IavXikXXznNg==\n-----END PRIVATE KEY-----\n',
    client_email: 'firebase-adminsdk-zvc83@inkmark-d4044.iam.gserviceaccount.com',
    client_id: '104977669297413858782',
    auth_uri: 'https://accounts.google.com/o/oauth2/auth',
    token_uri: 'https://oauth2.googleapis.com/token',
    auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
    client_x509_cert_url: 'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-zvc83%40inkmark-d4044.iam.gserviceaccount.com'
};
firebase_admin_1.default.initializeApp({
    credential: firebase_admin_1.default.credential.cert(serviceAccount),
    databaseURL: 'https://inkmark-d4044.firebaseio.com'
});
// export services
exports.auth = firebase_admin_1.default.auth;
exports.storage = firebase_admin_1.default.storage();
exports.firestore = firebase_admin_1.default.firestore();
exports.database = firebase_admin_1.default.database();
exports.FieldValue = firebase_admin_1.default.firestore.FieldValue;
exports.Timestamp = firebase_admin_1.default.firestore.Timestamp;
