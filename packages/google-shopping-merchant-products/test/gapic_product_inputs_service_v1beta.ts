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
import * as productinputsserviceModule from '../src';

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

describe('v1beta.ProductInputsServiceClient', () => {
    describe('Common methods', () => {
        it('has apiEndpoint', () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient();
            const apiEndpoint = client.apiEndpoint;
            assert.strictEqual(apiEndpoint, 'merchantapi.googleapis.com');
        });

        it('has universeDomain', () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient();
            const universeDomain = client.universeDomain;
            assert.strictEqual(universeDomain, "googleapis.com");
        });

        if (typeof process === 'object' && typeof process.emitWarning === 'function') {
            it('throws DeprecationWarning if static servicePath is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const servicePath = productinputsserviceModule.v1beta.ProductInputsServiceClient.servicePath;
                assert.strictEqual(servicePath, 'merchantapi.googleapis.com');
                assert(stub.called);
                stub.restore();
            });

            it('throws DeprecationWarning if static apiEndpoint is used', () => {
                const stub = sinon.stub(process, 'emitWarning');
                const apiEndpoint = productinputsserviceModule.v1beta.ProductInputsServiceClient.apiEndpoint;
                assert.strictEqual(apiEndpoint, 'merchantapi.googleapis.com');
                assert(stub.called);
                stub.restore();
            });
        }
        it('sets apiEndpoint according to universe domain camelCase', () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({universeDomain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'merchantapi.example.com');
        });

        it('sets apiEndpoint according to universe domain snakeCase', () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({universe_domain: 'example.com'});
            const servicePath = client.apiEndpoint;
            assert.strictEqual(servicePath, 'merchantapi.example.com');
        });

        if (typeof process === 'object' && 'env' in process) {
            describe('GOOGLE_CLOUD_UNIVERSE_DOMAIN environment variable', () => {
                it('sets apiEndpoint from environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient();
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'merchantapi.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });

                it('value configured in code has priority over environment variable', () => {
                    const saved = process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = 'example.com';
                    const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({universeDomain: 'configured.example.com'});
                    const servicePath = client.apiEndpoint;
                    assert.strictEqual(servicePath, 'merchantapi.configured.example.com');
                    if (saved) {
                        process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] = saved;
                    } else {
                        delete process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'];
                    }
                });
            });
        }
        it('does not allow setting both universeDomain and universe_domain', () => {
            assert.throws(() => { new productinputsserviceModule.v1beta.ProductInputsServiceClient({universe_domain: 'example.com', universeDomain: 'example.net'}); });
        });

        it('has port', () => {
            const port = productinputsserviceModule.v1beta.ProductInputsServiceClient.port;
            assert(port);
            assert(typeof port === 'number');
        });

        it('should create a client with no option', () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient();
            assert(client);
        });

        it('should create a client with gRPC fallback', () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
                fallback: true,
            });
            assert(client);
        });

        it('has initialize method and supports deferred initialization', async () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.productInputsServiceStub, undefined);
            await client.initialize();
            assert(client.productInputsServiceStub);
        });

        it('has close method for the initialized client', done => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            client.initialize().catch(err => {throw err});
            assert(client.productInputsServiceStub);
            client.close().then(() => {
                done();
            }).catch(err => {throw err});
        });

        it('has close method for the non-initialized client', done => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            assert.strictEqual(client.productInputsServiceStub, undefined);
            client.close().then(() => {
                done();
            }).catch(err => {throw err});
        });

        it('has getProjectId method', async () => {
            const fakeProjectId = 'fake-project-id';
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
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
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
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

    describe('insertProductInput', () => {
        it('invokes insertProductInput without error', async () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.InsertProductInputRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.shopping.merchant.products.v1beta.InsertProductInputRequest', ['parent']);
            request.parent = defaultValue1;
            const expectedHeaderRequestParams = `parent=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.ProductInput()
            );
            client.innerApiCalls.insertProductInput = stubSimpleCall(expectedResponse);
            const [response] = await client.insertProductInput(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.insertProductInput as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.insertProductInput as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes insertProductInput without error using callback', async () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.InsertProductInputRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.shopping.merchant.products.v1beta.InsertProductInputRequest', ['parent']);
            request.parent = defaultValue1;
            const expectedHeaderRequestParams = `parent=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.ProductInput()
            );
            client.innerApiCalls.insertProductInput = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.insertProductInput(
                    request,
                    (err?: Error|null, result?: protos.google.shopping.merchant.products.v1beta.IProductInput|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.insertProductInput as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.insertProductInput as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes insertProductInput with error', async () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.InsertProductInputRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.shopping.merchant.products.v1beta.InsertProductInputRequest', ['parent']);
            request.parent = defaultValue1;
            const expectedHeaderRequestParams = `parent=${defaultValue1 ?? '' }`;
            const expectedError = new Error('expected');
            client.innerApiCalls.insertProductInput = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.insertProductInput(request), expectedError);
            const actualRequest = (client.innerApiCalls.insertProductInput as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.insertProductInput as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes insertProductInput with closed client', async () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.InsertProductInputRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.shopping.merchant.products.v1beta.InsertProductInputRequest', ['parent']);
            request.parent = defaultValue1;
            const expectedError = new Error('The client has already been closed.');
            client.close().catch(err => {throw err});
            await assert.rejects(client.insertProductInput(request), expectedError);
        });
    });

    describe('updateProductInput', () => {
        it('invokes updateProductInput without error', async () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.UpdateProductInputRequest()
            );
            request.productInput ??= {};
            const defaultValue1 =
              getTypeDefaultValue('.google.shopping.merchant.products.v1beta.UpdateProductInputRequest', ['productInput', 'name']);
            request.productInput.name = defaultValue1;
            const expectedHeaderRequestParams = `product_input.name=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.ProductInput()
            );
            client.innerApiCalls.updateProductInput = stubSimpleCall(expectedResponse);
            const [response] = await client.updateProductInput(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.updateProductInput as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.updateProductInput as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes updateProductInput without error using callback', async () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.UpdateProductInputRequest()
            );
            request.productInput ??= {};
            const defaultValue1 =
              getTypeDefaultValue('.google.shopping.merchant.products.v1beta.UpdateProductInputRequest', ['productInput', 'name']);
            request.productInput.name = defaultValue1;
            const expectedHeaderRequestParams = `product_input.name=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.ProductInput()
            );
            client.innerApiCalls.updateProductInput = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.updateProductInput(
                    request,
                    (err?: Error|null, result?: protos.google.shopping.merchant.products.v1beta.IProductInput|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.updateProductInput as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.updateProductInput as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes updateProductInput with error', async () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.UpdateProductInputRequest()
            );
            request.productInput ??= {};
            const defaultValue1 =
              getTypeDefaultValue('.google.shopping.merchant.products.v1beta.UpdateProductInputRequest', ['productInput', 'name']);
            request.productInput.name = defaultValue1;
            const expectedHeaderRequestParams = `product_input.name=${defaultValue1 ?? '' }`;
            const expectedError = new Error('expected');
            client.innerApiCalls.updateProductInput = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.updateProductInput(request), expectedError);
            const actualRequest = (client.innerApiCalls.updateProductInput as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.updateProductInput as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes updateProductInput with closed client', async () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.UpdateProductInputRequest()
            );
            request.productInput ??= {};
            const defaultValue1 =
              getTypeDefaultValue('.google.shopping.merchant.products.v1beta.UpdateProductInputRequest', ['productInput', 'name']);
            request.productInput.name = defaultValue1;
            const expectedError = new Error('The client has already been closed.');
            client.close().catch(err => {throw err});
            await assert.rejects(client.updateProductInput(request), expectedError);
        });
    });

    describe('deleteProductInput', () => {
        it('invokes deleteProductInput without error', async () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.DeleteProductInputRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.shopping.merchant.products.v1beta.DeleteProductInputRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.protobuf.Empty()
            );
            client.innerApiCalls.deleteProductInput = stubSimpleCall(expectedResponse);
            const [response] = await client.deleteProductInput(request);
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.deleteProductInput as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.deleteProductInput as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes deleteProductInput without error using callback', async () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.DeleteProductInputRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.shopping.merchant.products.v1beta.DeleteProductInputRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1 ?? '' }`;
            const expectedResponse = generateSampleMessage(
              new protos.google.protobuf.Empty()
            );
            client.innerApiCalls.deleteProductInput = stubSimpleCallWithCallback(expectedResponse);
            const promise = new Promise((resolve, reject) => {
                 client.deleteProductInput(
                    request,
                    (err?: Error|null, result?: protos.google.protobuf.IEmpty|null) => {
                        if (err) {
                            reject(err);
                        } else {
                            resolve(result);
                        }
                    });
            });
            const response = await promise;
            assert.deepStrictEqual(response, expectedResponse);
            const actualRequest = (client.innerApiCalls.deleteProductInput as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.deleteProductInput as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes deleteProductInput with error', async () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.DeleteProductInputRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.shopping.merchant.products.v1beta.DeleteProductInputRequest', ['name']);
            request.name = defaultValue1;
            const expectedHeaderRequestParams = `name=${defaultValue1 ?? '' }`;
            const expectedError = new Error('expected');
            client.innerApiCalls.deleteProductInput = stubSimpleCall(undefined, expectedError);
            await assert.rejects(client.deleteProductInput(request), expectedError);
            const actualRequest = (client.innerApiCalls.deleteProductInput as SinonStub)
                .getCall(0).args[0];
            assert.deepStrictEqual(actualRequest, request);
            const actualHeaderRequestParams = (client.innerApiCalls.deleteProductInput as SinonStub)
                .getCall(0).args[1].otherArgs.headers['x-goog-request-params'];
            assert(actualHeaderRequestParams.includes(expectedHeaderRequestParams));
        });

        it('invokes deleteProductInput with closed client', async () => {
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
              credentials: {client_email: 'bogus', private_key: 'bogus'},
              projectId: 'bogus',
            });
            await client.initialize();
            const request = generateSampleMessage(
              new protos.google.shopping.merchant.products.v1beta.DeleteProductInputRequest()
            );
            const defaultValue1 =
              getTypeDefaultValue('.google.shopping.merchant.products.v1beta.DeleteProductInputRequest', ['name']);
            request.name = defaultValue1;
            const expectedError = new Error('The client has already been closed.');
            client.close().catch(err => {throw err});
            await assert.rejects(client.deleteProductInput(request), expectedError);
        });
    });

    describe('Path templates', () => {

        describe('account', async () => {
            const fakePath = "/rendered/path/account";
            const expectedParameters = {
                account: "accountValue",
            };
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.accountPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.accountPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('accountPath', () => {
                const result = client.accountPath("accountValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.accountPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchAccountFromAccountName', () => {
                const result = client.matchAccountFromAccountName(fakePath);
                assert.strictEqual(result, "accountValue");
                assert((client.pathTemplates.accountPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('product', async () => {
            const fakePath = "/rendered/path/product";
            const expectedParameters = {
                account: "accountValue",
                product: "productValue",
            };
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.productPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.productPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('productPath', () => {
                const result = client.productPath("accountValue", "productValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.productPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchAccountFromProductName', () => {
                const result = client.matchAccountFromProductName(fakePath);
                assert.strictEqual(result, "accountValue");
                assert((client.pathTemplates.productPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchProductFromProductName', () => {
                const result = client.matchProductFromProductName(fakePath);
                assert.strictEqual(result, "productValue");
                assert((client.pathTemplates.productPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });

        describe('productInput', async () => {
            const fakePath = "/rendered/path/productInput";
            const expectedParameters = {
                account: "accountValue",
                productinput: "productinputValue",
            };
            const client = new productinputsserviceModule.v1beta.ProductInputsServiceClient({
                credentials: {client_email: 'bogus', private_key: 'bogus'},
                projectId: 'bogus',
            });
            await client.initialize();
            client.pathTemplates.productInputPathTemplate.render =
                sinon.stub().returns(fakePath);
            client.pathTemplates.productInputPathTemplate.match =
                sinon.stub().returns(expectedParameters);

            it('productInputPath', () => {
                const result = client.productInputPath("accountValue", "productinputValue");
                assert.strictEqual(result, fakePath);
                assert((client.pathTemplates.productInputPathTemplate.render as SinonStub)
                    .getCall(-1).calledWith(expectedParameters));
            });

            it('matchAccountFromProductInputName', () => {
                const result = client.matchAccountFromProductInputName(fakePath);
                assert.strictEqual(result, "accountValue");
                assert((client.pathTemplates.productInputPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });

            it('matchProductinputFromProductInputName', () => {
                const result = client.matchProductinputFromProductInputName(fakePath);
                assert.strictEqual(result, "productinputValue");
                assert((client.pathTemplates.productInputPathTemplate.match as SinonStub)
                    .getCall(-1).calledWith(fakePath));
            });
        });
    });
});
