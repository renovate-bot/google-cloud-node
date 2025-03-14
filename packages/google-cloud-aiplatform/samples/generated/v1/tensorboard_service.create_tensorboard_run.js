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

function main(parent, tensorboardRun, tensorboardRunId) {
  // [START aiplatform_v1_generated_TensorboardService_CreateTensorboardRun_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the TensorboardExperiment to create the
   *  TensorboardRun in. Format:
   *  `projects/{project}/locations/{location}/tensorboards/{tensorboard}/experiments/{experiment}`
   */
  // const parent = 'abc123'
  /**
   *  Required. The TensorboardRun to create.
   */
  // const tensorboardRun = {}
  /**
   *  Required. The ID to use for the Tensorboard run, which becomes the final
   *  component of the Tensorboard run's resource name.
   *  This value should be 1-128 characters, and valid characters
   *  are `/[a-z][0-9]-/`.
   */
  // const tensorboardRunId = 'abc123'

  // Imports the Aiplatform library
  const {TensorboardServiceClient} = require('@google-cloud/aiplatform').v1;

  // Instantiates a client
  const aiplatformClient = new TensorboardServiceClient();

  async function callCreateTensorboardRun() {
    // Construct request
    const request = {
      parent,
      tensorboardRun,
      tensorboardRunId,
    };

    // Run request
    const response = await aiplatformClient.createTensorboardRun(request);
    console.log(response);
  }

  callCreateTensorboardRun();
  // [END aiplatform_v1_generated_TensorboardService_CreateTensorboardRun_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
