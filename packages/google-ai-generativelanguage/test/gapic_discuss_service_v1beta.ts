// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **

import * as protos from '../protos/protos';
import * as assert from 'assert';
import * as sinon from 'sinon';
import {SinonStub} from 'sinon';
import {describe, it} from 'mocha';
import * as discussserviceModule from '../src';

import {protobuf} from 'google-gax';

// Dynamically loaded proto JSON is needed to get the type information
// to fill in default values for request objects
const root = protobuf.Root.fromJSON(require('../protos/protos.json')).resolveAll();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function getTypeDefaultValue(typeName: string, fields: string[]) {
    let type = root.lookupType(typeName) as protobuf.Type;
    for (const field of fields.slice(0, -1)) {
        type = type.fields[field]?.resolvedType as protobuf.Type;
    }
    return type.fields[fields[fields.length - 1]]?.defaultValue;
}

function generateSampleMessage<T extends object>(instance: T) {
    const filledObject = (instance.constructor as typeof protobuf.Message)
        .toObject(instance as protobuf.Message<T>, {defaults: true});
    return (instance.constructor as typeof protobuf.Message).fromObject(filledObject) as T;
}

function stubSimpleCall<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().rejects(error) : sinon.stub().resolves([response]);
}

function stubSimpleCallWithCallback<ResponseType>(response?: ResponseType, error?: Error) {
    return error ? sinon.stub().callsArgWith(2, error) : sinon.stub().callsArgWith(2, null, response);
}

describe('v1beta.DiscussServiceClient', () => {
    describe('Common methods', () => {
        it('has apiEndpoint', () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient();
            const apiEndpoint = client.apiEndpoint;
            assert.strictEqual(apiEndpoint, 'generativelanguage.googleapis.com');
        });

        it('has universeDomain', () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient();
            const universeDomain = client.universeDomain;
            assert.strictEqual(universeDomain, "googleapis.com");
        });

        if (typeof process === 'object' && typeof process.emitWarning === 'function') {
            it('throws DeprecationWarning if static servicePath is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const servicePath = discussserviceModule.v1beta.DiscussServiceClient.servicePath;
                assert.strictEqual(servicePath, 'generativelanguage.googleapis.com');
                assert(stub.called);
                stub.restore();
            });

            it('throws DeprecationWarning if static apiEndpoint is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const apiEndpoint = discussserviceModule.v1beta.DiscussServiceClient.apiEndpoint;
                assert.strictEqual(apiEndpoint, 'generativelanguage.googleapis.com');
                assert(stub.called);
                stub.restore();
            });
        }
        it('sets apiEndpoint according to universe domain camelCase', () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({universeDomain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'generativelanguage.example.com');
        });

        it('sets apiEndpoint according to universe domain snakeCase', () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({universe_domain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'generativelanguage.example.com');
        });

        if (typeof process === 'object' && 'env' in process) {
            describe('GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable', () => {
                it('sets apiEndpoint from environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new discussserviceModule.v1beta.DiscussServiceClient();
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'generativelanguage.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });

                it('value configured in code has priority over environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new discussserviceModule.v1beta.DiscussServiceClient({universeDomain: 'configured.example.com'});
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'generativelanguage.configured.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });
            });
        }
        it('does not allow setting both universeDomain and universe_domain', () => {
            assert.throws(() => { new discussserviceModule.v1beta.DiscussServiceClient({universe_domain: 'example.com', universeDomain: 'example.net'}); });
        });

        it('has port', () => {
            const port = discussserviceModule.v1beta.DiscussServiceClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.discussServiceStub, undefined);
            await client.initialize();
            assert(client.discussServiceStub);
        });

        it('has close method for the initialized client', done => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize().catch(err => {throw err});
            assert(client.discussServiceStub);
            client.close().then(() => {
                done();
            }).catch(err => {throw err});
        });

        it('has close method for the non-initialized client', done => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.discussServiceStub, undefined);
            client.close().then(() => {
                done();
            }).catch(err => {throw err});
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().resolves(fakeProjectId);
            const result = await client.getProjectId();
            assert.strictEqual(result, fakeProjectId);
            assert((client.auth.getProjectId as SinonStub).calledWithExactly());
        });

        it('has getProjectId method with callback', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.auth.getProjectId = sinon.stub().callsArgWith(0, null, fakeProjectId);
            const promise = new Promise((resolve, reject) => {
                client.getProjectId((err?: Error|null, projectId?: string|null) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(projectId);
                    }
                });
            });
            const result = await promise;
            assert.strictEqual(result, fakeProjectId);
        });
    });

    describe('generateMessage', () => {
        it('invokes generateMessage without error', async () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.ai.generativelanguage.v1beta.GenerateMessageRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.ai.generativelanguage.v1beta.GenerateMessageRequest', ['model']);
            request.model = defaultValue1;
            const expectedHeaderRequestParams = `model=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.ai.generativelanguage.v1beta.GenerateMessageResponse()
            );
            client.innerApiCalls.generateMessage = stubSimpleCall(expectedResponse);
            const [response] = await client.generateMessage(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.generateMessage as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.generateMessage as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes generateMessage without error using callback', async () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.ai.generativelanguage.v1beta.GenerateMessageRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.ai.generativelanguage.v1beta.GenerateMessageRequest', ['model']);
            request.model = defaultValue1;
            const expectedHeaderRequestParams = `model=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.ai.generativelanguage.v1beta.GenerateMessageResponse()
            );
            client.innerApiCalls.generateMessage = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.generateMessage(
                    request,
                    (err?: Error|null, result?: protos.google.ai.generativelanguage.v1beta.IGenerateMessageResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.generateMessage as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.generateMessage as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes generateMessage with error', async () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.ai.generativelanguage.v1beta.GenerateMessageRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.ai.generativelanguage.v1beta.GenerateMessageRequest', ['model']);
            request.model = defaultValue1;
            const expectedHeaderRequestParams = `model=${defaultValue1 ?? '' }`;
            const expectedError = new Error('expected');
            client.innerApiCalls.generateMessage = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.generateMessage(request), expectedError);
            const actualRequest = (client.innerApiCalls.generateMessage as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.generateMessage as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes generateMessage with closed client', async () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.ai.generativelanguage.v1beta.GenerateMessageRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.ai.generativelanguage.v1beta.GenerateMessageRequest', ['model']);
            request.model = defaultValue1;
            const expectedError = new Error('The client has already been closed.');
            client.close().catch(err => {throw err});
            await assert.rejects(client.generateMessage(request), expectedError);
        });
    });

    describe('countMessageTokens', () => {
        it('invokes countMessageTokens without error', async () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.ai.generativelanguage.v1beta.CountMessageTokensRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.ai.generativelanguage.v1beta.CountMessageTokensRequest', ['model']);
            request.model = defaultValue1;
            const expectedHeaderRequestParams = `model=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.ai.generativelanguage.v1beta.CountMessageTokensResponse()
            );
            client.innerApiCalls.countMessageTokens = stubSimpleCall(expectedResponse);
            const [response] = await client.countMessageTokens(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.countMessageTokens as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.countMessageTokens as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes countMessageTokens without error using callback', async () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.ai.generativelanguage.v1beta.CountMessageTokensRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.ai.generativelanguage.v1beta.CountMessageTokensRequest', ['model']);
            request.model = defaultValue1;
            const expectedHeaderRequestParams = `model=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.ai.generativelanguage.v1beta.CountMessageTokensResponse()
            );
            client.innerApiCalls.countMessageTokens = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.countMessageTokens(
                    request,
                    (err?: Error|null, result?: protos.google.ai.generativelanguage.v1beta.ICountMessageTokensResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.countMessageTokens as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.countMessageTokens as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes countMessageTokens with error', async () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.ai.generativelanguage.v1beta.CountMessageTokensRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.ai.generativelanguage.v1beta.CountMessageTokensRequest', ['model']);
            request.model = defaultValue1;
            const expectedHeaderRequestParams = `model=${defaultValue1 ?? '' }`;
            const expectedError = new Error('expected');
            client.innerApiCalls.countMessageTokens = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.countMessageTokens(request), expectedError);
            const actualRequest = (client.innerApiCalls.countMessageTokens as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.countMessageTokens as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes countMessageTokens with closed client', async () => {
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.ai.generativelanguage.v1beta.CountMessageTokensRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.ai.generativelanguage.v1beta.CountMessageTokensRequest', ['model']);
            request.model = defaultValue1;
            const expectedError = new Error('The client has already been closed.');
            client.close().catch(err => {throw err});
            await assert.rejects(client.countMessageTokens(request), expectedError);
        });
    });

    describe('Path templates', () => {

        describe('cachedContent', async () => {
            const fakePath = "/rendered/path/cachedContent";
            const expectedParameters = {
                id: "idValue",
            };
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.cachedContentPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.cachedContentPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('cachedContentPath', () => {
                const result = client.cachedContentPath("idValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.cachedContentPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchIdFromCachedContentName', () => {
                const result = client.matchIdFromCachedContentName(fakePath);
                assert.strictEqual(result, "idValue");
                assert((client.pathTemplates.cachedContentPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('chunk', async () => {
            const fakePath = "/rendered/path/chunk";
            const expectedParameters = {
                corpus: "corpusValue",
                document: "documentValue",
                chunk: "chunkValue",
            };
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.chunkPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.chunkPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('chunkPath', () => {
                const result = client.chunkPath("corpusValue", "documentValue", "chunkValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.chunkPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchCorpusFromChunkName', () => {
                const result = client.matchCorpusFromChunkName(fakePath);
                assert.strictEqual(result, "corpusValue");
                assert((client.pathTemplates.chunkPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchDocumentFromChunkName', () => {
                const result = client.matchDocumentFromChunkName(fakePath);
                assert.strictEqual(result, "documentValue");
                assert((client.pathTemplates.chunkPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchChunkFromChunkName', () => {
                const result = client.matchChunkFromChunkName(fakePath);
                assert.strictEqual(result, "chunkValue");
                assert((client.pathTemplates.chunkPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('corpus', async () => {
            const fakePath = "/rendered/path/corpus";
            const expectedParameters = {
                corpus: "corpusValue",
            };
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.corpusPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.corpusPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('corpusPath', () => {
                const result = client.corpusPath("corpusValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.corpusPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchCorpusFromCorpusName', () => {
                const result = client.matchCorpusFromCorpusName(fakePath);
                assert.strictEqual(result, "corpusValue");
                assert((client.pathTemplates.corpusPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('corpusPermissions', async () => {
            const fakePath = "/rendered/path/corpusPermissions";
            const expectedParameters = {
                corpus: "corpusValue",
                permission: "permissionValue",
            };
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.corpusPermissionsPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.corpusPermissionsPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('corpusPermissionsPath', () => {
                const result = client.corpusPermissionsPath("corpusValue", "permissionValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.corpusPermissionsPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchCorpusFromCorpusPermissionsName', () => {
                const result = client.matchCorpusFromCorpusPermissionsName(fakePath);
                assert.strictEqual(result, "corpusValue");
                assert((client.pathTemplates.corpusPermissionsPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchPermissionFromCorpusPermissionsName', () => {
                const result = client.matchPermissionFromCorpusPermissionsName(fakePath);
                assert.strictEqual(result, "permissionValue");
                assert((client.pathTemplates.corpusPermissionsPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('document', async () => {
            const fakePath = "/rendered/path/document";
            const expectedParameters = {
                corpus: "corpusValue",
                document: "documentValue",
            };
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.documentPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.documentPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('documentPath', () => {
                const result = client.documentPath("corpusValue", "documentValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.documentPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchCorpusFromDocumentName', () => {
                const result = client.matchCorpusFromDocumentName(fakePath);
                assert.strictEqual(result, "corpusValue");
                assert((client.pathTemplates.documentPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchDocumentFromDocumentName', () => {
                const result = client.matchDocumentFromDocumentName(fakePath);
                assert.strictEqual(result, "documentValue");
                assert((client.pathTemplates.documentPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('file', async () => {
            const fakePath = "/rendered/path/file";
            const expectedParameters = {
                file: "fileValue",
            };
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.filePathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.filePathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('filePath', () => {
                const result = client.filePath("fileValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.filePathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchFileFromFileName', () => {
                const result = client.matchFileFromFileName(fakePath);
                assert.strictEqual(result, "fileValue");
                assert((client.pathTemplates.filePathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('model', async () => {
            const fakePath = "/rendered/path/model";
            const expectedParameters = {
                model: "modelValue",
            };
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.modelPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.modelPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('modelPath', () => {
                const result = client.modelPath("modelValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.modelPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchModelFromModelName', () => {
                const result = client.matchModelFromModelName(fakePath);
                assert.strictEqual(result, "modelValue");
                assert((client.pathTemplates.modelPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('tunedModel', async () => {
            const fakePath = "/rendered/path/tunedModel";
            const expectedParameters = {
                tuned_model: "tunedModelValue",
            };
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.tunedModelPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.tunedModelPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('tunedModelPath', () => {
                const result = client.tunedModelPath("tunedModelValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.tunedModelPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchTunedModelFromTunedModelName', () => {
                const result = client.matchTunedModelFromTunedModelName(fakePath);
                assert.strictEqual(result, "tunedModelValue");
                assert((client.pathTemplates.tunedModelPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('tunedModelPermissions', async () => {
            const fakePath = "/rendered/path/tunedModelPermissions";
            const expectedParameters = {
                tuned_model: "tunedModelValue",
                permission: "permissionValue",
            };
            const client = new discussserviceModule.v1beta.DiscussServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.tunedModelPermissionsPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.tunedModelPermissionsPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('tunedModelPermissionsPath', () => {
                const result = client.tunedModelPermissionsPath("tunedModelValue", "permissionValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.tunedModelPermissionsPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchTunedModelFromTunedModelPermissionsName', () => {
                const result = client.matchTunedModelFromTunedModelPermissionsName(fakePath);
                assert.strictEqual(result, "tunedModelValue");
                assert((client.pathTemplates.tunedModelPermissionsPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchPermissionFromTunedModelPermissionsName', () => {
                const result = client.matchPermissionFromTunedModelPermissionsName(fakePath);
                assert.strictEqual(result, "permissionValue");
                assert((client.pathTemplates.tunedModelPermissionsPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });
    });
});
