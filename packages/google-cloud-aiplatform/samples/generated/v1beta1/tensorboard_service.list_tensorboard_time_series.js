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

function main(parent) {
  // [START aiplatform_v1beta1_generated_TensorboardService_ListTensorboardTimeSeries_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the TensorboardRun to list
   *  TensorboardTimeSeries. Format:
   *  `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}/runs/{run}`
   */
  // const parent = 'abc123'
  /**
   *  Lists the TensorboardTimeSeries that match the filter expression.
   */
  // const filter = 'abc123'
  /**
   *  The maximum number of TensorboardTimeSeries to return. The service may
   *  return fewer than this value. If unspecified, at most 50
   *  TensorboardTimeSeries are returned. The maximum value is 1000; values
   *  above 1000 are coerced to 1000.
   */
  // const pageSize = 1234
  /**
   *  A page token, received from a previous
   *  TensorboardService.ListTensorboardTimeSeries google.cloud.aiplatform.v1beta1.TensorboardService.ListTensorboardTimeSeries 
   *  call. Provide this to retrieve the subsequent page.
   *  When paginating, all other parameters provided to
   *  TensorboardService.ListTensorboardTimeSeries google.cloud.aiplatform.v1beta1.TensorboardService.ListTensorboardTimeSeries 
   *  must match the call that provided the page token.
   */
  // const pageToken = 'abc123'
  /**
   *  Field to use to sort the list.
   */
  // const orderBy = 'abc123'
  /**
   *  Mask specifying which fields to read.
   */
  // const readMask = {}

  // Imports the Aiplatform library
  const {TensorboardServiceClient} = require('@google-cloud/aiplatform').v1beta1;

  // Instantiates a client
  const aiplatformClient = new TensorboardServiceClient();

  async function callListTensorboardTimeSeries() {
    // Construct request
    const request = {
      parent,
    };

    // Run request
    const iterable = aiplatformClient.listTensorboardTimeSeriesAsync(request);
    for await (const response of iterable) {
        console.log(response);
    }
  }

  callListTensorboardTimeSeries();
  // [END aiplatform_v1beta1_generated_TensorboardService_ListTensorboardTimeSeries_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
