// Copyright 2024 Google LLC
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
import type {
  Callback,
  CallOptions,
  Descriptors,
  ClientOptions,
  PaginationCallback,
  GaxCall,
} from 'google-gax';
import {Transform} from 'stream';
import * as protos from '../../protos/protos';
import jsonProtos = require('../../protos/protos.json');
/**
 * Client JSON configuration object, loaded from
 * `src/v1/css_products_service_client_config.json`.
 * This file defines retry strategy and timeouts for all API methods in this library.
 */
import * as gapicConfig from './css_products_service_client_config.json';
const version = require('../../../package.json').version;

/**
 *  Service for doing get and list on Css Products(a.k.a Aggregate Offers
 *  internally).
 * @class
 * @memberof v1
 */
export class CssProductsServiceClient {
  private _terminated = false;
  private _opts: ClientOptions;
  private _providedCustomServicePath: boolean;
  private _gaxModule: typeof gax | typeof gax.fallback;
  private _gaxGrpc: gax.GrpcClient | gax.fallback.GrpcClient;
  private _protos: {};
  private _defaults: {[method: string]: gax.CallSettings};
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
  cssProductsServiceStub?: Promise<{[name: string]: Function}>;

  /**
   * Construct an instance of CssProductsServiceClient.
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
   *     {@link https://developers.google.com/identity/protocols/application-default-credentials Application Default Credentials},
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
   *     const client = new CssProductsServiceClient({fallback: true}, gax);
   *     ```
   */
  constructor(
    opts?: ClientOptions,
    gaxInstance?: typeof gax | typeof gax.fallback
  ) {
    // Ensure that options include all the required fields.
    const staticMembers = this.constructor as typeof CssProductsServiceClient;
    const servicePath =
      opts?.servicePath || opts?.apiEndpoint || staticMembers.servicePath;
    this._providedCustomServicePath = !!(
      opts?.servicePath || opts?.apiEndpoint
    );
    const port = opts?.port || staticMembers.port;
    const clientConfig = opts?.clientConfig ?? {};
    const fallback =
      opts?.fallback ??
      (typeof window !== 'undefined' && typeof window?.fetch === 'function');
    opts = Object.assign({servicePath, port, clientConfig, fallback}, opts);

    // Request numeric enum values if REST transport is used.
    opts.numericEnums = true;

    // If scopes are unset in options and we're connecting to a non-default endpoint, set scopes just in case.
    if (servicePath !== staticMembers.servicePath && !('scopes' in opts)) {
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
    this.auth = this._gaxGrpc.auth as gax.GoogleAuth;

    // Set useJWTAccessWithScope on the auth object.
    this.auth.useJWTAccessWithScope = true;

    // Set defaultServicePath on the auth object.
    this.auth.defaultServicePath = staticMembers.servicePath;

    // Set the default scopes in auth client if needed.
    if (servicePath === staticMembers.servicePath) {
      this.auth.defaultScopes = staticMembers.scopes;
    }

    // Determine the client header string.
    const clientHeader = [`gax/${this._gaxModule.version}`, `gapic/${version}`];
    if (typeof process !== 'undefined' && 'versions' in process) {
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
      accountLabelPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/labels/{label}'
      ),
      cssProductPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/cssProducts/{css_product}'
      ),
      cssProductInputPathTemplate: new this._gaxModule.PathTemplate(
        'accounts/{account}/cssProductInputs/{css_product_input}'
      ),
    };

    // Some of the methods on this service return "paged" results,
    // (e.g. 50 results at a time, with tokens to get subsequent
    // pages). Denote the keys used for pagination and results.
    this.descriptors.page = {
      listCssProducts: new this._gaxModule.PageDescriptor(
        'pageToken',
        'nextPageToken',
        'cssProducts'
      ),
    };

    // Put together the default options sent with requests.
    this._defaults = this._gaxGrpc.constructSettings(
      'google.shopping.css.v1.CssProductsService',
      gapicConfig as gax.ClientConfig,
      opts.clientConfig || {},
      {'x-goog-api-client': clientHeader.join(' ')}
    );

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
    if (this.cssProductsServiceStub) {
      return this.cssProductsServiceStub;
    }

    // Put together the "service stub" for
    // google.shopping.css.v1.CssProductsService.
    this.cssProductsServiceStub = this._gaxGrpc.createStub(
      this._opts.fallback
        ? (this._protos as protobuf.Root).lookupService(
            'google.shopping.css.v1.CssProductsService'
          )
        : // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (this._protos as any).google.shopping.css.v1.CssProductsService,
      this._opts,
      this._providedCustomServicePath
    ) as Promise<{[method: string]: Function}>;

    // Iterate over each of the methods that the service provides
    // and create an API call method for each.
    const cssProductsServiceStubMethods = ['getCssProduct', 'listCssProducts'];
    for (const methodName of cssProductsServiceStubMethods) {
      const callPromise = this.cssProductsServiceStub.then(
        stub =>
          (...args: Array<{}>) => {
            if (this._terminated) {
              return Promise.reject('The client has already been closed.');
            }
            const func = stub[methodName];
            return func.apply(stub, args);
          },
        (err: Error | null | undefined) => () => {
          throw err;
        }
      );

      const descriptor = this.descriptors.page[methodName] || undefined;
      const apiCall = this._gaxModule.createApiCall(
        callPromise,
        this._defaults[methodName],
        descriptor,
        this._opts.fallback
      );

      this.innerApiCalls[methodName] = apiCall;
    }

    return this.cssProductsServiceStub;
  }

  /**
   * The DNS address for this API service.
   * @returns {string} The DNS address for this service.
   */
  static get servicePath() {
    return 'css.googleapis.com';
  }

  /**
   * The DNS address for this API service - same as servicePath(),
   * exists for compatibility reasons.
   * @returns {string} The DNS address for this service.
   */
  static get apiEndpoint() {
    return 'css.googleapis.com';
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
    return ['https://www.googleapis.com/auth/content'];
  }

  getProjectId(): Promise<string>;
  getProjectId(callback: Callback<string, undefined, undefined>): void;
  /**
   * Return the project ID used by this class.
   * @returns {Promise} A promise that resolves to string containing the project ID.
   */
  getProjectId(
    callback?: Callback<string, undefined, undefined>
  ): Promise<string> | void {
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
   * Retrieves the processed CSS Product from your CSS Center account. After
   * inserting, updating, or deleting a product input, it may take several
   * minutes before the updated final product can be retrieved.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.name
   *   Required. The name of the CSS product to retrieve.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is an object representing {@link protos.google.shopping.css.v1.CssProduct|CssProduct}.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#regular-methods | documentation }
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/css_products_service.get_css_product.js</caption>
   * region_tag:css_v1_generated_CssProductsService_GetCssProduct_async
   */
  getCssProduct(
    request?: protos.google.shopping.css.v1.IGetCssProductRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.shopping.css.v1.ICssProduct,
      protos.google.shopping.css.v1.IGetCssProductRequest | undefined,
      {} | undefined,
    ]
  >;
  getCssProduct(
    request: protos.google.shopping.css.v1.IGetCssProductRequest,
    options: CallOptions,
    callback: Callback<
      protos.google.shopping.css.v1.ICssProduct,
      protos.google.shopping.css.v1.IGetCssProductRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  getCssProduct(
    request: protos.google.shopping.css.v1.IGetCssProductRequest,
    callback: Callback<
      protos.google.shopping.css.v1.ICssProduct,
      protos.google.shopping.css.v1.IGetCssProductRequest | null | undefined,
      {} | null | undefined
    >
  ): void;
  getCssProduct(
    request?: protos.google.shopping.css.v1.IGetCssProductRequest,
    optionsOrCallback?:
      | CallOptions
      | Callback<
          protos.google.shopping.css.v1.ICssProduct,
          | protos.google.shopping.css.v1.IGetCssProductRequest
          | null
          | undefined,
          {} | null | undefined
        >,
    callback?: Callback<
      protos.google.shopping.css.v1.ICssProduct,
      protos.google.shopping.css.v1.IGetCssProductRequest | null | undefined,
      {} | null | undefined
    >
  ): Promise<
    [
      protos.google.shopping.css.v1.ICssProduct,
      protos.google.shopping.css.v1.IGetCssProductRequest | undefined,
      {} | undefined,
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        name: request.name ?? '',
      });
    this.initialize();
    return this.innerApiCalls.getCssProduct(request, options, callback);
  }

  /**
   * Lists the processed CSS Products in your CSS Center account. The response
   * might contain fewer items than specified by pageSize. Rely on pageToken to
   * determine if there are more items to be requested.
   *
   * After inserting, updating, or deleting a CSS product input, it may
   * take several minutes before the updated processed CSS product can be
   * retrieved.
   *
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The account/domain to list processed CSS Products for.
   *   Format: accounts/{account}
   * @param {number} request.pageSize
   *   The maximum number of CSS Products to return. The service may return
   *   fewer than this value.
   *   The maximum value is 1000; values above 1000 will be coerced to 1000. If
   *   unspecified, the maximum number of CSS products will be returned.
   * @param {string} request.pageToken
   *   A page token, received from a previous `ListCssProducts` call.
   *   Provide this to retrieve the subsequent page.
   *
   *   When paginating, all other parameters provided to `ListCssProducts`
   *   must match the call that provided the page token.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Promise} - The promise which resolves to an array.
   *   The first element of the array is Array of {@link protos.google.shopping.css.v1.CssProduct|CssProduct}.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed and will merge results from all the pages into this array.
   *   Note that it can affect your quota.
   *   We recommend using `listCssProductsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
   *   for more details and examples.
   */
  listCssProducts(
    request?: protos.google.shopping.css.v1.IListCssProductsRequest,
    options?: CallOptions
  ): Promise<
    [
      protos.google.shopping.css.v1.ICssProduct[],
      protos.google.shopping.css.v1.IListCssProductsRequest | null,
      protos.google.shopping.css.v1.IListCssProductsResponse,
    ]
  >;
  listCssProducts(
    request: protos.google.shopping.css.v1.IListCssProductsRequest,
    options: CallOptions,
    callback: PaginationCallback<
      protos.google.shopping.css.v1.IListCssProductsRequest,
      protos.google.shopping.css.v1.IListCssProductsResponse | null | undefined,
      protos.google.shopping.css.v1.ICssProduct
    >
  ): void;
  listCssProducts(
    request: protos.google.shopping.css.v1.IListCssProductsRequest,
    callback: PaginationCallback<
      protos.google.shopping.css.v1.IListCssProductsRequest,
      protos.google.shopping.css.v1.IListCssProductsResponse | null | undefined,
      protos.google.shopping.css.v1.ICssProduct
    >
  ): void;
  listCssProducts(
    request?: protos.google.shopping.css.v1.IListCssProductsRequest,
    optionsOrCallback?:
      | CallOptions
      | PaginationCallback<
          protos.google.shopping.css.v1.IListCssProductsRequest,
          | protos.google.shopping.css.v1.IListCssProductsResponse
          | null
          | undefined,
          protos.google.shopping.css.v1.ICssProduct
        >,
    callback?: PaginationCallback<
      protos.google.shopping.css.v1.IListCssProductsRequest,
      protos.google.shopping.css.v1.IListCssProductsResponse | null | undefined,
      protos.google.shopping.css.v1.ICssProduct
    >
  ): Promise<
    [
      protos.google.shopping.css.v1.ICssProduct[],
      protos.google.shopping.css.v1.IListCssProductsRequest | null,
      protos.google.shopping.css.v1.IListCssProductsResponse,
    ]
  > | void {
    request = request || {};
    let options: CallOptions;
    if (typeof optionsOrCallback === 'function' && callback === undefined) {
      callback = optionsOrCallback;
      options = {};
    } else {
      options = optionsOrCallback as CallOptions;
    }
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        parent: request.parent ?? '',
      });
    this.initialize();
    return this.innerApiCalls.listCssProducts(request, options, callback);
  }

  /**
   * Equivalent to `method.name.toCamelCase()`, but returns a NodeJS Stream object.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The account/domain to list processed CSS Products for.
   *   Format: accounts/{account}
   * @param {number} request.pageSize
   *   The maximum number of CSS Products to return. The service may return
   *   fewer than this value.
   *   The maximum value is 1000; values above 1000 will be coerced to 1000. If
   *   unspecified, the maximum number of CSS products will be returned.
   * @param {string} request.pageToken
   *   A page token, received from a previous `ListCssProducts` call.
   *   Provide this to retrieve the subsequent page.
   *
   *   When paginating, all other parameters provided to `ListCssProducts`
   *   must match the call that provided the page token.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Stream}
   *   An object stream which emits an object representing {@link protos.google.shopping.css.v1.CssProduct|CssProduct} on 'data' event.
   *   The client library will perform auto-pagination by default: it will call the API as many
   *   times as needed. Note that it can affect your quota.
   *   We recommend using `listCssProductsAsync()`
   *   method described below for async iteration which you can stop as needed.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
   *   for more details and examples.
   */
  listCssProductsStream(
    request?: protos.google.shopping.css.v1.IListCssProductsRequest,
    options?: CallOptions
  ): Transform {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        parent: request.parent ?? '',
      });
    const defaultCallSettings = this._defaults['listCssProducts'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listCssProducts.createStream(
      this.innerApiCalls.listCssProducts as GaxCall,
      request,
      callSettings
    );
  }

  /**
   * Equivalent to `listCssProducts`, but returns an iterable object.
   *
   * `for`-`await`-`of` syntax is used with the iterable to get response elements on-demand.
   * @param {Object} request
   *   The request object that will be sent.
   * @param {string} request.parent
   *   Required. The account/domain to list processed CSS Products for.
   *   Format: accounts/{account}
   * @param {number} request.pageSize
   *   The maximum number of CSS Products to return. The service may return
   *   fewer than this value.
   *   The maximum value is 1000; values above 1000 will be coerced to 1000. If
   *   unspecified, the maximum number of CSS products will be returned.
   * @param {string} request.pageToken
   *   A page token, received from a previous `ListCssProducts` call.
   *   Provide this to retrieve the subsequent page.
   *
   *   When paginating, all other parameters provided to `ListCssProducts`
   *   must match the call that provided the page token.
   * @param {object} [options]
   *   Call options. See {@link https://googleapis.dev/nodejs/google-gax/latest/interfaces/CallOptions.html|CallOptions} for more details.
   * @returns {Object}
   *   An iterable Object that allows {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols | async iteration }.
   *   When you iterate the returned iterable, each element will be an object representing
   *   {@link protos.google.shopping.css.v1.CssProduct|CssProduct}. The API will be called under the hood as needed, once per the page,
   *   so you can stop the iteration when you don't need more results.
   *   Please see the {@link https://github.com/googleapis/gax-nodejs/blob/master/client-libraries.md#auto-pagination | documentation }
   *   for more details and examples.
   * @example <caption>include:samples/generated/v1/css_products_service.list_css_products.js</caption>
   * region_tag:css_v1_generated_CssProductsService_ListCssProducts_async
   */
  listCssProductsAsync(
    request?: protos.google.shopping.css.v1.IListCssProductsRequest,
    options?: CallOptions
  ): AsyncIterable<protos.google.shopping.css.v1.ICssProduct> {
    request = request || {};
    options = options || {};
    options.otherArgs = options.otherArgs || {};
    options.otherArgs.headers = options.otherArgs.headers || {};
    options.otherArgs.headers['x-goog-request-params'] =
      this._gaxModule.routingHeader.fromParams({
        parent: request.parent ?? '',
      });
    const defaultCallSettings = this._defaults['listCssProducts'];
    const callSettings = defaultCallSettings.merge(options);
    this.initialize();
    return this.descriptors.page.listCssProducts.asyncIterate(
      this.innerApiCalls['listCssProducts'] as GaxCall,
      request as {},
      callSettings
    ) as AsyncIterable<protos.google.shopping.css.v1.ICssProduct>;
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
  accountPath(account: string) {
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
   * Return a fully-qualified accountLabel resource name string.
   *
   * @param {string} account
   * @param {string} label
   * @returns {string} Resource name string.
   */
  accountLabelPath(account: string, label: string) {
    return this.pathTemplates.accountLabelPathTemplate.render({
      account: account,
      label: label,
    });
  }

  /**
   * Parse the account from AccountLabel resource.
   *
   * @param {string} accountLabelName
   *   A fully-qualified path representing AccountLabel resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromAccountLabelName(accountLabelName: string) {
    return this.pathTemplates.accountLabelPathTemplate.match(accountLabelName)
      .account;
  }

  /**
   * Parse the label from AccountLabel resource.
   *
   * @param {string} accountLabelName
   *   A fully-qualified path representing AccountLabel resource.
   * @returns {string} A string representing the label.
   */
  matchLabelFromAccountLabelName(accountLabelName: string) {
    return this.pathTemplates.accountLabelPathTemplate.match(accountLabelName)
      .label;
  }

  /**
   * Return a fully-qualified cssProduct resource name string.
   *
   * @param {string} account
   * @param {string} css_product
   * @returns {string} Resource name string.
   */
  cssProductPath(account: string, cssProduct: string) {
    return this.pathTemplates.cssProductPathTemplate.render({
      account: account,
      css_product: cssProduct,
    });
  }

  /**
   * Parse the account from CssProduct resource.
   *
   * @param {string} cssProductName
   *   A fully-qualified path representing CssProduct resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromCssProductName(cssProductName: string) {
    return this.pathTemplates.cssProductPathTemplate.match(cssProductName)
      .account;
  }

  /**
   * Parse the css_product from CssProduct resource.
   *
   * @param {string} cssProductName
   *   A fully-qualified path representing CssProduct resource.
   * @returns {string} A string representing the css_product.
   */
  matchCssProductFromCssProductName(cssProductName: string) {
    return this.pathTemplates.cssProductPathTemplate.match(cssProductName)
      .css_product;
  }

  /**
   * Return a fully-qualified cssProductInput resource name string.
   *
   * @param {string} account
   * @param {string} css_product_input
   * @returns {string} Resource name string.
   */
  cssProductInputPath(account: string, cssProductInput: string) {
    return this.pathTemplates.cssProductInputPathTemplate.render({
      account: account,
      css_product_input: cssProductInput,
    });
  }

  /**
   * Parse the account from CssProductInput resource.
   *
   * @param {string} cssProductInputName
   *   A fully-qualified path representing CssProductInput resource.
   * @returns {string} A string representing the account.
   */
  matchAccountFromCssProductInputName(cssProductInputName: string) {
    return this.pathTemplates.cssProductInputPathTemplate.match(
      cssProductInputName
    ).account;
  }

  /**
   * Parse the css_product_input from CssProductInput resource.
   *
   * @param {string} cssProductInputName
   *   A fully-qualified path representing CssProductInput resource.
   * @returns {string} A string representing the css_product_input.
   */
  matchCssProductInputFromCssProductInputName(cssProductInputName: string) {
    return this.pathTemplates.cssProductInputPathTemplate.match(
      cssProductInputName
    ).css_product_input;
  }

  /**
   * Terminate the gRPC channel and close the client.
   *
   * The client will no longer be usable and all future behavior is undefined.
   * @returns {Promise} A promise that resolves when the client is closed.
   */
  close(): Promise<void> {
    if (this.cssProductsServiceStub && !this._terminated) {
      return this.cssProductsServiceStub.then(stub => {
        this._terminated = true;
        stub.close();
      });
    }
    return Promise.resolve();
  }
}