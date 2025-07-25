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

/* global window */
import type * as gax from 'google-gax';
import type {Callback, CallOptions, Descriptors, ClientOptions} from 'google-gax';

import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
import {loggingUtils as logging, decodeAnyProtosInArray} from 'google-gax';

/**
 * Client JSON configuration object, loaded from
 * `src/v1beta/lfp_inventory_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './lfp_inventory_service_client_config.json';
const version = require('../../../package.json').version;

/**
 *  Service for a [LFP
 *  partner](https://support.google.com/merchants/answer/7676652) to submit local
 *  inventories for a merchant.
 * @class
 * @memberof v1beta
 */
export class LfpInventoryServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
  private _universeDomain: string;
  private _servicePath: string;
  private _log = logging.log('lfp');

  auth: gax.GoogleAuth;
  descriptors: Descriptors = {
    page: {},
    stream: {},
    longrunning: {},
    batching: {},
  };
  warn: (code: string, message: string, warnType?: string) => void;
  innerApiCalls: {[name: string]: Function};
  pathTemplates: {[name: string]: gax.PathTemplate};
  lfpInventoryServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of LfpInventoryServiceClient.
   *
   * @param {object} [options] - The configuration object.
   * The options accepted by the constructor are described in detail
   * in [this document](https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#creating-the-client-instance).
   * The common options are:
   * @param {object} [options.credentials] - Credentials object.
   * @param {string} [options.credentials.client_email]
   * @param {string} [options.credentials.private_key]
   * @param {string} [options.email] - Account email address. Required when
   *     using a .pem or .p12 keyFilename.
   * @param {string} [options.keyFilename] - Full path to the a .json, .pem, or
   *     .p12 key downloaded from the Google Developers Console. If you provide
   *     a path to a JSON file, the projectId option below is not necessary.
   *     NOTE: .pem and .p12 require you to specify options.email as well.
   * @param {number} [options.port] - The port on which to connect to
   *     the remote host.
   * @param {string} [options.projectId] - The project ID from the Google
   *     Developer's Console, e.g. 'grape-spaceship-123'. We will also check
   *     the environment variable GCLOUD_PROJECT for your project ID. If your
   *     app is running in an environment which supports
   *     {@link https://cloud.google.com/docs/authentication/application-default-credentials Application Default Credentials},
   *     your project ID will be detected automatically.
   * @param {string} [options.apiEndpoint] - The domain name of the
   *     API remote host.
   * @param {gax.ClientConfig} [options.clientConfig] - Client configuration override.
   *     Follows the structure of {@link gapicConfig}.
   * @param {boolean} [options.fallback] - Use HTTP/1.1 REST mode.
   *     For more information, please check the
   *     {@link https://github.com/googleapis/gax-nodejs/blob/main/client-libraries.md#http11-rest-api-mode documentation}.
   * @param {gax} [gaxInstance]: loaded instance of `google-gax`. Useful if you
   *     need to avoid loading the default gRPC version and want to use the fallback
   *     HTTP implementation. Load only fallback version and pass it to the constructor:
   *     ```
   *     const gax = require('google-gax/build/src/fallback'); // avoids loading google-gax with gRPC
   *     const client = new LfpInventoryServiceClient({fallback: true}, gax);
   *     ```
   */
  constructor(opts?: ClientOptions, gaxInstance?: typeof gax | typeof gax.fallback) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof LfpInventoryServiceClient;
    if (opts?.universe_domain && opts?.universeDomain && opts?.universe_domain !== opts?.universeDomain) {
      throw new Error('Please set either universe_domain or universeDomain, but not both.');
    }
    const universeDomainEnvVar = (typeof process === 'object' && typeof process.env === 'object') ? process.env['GOOGLE_CLOUD_UNIVERSE_DOMAIN'] : undefined;
    this._universeDomain = opts?.universeDomain ?? opts?.universe_domain ?? universeDomainEnvVar ?? 'googleapis.com';
    this._servicePath = 'merchantapi.' + this._universeDomain;
    const servicePath = opts?.servicePath || opts?.apiEndpoint || this._servicePath;
    this._providedCustomServicePath = !!(opts?.servicePath || opts?.apiEndpoint);
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback = opts?.fallback ?? (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // Request numeric enum values if REST transport is used.
    opts.numericEnums = true;

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== this._servicePath && !('scopes' in opts)) {
      opts['scopes'] = staticMembers.scopes;
    }

    // Load google-gax module synchronously if needed
    if (!gaxInstance) {
      gaxInstance = require('google-gax') as typeof gax;
    }

    // Choose either gRPC or proto-over-HTTP implementation of google-gax.
    this._gaxModule = opts.fallback ? gaxInstance.fallback : gaxInstance;

    // Create a `gaxGrpc` object, with any grpc-specific options sent to the client.
    this._gaxGrpc = new this._gaxModule.GrpcClient(opts);

    // Save options to use in initialize() method.
    this._opts = opts;

    // Save the auth object to the client, for use by other methods.
    this.auth = (this._gaxGrpc.auth as gax.GoogleAuth);

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = this._servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === this._servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [
      `gax/${this._gaxModule.version}`,
      `gapic/${version}`,
    ];
    if (typeof process === 'object' && 'versions' in process) {
      clientHeader.push(`gl-node/${process.versions.node}`);
    } else {
      clientHeader.push(`gl-web/${this._gaxModule.version}`);
    }
    if (!opts.fallback) {
      clientHeader.push(`grpc/${this._gaxGrpc.grpcVersion}`);
    } else {
      clientHeader.push(`rest/${this._gaxGrpc.grpcVersion}`);
    }
    if (opts.libName && opts.libVersion) {
      clientHeader.push(`${opts.libName}/${opts.libVersion}`);
    }
    // Load the applicable protos.
    this._protos = this._gaxGrpc.loadProtoJSON(jsonProtos);

    // This API contains "path templates"; forward-slash-separated
    // identifiers to uniquely identify resources within the API.
    // Create useful helper objects for these.
    this.pathTemplates = {
      accountPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}'
      ),
      lfpInventoryPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/lfpInventories/{target_merchant}~{store_code}~{offer}'
      ),
      lfpMerchantStatePathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/lfpMerchantStates/{lfp_merchant_state}'
      ),
      lfpSalePathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/lfpSales/{sale}'
      ),
      lfpStorePathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/lfpStores/{target_merchant}~{store_code}'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
        'google.shopping.merchant.lfp.v1beta.LfpInventoryService', gapicConfig as gax.ClientConfig,
        opts.clientConfig || {}, {'x-goog-api-client': clientHeader.join(' ')});

    // Set up a dictionary of "inner API calls"; the core implementation
    // of calling the API is handled in `google-gax`, with this code
    // merely providing the destination and request information.
    this.innerApiCalls = {};

    // Add a warn function to the client constructor so it can be easily tested.
    this.warn = this._gaxModule.warn;
  }

  /**
   * Initialize the client.
   * Performs asynchronous operations (such as authentication) and prepares the client.
   * This function will be called automatically when any class method is called for the
   * first time, but if you need to initialize it before calling an actual method,
   * feel free to call initialize() directly.
   *
   * You can await on this method if you want to make sure the client is initialized.
   *
   * @returns {Promise} A promise that resolves to an authenticated service stub.
   */
  initialize() {
    // If the client stub promise is already initialized, return immediately.
    if (this.lfpInventoryServiceStub) {
      return this.lfpInventoryServiceStub;
    }

    // Put together the "service stub" for
    // google.shopping.merchant.lfp.v1beta.LfpInventoryService.
    this.lfpInventoryServiceStub = this._gaxGrpc.createStub(
        this._opts.fallback ?
          (this._protos as protobuf.Root).lookupService('google.shopping.merchant.lfp.v1beta.LfpInventoryService') :
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.shopping.merchant.lfp.v1beta.LfpInventoryService,
        this._opts, this._providedCustomServicePath) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const lfpInventoryServiceStubMethods =
        ['insertLfpInventory'];
    for (const methodName of lfpInventoryServiceStubMethods) {
      const callPromise = this.lfpInventoryServiceStub.then(
        stub => (...args: Array<{}>) => {
          if (this._terminated) {
            return Promise.reject('The client has already been closed.');
          }
          const func = stub[methodName];
          return func.apply(stub, args);
        },
        (err: Error|null|undefined) => () => {
          throw err;
        });

      const descriptor =
        undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.lfpInventoryServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @deprecated Use the apiEndpoint method of the client instance.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    if (typeof process === 'object' && typeof process.emitWarning === 'function') {
      process.emitWarning('Static servicePath is deprecated, please use the instance method instead.', 'DeprecationWarning');
    }
    return 'merchantapi.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath.
   * @deprecated Use the apiEndpoint method of the client instance.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    if (typeof process === 'object' && typeof process.emitWarning === 'function') {
      process.emitWarning('Static apiEndpoint is deprecated, please use the instance method instead.', 'DeprecationWarning');
    }
    return 'merchantapi.googleapis.com';
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  get apiEndpoint() {
    return this._servicePath;
  }

  get universeDomain() {
    return this._universeDomain;
  }

  /**
   * The port for this API service.
   * @returns {number} The default port for this service.
   */
  static get port() {
    return 443;
  }

  /**
   * The scopes needed to make gRPC calls for every method defined
   * in this service.
   * @returns {string[]} List of default scopes.
   */
  static get scopes() {
    return [
      'https://www.googleapis.com/auth/content'
    ];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(callback?: Callback<string, undefined, undefined>):
      Promise<string>|void {
    if (callback) {
      this.auth.getProjectId(callback);
      return;
    }
    return this.auth.getProjectId();
  }

  // -------------------
  // -- Service calls --
  // -------------------
/**
 * Inserts a `LfpInventory` resource for the given target merchant account. If
 * the resource already exists, it will be replaced. The inventory
 * automatically expires after 30 days.
 *
 * @param {Object} request
 *   The request object that will be sent.
 * @param {string} request.parent
 *   Required. The LFP provider account.
 *   Format: `accounts/{account}`
 * @param {google.shopping.merchant.lfp.v1beta.LfpInventory} request.lfpInventory
 *   Required. The inventory to insert.
 * @param {object} [options]
 *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
 * @returns {Promise} - The promise which resolves to an array.
 *   The first element of the array is an object representing {@link protos.google.shopping.merchant.lfp.v1beta.LfpInventory|LfpInventory}.
 *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
 *   for more details and examples.
 * @example <caption>include:samples/generated/v1beta/lfp_inventory_service.insert_lfp_inventory.js</caption>
 * region_tag:merchantapi_v1beta_generated_LfpInventoryService_InsertLfpInventory_async
 */
  insertLfpInventory(
      request?: protos.google.shopping.merchant.lfp.v1beta.IInsertLfpInventoryRequest,
      options?: CallOptions):
      Promise<[
        protos.google.shopping.merchant.lfp.v1beta.ILfpInventory,
        protos.google.shopping.merchant.lfp.v1beta.IInsertLfpInventoryRequest|undefined, {}|undefined
      ]>;
  insertLfpInventory(
      request: protos.google.shopping.merchant.lfp.v1beta.IInsertLfpInventoryRequest,
      options: CallOptions,
      callback: Callback<
          protos.google.shopping.merchant.lfp.v1beta.ILfpInventory,
          protos.google.shopping.merchant.lfp.v1beta.IInsertLfpInventoryRequest|null|undefined,
          {}|null|undefined>): void;
  insertLfpInventory(
      request: protos.google.shopping.merchant.lfp.v1beta.IInsertLfpInventoryRequest,
      callback: Callback<
          protos.google.shopping.merchant.lfp.v1beta.ILfpInventory,
          protos.google.shopping.merchant.lfp.v1beta.IInsertLfpInventoryRequest|null|undefined,
          {}|null|undefined>): void;
  insertLfpInventory(
      request?: protos.google.shopping.merchant.lfp.v1beta.IInsertLfpInventoryRequest,
      optionsOrCallback?: CallOptions|Callback<
          protos.google.shopping.merchant.lfp.v1beta.ILfpInventory,
          protos.google.shopping.merchant.lfp.v1beta.IInsertLfpInventoryRequest|null|undefined,
          {}|null|undefined>,
      callback?: Callback<
          protos.google.shopping.merchant.lfp.v1beta.ILfpInventory,
          protos.google.shopping.merchant.lfp.v1beta.IInsertLfpInventoryRequest|null|undefined,
          {}|null|undefined>):
      Promise<[
        protos.google.shopping.merchant.lfp.v1beta.ILfpInventory,
        protos.google.shopping.merchant.lfp.v1beta.IInsertLfpInventoryRequest|undefined, {}|undefined
      ]>|void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    }
    else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers[
      'x-goog-request-params'
    ] = this._gaxModule.routingHeader.fromParams({
      'parent': request.parent ?? '',
    });
    this.initialize().catch(err => {throw err});
    this._log.info('insertLfpInventory request %j', request);
    const wrappedCallback: Callback<
        protos.google.shopping.merchant.lfp.v1beta.ILfpInventory,
        protos.google.shopping.merchant.lfp.v1beta.IInsertLfpInventoryRequest|null|undefined,
        {}|null|undefined>|undefined = callback
      ? (error, response, options, rawResponse) => {
          this._log.info('insertLfpInventory response %j', response);
          callback!(error, response, options, rawResponse); // We verified callback above.
        }
      : undefined;
    return this.innerApiCalls.insertLfpInventory(request, options, wrappedCallback)
      ?.then(([response, options, rawResponse]: [
        protos.google.shopping.merchant.lfp.v1beta.ILfpInventory,
        protos.google.shopping.merchant.lfp.v1beta.IInsertLfpInventoryRequest|undefined,
        {}|undefined
      ]) => {
        this._log.info('insertLfpInventory response %j', response);
        return [response, options, rawResponse];
      }).catch((error: any) => {
        if (error && 'statusDetails' in error && error.statusDetails instanceof Array) {
          const protos = this._gaxModule.protobuf.Root.fromJSON(jsonProtos) as unknown as gax.protobuf.Type;
          error.statusDetails = decodeAnyProtosInArray(error.statusDetails, protos);
        }
        throw error;
      });
  }

  // --------------------
  // -- Path templates --
  // --------------------

  /**
   * Return a fully-qualified account resource name string.
   *
   * @param {string} account
   * @returns {string} Resource name string.
   */
  accountPath(account:string) {
    return this.pathTemplates.accountPathTemplate.render({
      account: account,
    });
  }

  /**
   * Parse the account from Account resource.
   *
   * @param {string} accountName
   *   A fully-qualified path representing Account resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromAccountName(accountName: string) {
    return this.pathTemplates.accountPathTemplate.match(accountName).account;
  }

  /**
   * Return a fully-qualified lfpInventory resource name string.
   *
   * @param {string} account
   * @param {string} target_merchant
   * @param {string} store_code
   * @param {string} offer
   * @returns {string} Resource name string.
   */
  lfpInventoryPath(account:string,targetMerchant:string,storeCode:string,offer:string) {
    return this.pathTemplates.lfpInventoryPathTemplate.render({
      account: account,
      target_merchant: targetMerchant,
      store_code: storeCode,
      offer: offer,
    });
  }

  /**
   * Parse the account from LfpInventory resource.
   *
   * @param {string} lfpInventoryName
   *   A fully-qualified path representing LfpInventory resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromLfpInventoryName(lfpInventoryName: string) {
    return this.pathTemplates.lfpInventoryPathTemplate.match(lfpInventoryName).account;
  }

  /**
   * Parse the target_merchant from LfpInventory resource.
   *
   * @param {string} lfpInventoryName
   *   A fully-qualified path representing LfpInventory resource.
   * @returns {string} A string representing the target_merchant.
   */
  matchTargetMerchantFromLfpInventoryName(lfpInventoryName: string) {
    return this.pathTemplates.lfpInventoryPathTemplate.match(lfpInventoryName).target_merchant;
  }

  /**
   * Parse the store_code from LfpInventory resource.
   *
   * @param {string} lfpInventoryName
   *   A fully-qualified path representing LfpInventory resource.
   * @returns {string} A string representing the store_code.
   */
  matchStoreCodeFromLfpInventoryName(lfpInventoryName: string) {
    return this.pathTemplates.lfpInventoryPathTemplate.match(lfpInventoryName).store_code;
  }

  /**
   * Parse the offer from LfpInventory resource.
   *
   * @param {string} lfpInventoryName
   *   A fully-qualified path representing LfpInventory resource.
   * @returns {string} A string representing the offer.
   */
  matchOfferFromLfpInventoryName(lfpInventoryName: string) {
    return this.pathTemplates.lfpInventoryPathTemplate.match(lfpInventoryName).offer;
  }

  /**
   * Return a fully-qualified lfpMerchantState resource name string.
   *
   * @param {string} account
   * @param {string} lfp_merchant_state
   * @returns {string} Resource name string.
   */
  lfpMerchantStatePath(account:string,lfpMerchantState:string) {
    return this.pathTemplates.lfpMerchantStatePathTemplate.render({
      account: account,
      lfp_merchant_state: lfpMerchantState,
    });
  }

  /**
   * Parse the account from LfpMerchantState resource.
   *
   * @param {string} lfpMerchantStateName
   *   A fully-qualified path representing LfpMerchantState resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromLfpMerchantStateName(lfpMerchantStateName: string) {
    return this.pathTemplates.lfpMerchantStatePathTemplate.match(lfpMerchantStateName).account;
  }

  /**
   * Parse the lfp_merchant_state from LfpMerchantState resource.
   *
   * @param {string} lfpMerchantStateName
   *   A fully-qualified path representing LfpMerchantState resource.
   * @returns {string} A string representing the lfp_merchant_state.
   */
  matchLfpMerchantStateFromLfpMerchantStateName(lfpMerchantStateName: string) {
    return this.pathTemplates.lfpMerchantStatePathTemplate.match(lfpMerchantStateName).lfp_merchant_state;
  }

  /**
   * Return a fully-qualified lfpSale resource name string.
   *
   * @param {string} account
   * @param {string} sale
   * @returns {string} Resource name string.
   */
  lfpSalePath(account:string,sale:string) {
    return this.pathTemplates.lfpSalePathTemplate.render({
      account: account,
      sale: sale,
    });
  }

  /**
   * Parse the account from LfpSale resource.
   *
   * @param {string} lfpSaleName
   *   A fully-qualified path representing LfpSale resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromLfpSaleName(lfpSaleName: string) {
    return this.pathTemplates.lfpSalePathTemplate.match(lfpSaleName).account;
  }

  /**
   * Parse the sale from LfpSale resource.
   *
   * @param {string} lfpSaleName
   *   A fully-qualified path representing LfpSale resource.
   * @returns {string} A string representing the sale.
   */
  matchSaleFromLfpSaleName(lfpSaleName: string) {
    return this.pathTemplates.lfpSalePathTemplate.match(lfpSaleName).sale;
  }

  /**
   * Return a fully-qualified lfpStore resource name string.
   *
   * @param {string} account
   * @param {string} target_merchant
   * @param {string} store_code
   * @returns {string} Resource name string.
   */
  lfpStorePath(account:string,targetMerchant:string,storeCode:string) {
    return this.pathTemplates.lfpStorePathTemplate.render({
      account: account,
      target_merchant: targetMerchant,
      store_code: storeCode,
    });
  }

  /**
   * Parse the account from LfpStore resource.
   *
   * @param {string} lfpStoreName
   *   A fully-qualified path representing LfpStore resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromLfpStoreName(lfpStoreName: string) {
    return this.pathTemplates.lfpStorePathTemplate.match(lfpStoreName).account;
  }

  /**
   * Parse the target_merchant from LfpStore resource.
   *
   * @param {string} lfpStoreName
   *   A fully-qualified path representing LfpStore resource.
   * @returns {string} A string representing the target_merchant.
   */
  matchTargetMerchantFromLfpStoreName(lfpStoreName: string) {
    return this.pathTemplates.lfpStorePathTemplate.match(lfpStoreName).target_merchant;
  }

  /**
   * Parse the store_code from LfpStore resource.
   *
   * @param {string} lfpStoreName
   *   A fully-qualified path representing LfpStore resource.
   * @returns {string} A string representing the store_code.
   */
  matchStoreCodeFromLfpStoreName(lfpStoreName: string) {
    return this.pathTemplates.lfpStorePathTemplate.match(lfpStoreName).store_code;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.lfpInventoryServiceStub && !this._terminated) {
      return this.lfpInventoryServiceStub.then(stub => {
        this._log.info('ending gRPC channel');
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}