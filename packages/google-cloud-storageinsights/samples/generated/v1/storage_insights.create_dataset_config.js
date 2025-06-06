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



'use strict';

function main(parent, datasetConfigId, datasetConfig) {
  // [START storageinsights_v1_generated_StorageInsights_CreateDatasetConfig_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. Value for parent.
   */
  // const parent = 'abc123'
  /**
   *  Required. ID of the requesting object.
   *  If auto-generating ID is enabled on the server-side, remove this field and
   *  `dataset_config_id` from the method_signature of Create RPC
   *  Note: The value should not contain any hyphens.
   */
  // const datasetConfigId = 'abc123'
  /**
   *  Required. The resource being created
   */
  // const datasetConfig = {}
  /**
   *  Optional. A unique identifier for your request.
   *  Specify the request ID if you need to retry the request.
   *  If you retry the request with the same ID within 60 minutes, the server
   *  ignores the request if it has already completed the original request.
   *  For example, if your initial request times out and you retry the request
   *  using the same request ID, the server recognizes the original request and
   *  does not process the new request.
   *  The request ID must be a valid UUID and cannot be a zero UUID
   *  (00000000-0000-0000-0000-000000000000).
   */
  // const requestId = 'abc123'

  // Imports the Storageinsights library
  const {StorageInsightsClient} = require('@google-cloud/storageinsights').v1;

  // Instantiates a client
  const storageinsightsClient = new StorageInsightsClient();

  async function callCreateDatasetConfig() {
    // Construct request
    const request = {
      parent,
      datasetConfigId,
      datasetConfig,
    };

    // Run request
    const [operation] = await storageinsightsClient.createDatasetConfig(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callCreateDatasetConfig();
  // [END storageinsights_v1_generated_StorageInsights_CreateDatasetConfig_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
