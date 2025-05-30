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

function main(parent, processorVersion) {
  // [START documentai_v1_generated_DocumentProcessorService_TrainProcessorVersion_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Options to control Custom Document Extraction (CDE) Processor.
   */
  // const customDocumentExtractionOptions = {}
  /**
   *  Options to control foundation model tuning of a processor.
   */
  // const foundationModelTuningOptions = {}
  /**
   *  Required. The parent (project, location and processor) to create the new
   *  version for. Format:
   *  `projects/{project}/locations/{location}/processors/{processor}`.
   */
  // const parent = 'abc123'
  /**
   *  Required. The processor version to be created.
   */
  // const processorVersion = {}
  /**
   *  Optional. The schema the processor version will be trained with.
   */
  // const documentSchema = {}
  /**
   *  Optional. The input data used to train the
   *  ProcessorVersion google.cloud.documentai.v1.ProcessorVersion.
   */
  // const inputData = {}
  /**
   *  Optional. The processor version to use as a base for training. This
   *  processor version must be a child of `parent`. Format:
   *  `projects/{project}/locations/{location}/processors/{processor}/processorVersions/{processorVersion}`.
   */
  // const baseProcessorVersion = 'abc123'

  // Imports the Documentai library
  const {DocumentProcessorServiceClient} = require('@google-cloud/documentai').v1;

  // Instantiates a client
  const documentaiClient = new DocumentProcessorServiceClient();

  async function callTrainProcessorVersion() {
    // Construct request
    const request = {
      parent,
      processorVersion,
    };

    // Run request
    const [operation] = await documentaiClient.trainProcessorVersion(request);
    const [response] = await operation.promise();
    console.log(response);
  }

  callTrainProcessorVersion();
  // [END documentai_v1_generated_DocumentProcessorService_TrainProcessorVersion_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
