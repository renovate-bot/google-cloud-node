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

function main(name, ciphertext, initializationVector) {
  // [START cloudkms_v1_generated_KeyManagementService_RawDecrypt_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The resource name of the
   *  CryptoKeyVersion google.cloud.kms.v1.CryptoKeyVersion  to use for
   *  decryption.
   */
  // const name = 'abc123'
  /**
   *  Required. The encrypted data originally returned in
   *  RawEncryptResponse.ciphertext google.cloud.kms.v1.RawEncryptResponse.ciphertext.
   */
  // const ciphertext = Buffer.from('string')
  /**
   *  Optional. Optional data that must match the data originally supplied in
   *  RawEncryptRequest.additional_authenticated_data google.cloud.kms.v1.RawEncryptRequest.additional_authenticated_data.
   */
  // const additionalAuthenticatedData = Buffer.from('string')
  /**
   *  Required. The initialization vector (IV) used during encryption, which must
   *  match the data originally provided in
   *  RawEncryptResponse.initialization_vector google.cloud.kms.v1.RawEncryptResponse.initialization_vector.
   */
  // const initializationVector = Buffer.from('string')
  /**
   *  The length of the authentication tag that is appended to the end of
   *  the ciphertext. If unspecified (0), the default value for the key's
   *  algorithm will be used (for AES-GCM, the default value is 16).
   */
  // const tagLength = 1234
  /**
   *  Optional. An optional CRC32C checksum of the
   *  RawDecryptRequest.ciphertext google.cloud.kms.v1.RawDecryptRequest.ciphertext.
   *  If specified,
   *  KeyManagementService google.cloud.kms.v1.KeyManagementService  will
   *  verify the integrity of the received ciphertext using this checksum.
   *  KeyManagementService google.cloud.kms.v1.KeyManagementService  will
   *  report an error if the checksum verification fails. If you receive a
   *  checksum error, your client should verify that CRC32C(ciphertext) is equal
   *  to ciphertext_crc32c, and if so, perform a limited number of retries. A
   *  persistent mismatch may indicate an issue in your computation of the CRC32C
   *  checksum. Note: This field is defined as int64 for reasons of compatibility
   *  across different languages. However, it is a non-negative integer, which
   *  will never exceed 2^32-1, and can be safely downconverted to uint32 in
   *  languages that support this type.
   */
  // const ciphertextCrc32c = {}
  /**
   *  Optional. An optional CRC32C checksum of the
   *  RawDecryptRequest.additional_authenticated_data google.cloud.kms.v1.RawDecryptRequest.additional_authenticated_data.
   *  If specified,
   *  KeyManagementService google.cloud.kms.v1.KeyManagementService  will
   *  verify the integrity of the received additional_authenticated_data using
   *  this checksum.
   *  KeyManagementService google.cloud.kms.v1.KeyManagementService  will
   *  report an error if the checksum verification fails. If you receive a
   *  checksum error, your client should verify that
   *  CRC32C(additional_authenticated_data) is equal to
   *  additional_authenticated_data_crc32c, and if so, perform
   *  a limited number of retries. A persistent mismatch may indicate an issue in
   *  your computation of the CRC32C checksum.
   *  Note: This field is defined as int64 for reasons of compatibility across
   *  different languages. However, it is a non-negative integer, which will
   *  never exceed 2^32-1, and can be safely downconverted to uint32 in languages
   *  that support this type.
   */
  // const additionalAuthenticatedDataCrc32c = {}
  /**
   *  Optional. An optional CRC32C checksum of the
   *  RawDecryptRequest.initialization_vector google.cloud.kms.v1.RawDecryptRequest.initialization_vector.
   *  If specified,
   *  KeyManagementService google.cloud.kms.v1.KeyManagementService  will
   *  verify the integrity of the received initialization_vector using this
   *  checksum. KeyManagementService google.cloud.kms.v1.KeyManagementService 
   *  will report an error if the checksum verification fails. If you receive a
   *  checksum error, your client should verify that
   *  CRC32C(initialization_vector) is equal to initialization_vector_crc32c, and
   *  if so, perform a limited number of retries. A persistent mismatch may
   *  indicate an issue in your computation of the CRC32C checksum.
   *  Note: This field is defined as int64 for reasons of compatibility across
   *  different languages. However, it is a non-negative integer, which will
   *  never exceed 2^32-1, and can be safely downconverted to uint32 in languages
   *  that support this type.
   */
  // const initializationVectorCrc32c = {}

  // Imports the Kms library
  const {KeyManagementServiceClient} = require('@google-cloud/kms').v1;

  // Instantiates a client
  const kmsClient = new KeyManagementServiceClient();

  async function callRawDecrypt() {
    // Construct request
    const request = {
      name,
      ciphertext,
      initializationVector,
    };

    // Run request
    const response = await kmsClient.rawDecrypt(request);
    console.log(response);
  }

  callRawDecrypt();
  // [END cloudkms_v1_generated_KeyManagementService_RawDecrypt_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));
