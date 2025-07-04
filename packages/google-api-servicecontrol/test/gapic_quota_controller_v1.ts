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
import * as quotacontrollerModule from '../src';

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

describe('v1.QuotaControllerClient', () => {
    describe('Common methods', () => {
        it('has apiEndpoint', () => {
            const client = new quotacontrollerModule.v1.QuotaControllerClient();
            const apiEndpoint = client.apiEndpoint;
            assert.strictEqual(apiEndpoint, 'servicecontrol.googleapis.com');
        });

        it('has universeDomain', () => {
            const client = new quotacontrollerModule.v1.QuotaControllerClient();
            const universeDomain = client.universeDomain;
            assert.strictEqual(universeDomain, "googleapis.com");
        });

        if (typeof process === 'object' && typeof process.emitWarning === 'function') {
            it('throws DeprecationWarning if static servicePath is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const servicePath = quotacontrollerModule.v1.QuotaControllerClient.servicePath;
                assert.strictEqual(servicePath, 'servicecontrol.googleapis.com');
                assert(stub.called);
                stub.restore();
            });

            it('throws DeprecationWarning if static apiEndpoint is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const apiEndpoint = quotacontrollerModule.v1.QuotaControllerClient.apiEndpoint;
                assert.strictEqual(apiEndpoint, 'servicecontrol.googleapis.com');
                assert(stub.called);
                stub.restore();
            });
        }
        it('sets apiEndpoint according to universe domain camelCase', () => {
            const client = new quotacontrollerModule.v1.QuotaControllerClient({universeDomain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'servicecontrol.example.com');
        });

        it('sets apiEndpoint according to universe domain snakeCase', () => {
            const client = new quotacontrollerModule.v1.QuotaControllerClient({universe_domain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'servicecontrol.example.com');
        });

        if (typeof process === 'object' && 'env' in process) {
            describe('GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable', () => {
                it('sets apiEndpoint from environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new quotacontrollerModule.v1.QuotaControllerClient();
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'servicecontrol.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });

                it('value configured in code has priority over environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new quotacontrollerModule.v1.QuotaControllerClient({universeDomain: 'configured.example.com'});
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'servicecontrol.configured.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });
            });
        }
        it('does not allow setting both universeDomain and universe_domain', () => {
            assert.throws(() => { new quotacontrollerModule.v1.QuotaControllerClient({universe_domain: 'example.com', universeDomain: 'example.net'}); });
        });

        it('has port', () => {
            const port = quotacontrollerModule.v1.QuotaControllerClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new quotacontrollerModule.v1.QuotaControllerClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new quotacontrollerModule.v1.QuotaControllerClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new quotacontrollerModule.v1.QuotaControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.quotaControllerStub, undefined);
            await client.initialize();
            assert(client.quotaControllerStub);
        });

        it('has close method for the initialized client', done => {
            const client = new quotacontrollerModule.v1.QuotaControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize().catch(err => {throw err});
            assert(client.quotaControllerStub);
            client.close().then(() => {
                done();
            }).catch(err => {throw err});
        });

        it('has close method for the non-initialized client', done => {
            const client = new quotacontrollerModule.v1.QuotaControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.quotaControllerStub, undefined);
            client.close().then(() => {
                done();
            }).catch(err => {throw err});
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new quotacontrollerModule.v1.QuotaControllerClient({
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
            const client = new quotacontrollerModule.v1.QuotaControllerClient({
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

    describe('allocateQuota', () => {
        it('invokes allocateQuota without error', async () => {
            const client = new quotacontrollerModule.v1.QuotaControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.api.servicecontrol.v1.AllocateQuotaRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.api.servicecontrol.v1.AllocateQuotaRequest', ['serviceName']);
            request.serviceName = defaultValue1;
            const expectedHeaderRequestParams = `service_name=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.api.servicecontrol.v1.AllocateQuotaResponse()
            );
            client.innerApiCalls.allocateQuota = stubSimpleCall(expectedResponse);
            const [response] = await client.allocateQuota(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.allocateQuota as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.allocateQuota as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes allocateQuota without error using callback', async () => {
            const client = new quotacontrollerModule.v1.QuotaControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.api.servicecontrol.v1.AllocateQuotaRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.api.servicecontrol.v1.AllocateQuotaRequest', ['serviceName']);
            request.serviceName = defaultValue1;
            const expectedHeaderRequestParams = `service_name=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.api.servicecontrol.v1.AllocateQuotaResponse()
            );
            client.innerApiCalls.allocateQuota = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.allocateQuota(
                    request,
                    (err?: Error|null, result?: protos.google.api.servicecontrol.v1.IAllocateQuotaResponse|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.allocateQuota as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.allocateQuota as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes allocateQuota with error', async () => {
            const client = new quotacontrollerModule.v1.QuotaControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.api.servicecontrol.v1.AllocateQuotaRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.api.servicecontrol.v1.AllocateQuotaRequest', ['serviceName']);
            request.serviceName = defaultValue1;
            const expectedHeaderRequestParams = `service_name=${defaultValue1 ?? '' }`;
            const expectedError = new Error('expected');
            client.innerApiCalls.allocateQuota = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.allocateQuota(request), expectedError);
            const actualRequest = (client.innerApiCalls.allocateQuota as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.allocateQuota as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes allocateQuota with closed client', async () => {
            const client = new quotacontrollerModule.v1.QuotaControllerClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.api.servicecontrol.v1.AllocateQuotaRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.api.servicecontrol.v1.AllocateQuotaRequest', ['serviceName']);
            request.serviceName = defaultValue1;
            const expectedError = new Error('The client has already been closed.');
            client.close().catch(err => {throw err});
            await assert.rejects(client.allocateQuota(request), expectedError);
        });
    });
});
