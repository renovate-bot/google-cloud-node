// Copyright 2023 Google LLC
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



'use strict';

function main() {
  // [START generativelanguage_v1beta_generated_ModelService_ListTunedModels_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Optional. The maximum number of `TunedModels` to return (per page).
   *  The service may return fewer tuned models.
   *  If unspecified, at most 10 tuned models will be returned.
   *  This method returns at most 1000 models per page, even if you pass a larger
   *  page_size.
   */
  // const pageSize = 1234
  /**
   *  Optional. A page token, received from a previous `ListTunedModels` call.
   *  Provide the `page_token` returned by one request as an argument to the next
   *  request to retrieve the next page.
   *  When paginating, all other parameters provided to `ListTunedModels`
   *  must match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Optional. A filter is a full text search over the tuned model's description
   *  and display name. By default, results will not include tuned models shared
   *  with everyone.
   *  Additional operators:
   *    - owner:me
   *    - writers:me
   *    - readers:me
   *    - readers:everyone
   *  Examples:
   *    "owner:me" returns all tuned models to which caller has owner role
   *    "readers:me" returns all tuned models to which caller has reader role
   *    "readers:everyone" returns all tuned models that are shared with everyone
   */
  // const filter = 'abc123'

  // Imports the Generativelanguage library
  const {ModelServiceClient} = require('@google-cloud/generativelanguage').v1beta;

  // Instantiates a client
  const generativelanguageClient = new ModelServiceClient();

  async function callListTunedModels() {
    // Construct request
    const request = {
    };

    // Run request
    const iterable = await generativelanguageClient.listTunedModelsAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListTunedModels();
  // [END generativelanguage_v1beta_generated_ModelService_ListTunedModels_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));