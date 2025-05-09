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

function main(endpoint) {
  // [START aiplatform_v1_generated_PredictionService_RawPredict_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The name of the Endpoint requested to serve the prediction.
   *  Format:
   *  `projects/{project}/locations/{location}/endpoints/{endpoint}`
   */
  // const endpoint = 'abc123'
  /**
   *  The prediction input. Supports HTTP headers and arbitrary data payload.
   *  A DeployedModel google.cloud.aiplatform.v1.DeployedModel  may have an
   *  upper limit on the number of instances it supports per request. When this
   *  limit it is exceeded for an AutoML model, the
   *  RawPredict google.cloud.aiplatform.v1.PredictionService.RawPredict 
   *  method returns an error. When this limit is exceeded for a custom-trained
   *  model, the behavior varies depending on the model.
   *  You can specify the schema for each instance in the
   *  predict_schemata.instance_schema_uri google.cloud.aiplatform.v1.PredictSchemata.instance_schema_uri 
   *  field when you create a Model google.cloud.aiplatform.v1.Model. This
   *  schema applies when you deploy the `Model` as a `DeployedModel` to an
   *  Endpoint google.cloud.aiplatform.v1.Endpoint  and use the `RawPredict`
   *  method.
   */
  // const httpBody = {}

  // Imports the Aiplatform library
  const {PredictionServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new PredictionServiceClient();

  async function callRawPredict() {
    // Construct request
    const request = {
      endpoint,
    };

    // Run request
    const response = await aiplatformClient.rawPredict(request);
    console.log(response);
  }

  callRawPredict();
  // [END aiplatform_v1_generated_PredictionService_RawPredict_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
