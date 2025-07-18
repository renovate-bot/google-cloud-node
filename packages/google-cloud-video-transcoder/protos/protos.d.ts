// Copyright 2025 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import type {protobuf as $protobuf} from "google-gax";
import Long = require("long");
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace video. */
        namespace video {

            /** Namespace transcoder. */
            namespace transcoder {

                /** Namespace v1. */
                namespace v1 {

                    /** Properties of a Job. */
                    interface IJob {

                        /** Job name */
                        name?: (string|null);

                        /** Job inputUri */
                        inputUri?: (string|null);

                        /** Job outputUri */
                        outputUri?: (string|null);

                        /** Job templateId */
                        templateId?: (string|null);

                        /** Job config */
                        config?: (google.cloud.video.transcoder.v1.IJobConfig|null);

                        /** Job state */
                        state?: (google.cloud.video.transcoder.v1.Job.ProcessingState|keyof typeof google.cloud.video.transcoder.v1.Job.ProcessingState|null);

                        /** Job createTime */
                        createTime?: (google.protobuf.ITimestamp|null);

                        /** Job startTime */
                        startTime?: (google.protobuf.ITimestamp|null);

                        /** Job endTime */
                        endTime?: (google.protobuf.ITimestamp|null);

                        /** Job ttlAfterCompletionDays */
                        ttlAfterCompletionDays?: (number|null);

                        /** Job labels */
                        labels?: ({ [k: string]: string }|null);

                        /** Job error */
                        error?: (google.rpc.IStatus|null);

                        /** Job mode */
                        mode?: (google.cloud.video.transcoder.v1.Job.ProcessingMode|keyof typeof google.cloud.video.transcoder.v1.Job.ProcessingMode|null);

                        /** Job batchModePriority */
                        batchModePriority?: (number|null);

                        /** Job optimization */
                        optimization?: (google.cloud.video.transcoder.v1.Job.OptimizationStrategy|keyof typeof google.cloud.video.transcoder.v1.Job.OptimizationStrategy|null);

                        /** Job fillContentGaps */
                        fillContentGaps?: (boolean|null);
                    }

                    /** Represents a Job. */
                    class Job implements IJob {

                        /**
                         * Constructs a new Job.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IJob);

                        /** Job name. */
                        public name: string;

                        /** Job inputUri. */
                        public inputUri: string;

                        /** Job outputUri. */
                        public outputUri: string;

                        /** Job templateId. */
                        public templateId?: (string|null);

                        /** Job config. */
                        public config?: (google.cloud.video.transcoder.v1.IJobConfig|null);

                        /** Job state. */
                        public state: (google.cloud.video.transcoder.v1.Job.ProcessingState|keyof typeof google.cloud.video.transcoder.v1.Job.ProcessingState);

                        /** Job createTime. */
                        public createTime?: (google.protobuf.ITimestamp|null);

                        /** Job startTime. */
                        public startTime?: (google.protobuf.ITimestamp|null);

                        /** Job endTime. */
                        public endTime?: (google.protobuf.ITimestamp|null);

                        /** Job ttlAfterCompletionDays. */
                        public ttlAfterCompletionDays: number;

                        /** Job labels. */
                        public labels: { [k: string]: string };

                        /** Job error. */
                        public error?: (google.rpc.IStatus|null);

                        /** Job mode. */
                        public mode: (google.cloud.video.transcoder.v1.Job.ProcessingMode|keyof typeof google.cloud.video.transcoder.v1.Job.ProcessingMode);

                        /** Job batchModePriority. */
                        public batchModePriority: number;

                        /** Job optimization. */
                        public optimization: (google.cloud.video.transcoder.v1.Job.OptimizationStrategy|keyof typeof google.cloud.video.transcoder.v1.Job.OptimizationStrategy);

                        /** Job fillContentGaps. */
                        public fillContentGaps: boolean;

                        /** Job jobConfig. */
                        public jobConfig?: ("templateId"|"config");

                        /**
                         * Creates a new Job instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Job instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IJob): google.cloud.video.transcoder.v1.Job;

                        /**
                         * Encodes the specified Job message. Does not implicitly {@link google.cloud.video.transcoder.v1.Job.verify|verify} messages.
                         * @param message Job message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Job message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Job.verify|verify} messages.
                         * @param message Job message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IJob, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Job message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Job
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Job;

                        /**
                         * Decodes a Job message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Job
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Job;

                        /**
                         * Verifies a Job message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Job message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Job
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Job;

                        /**
                         * Creates a plain object from a Job message. Also converts values to other types if specified.
                         * @param message Job
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.Job, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Job to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Job
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Job {

                        /** ProcessingState enum. */
                        enum ProcessingState {
                            PROCESSING_STATE_UNSPECIFIED = 0,
                            PENDING = 1,
                            RUNNING = 2,
                            SUCCEEDED = 3,
                            FAILED = 4
                        }

                        /** ProcessingMode enum. */
                        enum ProcessingMode {
                            PROCESSING_MODE_UNSPECIFIED = 0,
                            PROCESSING_MODE_INTERACTIVE = 1,
                            PROCESSING_MODE_BATCH = 2
                        }

                        /** OptimizationStrategy enum. */
                        enum OptimizationStrategy {
                            OPTIMIZATION_STRATEGY_UNSPECIFIED = 0,
                            AUTODETECT = 1,
                            DISABLED = 2
                        }
                    }

                    /** Properties of a JobTemplate. */
                    interface IJobTemplate {

                        /** JobTemplate name */
                        name?: (string|null);

                        /** JobTemplate config */
                        config?: (google.cloud.video.transcoder.v1.IJobConfig|null);

                        /** JobTemplate labels */
                        labels?: ({ [k: string]: string }|null);
                    }

                    /** Represents a JobTemplate. */
                    class JobTemplate implements IJobTemplate {

                        /**
                         * Constructs a new JobTemplate.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IJobTemplate);

                        /** JobTemplate name. */
                        public name: string;

                        /** JobTemplate config. */
                        public config?: (google.cloud.video.transcoder.v1.IJobConfig|null);

                        /** JobTemplate labels. */
                        public labels: { [k: string]: string };

                        /**
                         * Creates a new JobTemplate instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns JobTemplate instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IJobTemplate): google.cloud.video.transcoder.v1.JobTemplate;

                        /**
                         * Encodes the specified JobTemplate message. Does not implicitly {@link google.cloud.video.transcoder.v1.JobTemplate.verify|verify} messages.
                         * @param message JobTemplate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IJobTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified JobTemplate message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.JobTemplate.verify|verify} messages.
                         * @param message JobTemplate message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IJobTemplate, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a JobTemplate message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns JobTemplate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.JobTemplate;

                        /**
                         * Decodes a JobTemplate message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns JobTemplate
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.JobTemplate;

                        /**
                         * Verifies a JobTemplate message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a JobTemplate message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns JobTemplate
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.JobTemplate;

                        /**
                         * Creates a plain object from a JobTemplate message. Also converts values to other types if specified.
                         * @param message JobTemplate
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.JobTemplate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this JobTemplate to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for JobTemplate
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a JobConfig. */
                    interface IJobConfig {

                        /** JobConfig inputs */
                        inputs?: (google.cloud.video.transcoder.v1.IInput[]|null);

                        /** JobConfig editList */
                        editList?: (google.cloud.video.transcoder.v1.IEditAtom[]|null);

                        /** JobConfig elementaryStreams */
                        elementaryStreams?: (google.cloud.video.transcoder.v1.IElementaryStream[]|null);

                        /** JobConfig muxStreams */
                        muxStreams?: (google.cloud.video.transcoder.v1.IMuxStream[]|null);

                        /** JobConfig manifests */
                        manifests?: (google.cloud.video.transcoder.v1.IManifest[]|null);

                        /** JobConfig output */
                        output?: (google.cloud.video.transcoder.v1.IOutput|null);

                        /** JobConfig adBreaks */
                        adBreaks?: (google.cloud.video.transcoder.v1.IAdBreak[]|null);

                        /** JobConfig pubsubDestination */
                        pubsubDestination?: (google.cloud.video.transcoder.v1.IPubsubDestination|null);

                        /** JobConfig spriteSheets */
                        spriteSheets?: (google.cloud.video.transcoder.v1.ISpriteSheet[]|null);

                        /** JobConfig overlays */
                        overlays?: (google.cloud.video.transcoder.v1.IOverlay[]|null);

                        /** JobConfig encryptions */
                        encryptions?: (google.cloud.video.transcoder.v1.IEncryption[]|null);
                    }

                    /** Represents a JobConfig. */
                    class JobConfig implements IJobConfig {

                        /**
                         * Constructs a new JobConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IJobConfig);

                        /** JobConfig inputs. */
                        public inputs: google.cloud.video.transcoder.v1.IInput[];

                        /** JobConfig editList. */
                        public editList: google.cloud.video.transcoder.v1.IEditAtom[];

                        /** JobConfig elementaryStreams. */
                        public elementaryStreams: google.cloud.video.transcoder.v1.IElementaryStream[];

                        /** JobConfig muxStreams. */
                        public muxStreams: google.cloud.video.transcoder.v1.IMuxStream[];

                        /** JobConfig manifests. */
                        public manifests: google.cloud.video.transcoder.v1.IManifest[];

                        /** JobConfig output. */
                        public output?: (google.cloud.video.transcoder.v1.IOutput|null);

                        /** JobConfig adBreaks. */
                        public adBreaks: google.cloud.video.transcoder.v1.IAdBreak[];

                        /** JobConfig pubsubDestination. */
                        public pubsubDestination?: (google.cloud.video.transcoder.v1.IPubsubDestination|null);

                        /** JobConfig spriteSheets. */
                        public spriteSheets: google.cloud.video.transcoder.v1.ISpriteSheet[];

                        /** JobConfig overlays. */
                        public overlays: google.cloud.video.transcoder.v1.IOverlay[];

                        /** JobConfig encryptions. */
                        public encryptions: google.cloud.video.transcoder.v1.IEncryption[];

                        /**
                         * Creates a new JobConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns JobConfig instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IJobConfig): google.cloud.video.transcoder.v1.JobConfig;

                        /**
                         * Encodes the specified JobConfig message. Does not implicitly {@link google.cloud.video.transcoder.v1.JobConfig.verify|verify} messages.
                         * @param message JobConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IJobConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified JobConfig message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.JobConfig.verify|verify} messages.
                         * @param message JobConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IJobConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a JobConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns JobConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.JobConfig;

                        /**
                         * Decodes a JobConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns JobConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.JobConfig;

                        /**
                         * Verifies a JobConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a JobConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns JobConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.JobConfig;

                        /**
                         * Creates a plain object from a JobConfig message. Also converts values to other types if specified.
                         * @param message JobConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.JobConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this JobConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for JobConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Input. */
                    interface IInput {

                        /** Input key */
                        key?: (string|null);

                        /** Input uri */
                        uri?: (string|null);

                        /** Input preprocessingConfig */
                        preprocessingConfig?: (google.cloud.video.transcoder.v1.IPreprocessingConfig|null);
                    }

                    /** Represents an Input. */
                    class Input implements IInput {

                        /**
                         * Constructs a new Input.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IInput);

                        /** Input key. */
                        public key: string;

                        /** Input uri. */
                        public uri: string;

                        /** Input preprocessingConfig. */
                        public preprocessingConfig?: (google.cloud.video.transcoder.v1.IPreprocessingConfig|null);

                        /**
                         * Creates a new Input instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Input instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IInput): google.cloud.video.transcoder.v1.Input;

                        /**
                         * Encodes the specified Input message. Does not implicitly {@link google.cloud.video.transcoder.v1.Input.verify|verify} messages.
                         * @param message Input message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Input message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Input.verify|verify} messages.
                         * @param message Input message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IInput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Input message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Input
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Input;

                        /**
                         * Decodes an Input message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Input
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Input;

                        /**
                         * Verifies an Input message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Input message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Input
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Input;

                        /**
                         * Creates a plain object from an Input message. Also converts values to other types if specified.
                         * @param message Input
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.Input, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Input to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Input
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Output. */
                    interface IOutput {

                        /** Output uri */
                        uri?: (string|null);
                    }

                    /** Represents an Output. */
                    class Output implements IOutput {

                        /**
                         * Constructs a new Output.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IOutput);

                        /** Output uri. */
                        public uri: string;

                        /**
                         * Creates a new Output instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Output instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IOutput): google.cloud.video.transcoder.v1.Output;

                        /**
                         * Encodes the specified Output message. Does not implicitly {@link google.cloud.video.transcoder.v1.Output.verify|verify} messages.
                         * @param message Output message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Output message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Output.verify|verify} messages.
                         * @param message Output message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IOutput, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Output message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Output
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Output;

                        /**
                         * Decodes an Output message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Output
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Output;

                        /**
                         * Verifies an Output message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Output message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Output
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Output;

                        /**
                         * Creates a plain object from an Output message. Also converts values to other types if specified.
                         * @param message Output
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.Output, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Output to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Output
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an EditAtom. */
                    interface IEditAtom {

                        /** EditAtom key */
                        key?: (string|null);

                        /** EditAtom inputs */
                        inputs?: (string[]|null);

                        /** EditAtom endTimeOffset */
                        endTimeOffset?: (google.protobuf.IDuration|null);

                        /** EditAtom startTimeOffset */
                        startTimeOffset?: (google.protobuf.IDuration|null);
                    }

                    /** Represents an EditAtom. */
                    class EditAtom implements IEditAtom {

                        /**
                         * Constructs a new EditAtom.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IEditAtom);

                        /** EditAtom key. */
                        public key: string;

                        /** EditAtom inputs. */
                        public inputs: string[];

                        /** EditAtom endTimeOffset. */
                        public endTimeOffset?: (google.protobuf.IDuration|null);

                        /** EditAtom startTimeOffset. */
                        public startTimeOffset?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new EditAtom instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns EditAtom instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IEditAtom): google.cloud.video.transcoder.v1.EditAtom;

                        /**
                         * Encodes the specified EditAtom message. Does not implicitly {@link google.cloud.video.transcoder.v1.EditAtom.verify|verify} messages.
                         * @param message EditAtom message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IEditAtom, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified EditAtom message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.EditAtom.verify|verify} messages.
                         * @param message EditAtom message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IEditAtom, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an EditAtom message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns EditAtom
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.EditAtom;

                        /**
                         * Decodes an EditAtom message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns EditAtom
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.EditAtom;

                        /**
                         * Verifies an EditAtom message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an EditAtom message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns EditAtom
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.EditAtom;

                        /**
                         * Creates a plain object from an EditAtom message. Also converts values to other types if specified.
                         * @param message EditAtom
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.EditAtom, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this EditAtom to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for EditAtom
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an AdBreak. */
                    interface IAdBreak {

                        /** AdBreak startTimeOffset */
                        startTimeOffset?: (google.protobuf.IDuration|null);
                    }

                    /** Represents an AdBreak. */
                    class AdBreak implements IAdBreak {

                        /**
                         * Constructs a new AdBreak.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IAdBreak);

                        /** AdBreak startTimeOffset. */
                        public startTimeOffset?: (google.protobuf.IDuration|null);

                        /**
                         * Creates a new AdBreak instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AdBreak instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IAdBreak): google.cloud.video.transcoder.v1.AdBreak;

                        /**
                         * Encodes the specified AdBreak message. Does not implicitly {@link google.cloud.video.transcoder.v1.AdBreak.verify|verify} messages.
                         * @param message AdBreak message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IAdBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AdBreak message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.AdBreak.verify|verify} messages.
                         * @param message AdBreak message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IAdBreak, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AdBreak message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AdBreak
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.AdBreak;

                        /**
                         * Decodes an AdBreak message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AdBreak
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.AdBreak;

                        /**
                         * Verifies an AdBreak message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AdBreak message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AdBreak
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.AdBreak;

                        /**
                         * Creates a plain object from an AdBreak message. Also converts values to other types if specified.
                         * @param message AdBreak
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.AdBreak, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AdBreak to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AdBreak
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an ElementaryStream. */
                    interface IElementaryStream {

                        /** ElementaryStream key */
                        key?: (string|null);

                        /** ElementaryStream videoStream */
                        videoStream?: (google.cloud.video.transcoder.v1.IVideoStream|null);

                        /** ElementaryStream audioStream */
                        audioStream?: (google.cloud.video.transcoder.v1.IAudioStream|null);

                        /** ElementaryStream textStream */
                        textStream?: (google.cloud.video.transcoder.v1.ITextStream|null);
                    }

                    /** Represents an ElementaryStream. */
                    class ElementaryStream implements IElementaryStream {

                        /**
                         * Constructs a new ElementaryStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IElementaryStream);

                        /** ElementaryStream key. */
                        public key: string;

                        /** ElementaryStream videoStream. */
                        public videoStream?: (google.cloud.video.transcoder.v1.IVideoStream|null);

                        /** ElementaryStream audioStream. */
                        public audioStream?: (google.cloud.video.transcoder.v1.IAudioStream|null);

                        /** ElementaryStream textStream. */
                        public textStream?: (google.cloud.video.transcoder.v1.ITextStream|null);

                        /** ElementaryStream elementaryStream. */
                        public elementaryStream?: ("videoStream"|"audioStream"|"textStream");

                        /**
                         * Creates a new ElementaryStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ElementaryStream instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IElementaryStream): google.cloud.video.transcoder.v1.ElementaryStream;

                        /**
                         * Encodes the specified ElementaryStream message. Does not implicitly {@link google.cloud.video.transcoder.v1.ElementaryStream.verify|verify} messages.
                         * @param message ElementaryStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IElementaryStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ElementaryStream message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.ElementaryStream.verify|verify} messages.
                         * @param message ElementaryStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IElementaryStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an ElementaryStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ElementaryStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.ElementaryStream;

                        /**
                         * Decodes an ElementaryStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ElementaryStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.ElementaryStream;

                        /**
                         * Verifies an ElementaryStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an ElementaryStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ElementaryStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.ElementaryStream;

                        /**
                         * Creates a plain object from an ElementaryStream message. Also converts values to other types if specified.
                         * @param message ElementaryStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.ElementaryStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ElementaryStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ElementaryStream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a MuxStream. */
                    interface IMuxStream {

                        /** MuxStream key */
                        key?: (string|null);

                        /** MuxStream fileName */
                        fileName?: (string|null);

                        /** MuxStream container */
                        container?: (string|null);

                        /** MuxStream elementaryStreams */
                        elementaryStreams?: (string[]|null);

                        /** MuxStream segmentSettings */
                        segmentSettings?: (google.cloud.video.transcoder.v1.ISegmentSettings|null);

                        /** MuxStream encryptionId */
                        encryptionId?: (string|null);

                        /** MuxStream fmp4 */
                        fmp4?: (google.cloud.video.transcoder.v1.MuxStream.IFmp4Config|null);
                    }

                    /** Represents a MuxStream. */
                    class MuxStream implements IMuxStream {

                        /**
                         * Constructs a new MuxStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IMuxStream);

                        /** MuxStream key. */
                        public key: string;

                        /** MuxStream fileName. */
                        public fileName: string;

                        /** MuxStream container. */
                        public container: string;

                        /** MuxStream elementaryStreams. */
                        public elementaryStreams: string[];

                        /** MuxStream segmentSettings. */
                        public segmentSettings?: (google.cloud.video.transcoder.v1.ISegmentSettings|null);

                        /** MuxStream encryptionId. */
                        public encryptionId: string;

                        /** MuxStream fmp4. */
                        public fmp4?: (google.cloud.video.transcoder.v1.MuxStream.IFmp4Config|null);

                        /** MuxStream containerConfig. */
                        public containerConfig?: "fmp4";

                        /**
                         * Creates a new MuxStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns MuxStream instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IMuxStream): google.cloud.video.transcoder.v1.MuxStream;

                        /**
                         * Encodes the specified MuxStream message. Does not implicitly {@link google.cloud.video.transcoder.v1.MuxStream.verify|verify} messages.
                         * @param message MuxStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IMuxStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified MuxStream message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.MuxStream.verify|verify} messages.
                         * @param message MuxStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IMuxStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a MuxStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns MuxStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.MuxStream;

                        /**
                         * Decodes a MuxStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns MuxStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.MuxStream;

                        /**
                         * Verifies a MuxStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a MuxStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns MuxStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.MuxStream;

                        /**
                         * Creates a plain object from a MuxStream message. Also converts values to other types if specified.
                         * @param message MuxStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.MuxStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this MuxStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for MuxStream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace MuxStream {

                        /** Properties of a Fmp4Config. */
                        interface IFmp4Config {

                            /** Fmp4Config codecTag */
                            codecTag?: (string|null);
                        }

                        /** Represents a Fmp4Config. */
                        class Fmp4Config implements IFmp4Config {

                            /**
                             * Constructs a new Fmp4Config.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.MuxStream.IFmp4Config);

                            /** Fmp4Config codecTag. */
                            public codecTag: string;

                            /**
                             * Creates a new Fmp4Config instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Fmp4Config instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.MuxStream.IFmp4Config): google.cloud.video.transcoder.v1.MuxStream.Fmp4Config;

                            /**
                             * Encodes the specified Fmp4Config message. Does not implicitly {@link google.cloud.video.transcoder.v1.MuxStream.Fmp4Config.verify|verify} messages.
                             * @param message Fmp4Config message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.MuxStream.IFmp4Config, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Fmp4Config message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.MuxStream.Fmp4Config.verify|verify} messages.
                             * @param message Fmp4Config message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.MuxStream.IFmp4Config, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Fmp4Config message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Fmp4Config
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.MuxStream.Fmp4Config;

                            /**
                             * Decodes a Fmp4Config message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Fmp4Config
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.MuxStream.Fmp4Config;

                            /**
                             * Verifies a Fmp4Config message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Fmp4Config message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Fmp4Config
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.MuxStream.Fmp4Config;

                            /**
                             * Creates a plain object from a Fmp4Config message. Also converts values to other types if specified.
                             * @param message Fmp4Config
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.MuxStream.Fmp4Config, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Fmp4Config to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Fmp4Config
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a Manifest. */
                    interface IManifest {

                        /** Manifest fileName */
                        fileName?: (string|null);

                        /** Manifest type */
                        type?: (google.cloud.video.transcoder.v1.Manifest.ManifestType|keyof typeof google.cloud.video.transcoder.v1.Manifest.ManifestType|null);

                        /** Manifest muxStreams */
                        muxStreams?: (string[]|null);

                        /** Manifest dash */
                        dash?: (google.cloud.video.transcoder.v1.Manifest.IDashConfig|null);
                    }

                    /** Represents a Manifest. */
                    class Manifest implements IManifest {

                        /**
                         * Constructs a new Manifest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IManifest);

                        /** Manifest fileName. */
                        public fileName: string;

                        /** Manifest type. */
                        public type: (google.cloud.video.transcoder.v1.Manifest.ManifestType|keyof typeof google.cloud.video.transcoder.v1.Manifest.ManifestType);

                        /** Manifest muxStreams. */
                        public muxStreams: string[];

                        /** Manifest dash. */
                        public dash?: (google.cloud.video.transcoder.v1.Manifest.IDashConfig|null);

                        /** Manifest manifestConfig. */
                        public manifestConfig?: "dash";

                        /**
                         * Creates a new Manifest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Manifest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IManifest): google.cloud.video.transcoder.v1.Manifest;

                        /**
                         * Encodes the specified Manifest message. Does not implicitly {@link google.cloud.video.transcoder.v1.Manifest.verify|verify} messages.
                         * @param message Manifest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IManifest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Manifest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Manifest.verify|verify} messages.
                         * @param message Manifest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IManifest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a Manifest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Manifest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Manifest;

                        /**
                         * Decodes a Manifest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Manifest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Manifest;

                        /**
                         * Verifies a Manifest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a Manifest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Manifest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Manifest;

                        /**
                         * Creates a plain object from a Manifest message. Also converts values to other types if specified.
                         * @param message Manifest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.Manifest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Manifest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Manifest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Manifest {

                        /** ManifestType enum. */
                        enum ManifestType {
                            MANIFEST_TYPE_UNSPECIFIED = 0,
                            HLS = 1,
                            DASH = 2
                        }

                        /** Properties of a DashConfig. */
                        interface IDashConfig {

                            /** DashConfig segmentReferenceScheme */
                            segmentReferenceScheme?: (google.cloud.video.transcoder.v1.Manifest.DashConfig.SegmentReferenceScheme|keyof typeof google.cloud.video.transcoder.v1.Manifest.DashConfig.SegmentReferenceScheme|null);
                        }

                        /** Represents a DashConfig. */
                        class DashConfig implements IDashConfig {

                            /**
                             * Constructs a new DashConfig.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Manifest.IDashConfig);

                            /** DashConfig segmentReferenceScheme. */
                            public segmentReferenceScheme: (google.cloud.video.transcoder.v1.Manifest.DashConfig.SegmentReferenceScheme|keyof typeof google.cloud.video.transcoder.v1.Manifest.DashConfig.SegmentReferenceScheme);

                            /**
                             * Creates a new DashConfig instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DashConfig instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Manifest.IDashConfig): google.cloud.video.transcoder.v1.Manifest.DashConfig;

                            /**
                             * Encodes the specified DashConfig message. Does not implicitly {@link google.cloud.video.transcoder.v1.Manifest.DashConfig.verify|verify} messages.
                             * @param message DashConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Manifest.IDashConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DashConfig message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Manifest.DashConfig.verify|verify} messages.
                             * @param message DashConfig message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Manifest.IDashConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DashConfig message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DashConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Manifest.DashConfig;

                            /**
                             * Decodes a DashConfig message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DashConfig
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Manifest.DashConfig;

                            /**
                             * Verifies a DashConfig message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DashConfig message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DashConfig
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Manifest.DashConfig;

                            /**
                             * Creates a plain object from a DashConfig message. Also converts values to other types if specified.
                             * @param message DashConfig
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Manifest.DashConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DashConfig to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for DashConfig
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace DashConfig {

                            /** SegmentReferenceScheme enum. */
                            enum SegmentReferenceScheme {
                                SEGMENT_REFERENCE_SCHEME_UNSPECIFIED = 0,
                                SEGMENT_LIST = 1,
                                SEGMENT_TEMPLATE_NUMBER = 2
                            }
                        }
                    }

                    /** Properties of a PubsubDestination. */
                    interface IPubsubDestination {

                        /** PubsubDestination topic */
                        topic?: (string|null);
                    }

                    /** Represents a PubsubDestination. */
                    class PubsubDestination implements IPubsubDestination {

                        /**
                         * Constructs a new PubsubDestination.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IPubsubDestination);

                        /** PubsubDestination topic. */
                        public topic: string;

                        /**
                         * Creates a new PubsubDestination instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PubsubDestination instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IPubsubDestination): google.cloud.video.transcoder.v1.PubsubDestination;

                        /**
                         * Encodes the specified PubsubDestination message. Does not implicitly {@link google.cloud.video.transcoder.v1.PubsubDestination.verify|verify} messages.
                         * @param message PubsubDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IPubsubDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PubsubDestination message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.PubsubDestination.verify|verify} messages.
                         * @param message PubsubDestination message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IPubsubDestination, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PubsubDestination message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PubsubDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.PubsubDestination;

                        /**
                         * Decodes a PubsubDestination message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PubsubDestination
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.PubsubDestination;

                        /**
                         * Verifies a PubsubDestination message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PubsubDestination message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PubsubDestination
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.PubsubDestination;

                        /**
                         * Creates a plain object from a PubsubDestination message. Also converts values to other types if specified.
                         * @param message PubsubDestination
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.PubsubDestination, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PubsubDestination to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PubsubDestination
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a SpriteSheet. */
                    interface ISpriteSheet {

                        /** SpriteSheet format */
                        format?: (string|null);

                        /** SpriteSheet filePrefix */
                        filePrefix?: (string|null);

                        /** SpriteSheet spriteWidthPixels */
                        spriteWidthPixels?: (number|null);

                        /** SpriteSheet spriteHeightPixels */
                        spriteHeightPixels?: (number|null);

                        /** SpriteSheet columnCount */
                        columnCount?: (number|null);

                        /** SpriteSheet rowCount */
                        rowCount?: (number|null);

                        /** SpriteSheet startTimeOffset */
                        startTimeOffset?: (google.protobuf.IDuration|null);

                        /** SpriteSheet endTimeOffset */
                        endTimeOffset?: (google.protobuf.IDuration|null);

                        /** SpriteSheet totalCount */
                        totalCount?: (number|null);

                        /** SpriteSheet interval */
                        interval?: (google.protobuf.IDuration|null);

                        /** SpriteSheet quality */
                        quality?: (number|null);
                    }

                    /** Represents a SpriteSheet. */
                    class SpriteSheet implements ISpriteSheet {

                        /**
                         * Constructs a new SpriteSheet.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.ISpriteSheet);

                        /** SpriteSheet format. */
                        public format: string;

                        /** SpriteSheet filePrefix. */
                        public filePrefix: string;

                        /** SpriteSheet spriteWidthPixels. */
                        public spriteWidthPixels: number;

                        /** SpriteSheet spriteHeightPixels. */
                        public spriteHeightPixels: number;

                        /** SpriteSheet columnCount. */
                        public columnCount: number;

                        /** SpriteSheet rowCount. */
                        public rowCount: number;

                        /** SpriteSheet startTimeOffset. */
                        public startTimeOffset?: (google.protobuf.IDuration|null);

                        /** SpriteSheet endTimeOffset. */
                        public endTimeOffset?: (google.protobuf.IDuration|null);

                        /** SpriteSheet totalCount. */
                        public totalCount?: (number|null);

                        /** SpriteSheet interval. */
                        public interval?: (google.protobuf.IDuration|null);

                        /** SpriteSheet quality. */
                        public quality: number;

                        /** SpriteSheet extractionStrategy. */
                        public extractionStrategy?: ("totalCount"|"interval");

                        /**
                         * Creates a new SpriteSheet instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SpriteSheet instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.ISpriteSheet): google.cloud.video.transcoder.v1.SpriteSheet;

                        /**
                         * Encodes the specified SpriteSheet message. Does not implicitly {@link google.cloud.video.transcoder.v1.SpriteSheet.verify|verify} messages.
                         * @param message SpriteSheet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.ISpriteSheet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SpriteSheet message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.SpriteSheet.verify|verify} messages.
                         * @param message SpriteSheet message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.ISpriteSheet, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SpriteSheet message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SpriteSheet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.SpriteSheet;

                        /**
                         * Decodes a SpriteSheet message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SpriteSheet
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.SpriteSheet;

                        /**
                         * Verifies a SpriteSheet message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SpriteSheet message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SpriteSheet
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.SpriteSheet;

                        /**
                         * Creates a plain object from a SpriteSheet message. Also converts values to other types if specified.
                         * @param message SpriteSheet
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.SpriteSheet, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SpriteSheet to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SpriteSheet
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Overlay. */
                    interface IOverlay {

                        /** Overlay image */
                        image?: (google.cloud.video.transcoder.v1.Overlay.IImage|null);

                        /** Overlay animations */
                        animations?: (google.cloud.video.transcoder.v1.Overlay.IAnimation[]|null);
                    }

                    /** Represents an Overlay. */
                    class Overlay implements IOverlay {

                        /**
                         * Constructs a new Overlay.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IOverlay);

                        /** Overlay image. */
                        public image?: (google.cloud.video.transcoder.v1.Overlay.IImage|null);

                        /** Overlay animations. */
                        public animations: google.cloud.video.transcoder.v1.Overlay.IAnimation[];

                        /**
                         * Creates a new Overlay instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Overlay instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IOverlay): google.cloud.video.transcoder.v1.Overlay;

                        /**
                         * Encodes the specified Overlay message. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.verify|verify} messages.
                         * @param message Overlay message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Overlay message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.verify|verify} messages.
                         * @param message Overlay message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IOverlay, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Overlay message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Overlay
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Overlay;

                        /**
                         * Decodes an Overlay message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Overlay
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Overlay;

                        /**
                         * Verifies an Overlay message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Overlay message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Overlay
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Overlay;

                        /**
                         * Creates a plain object from an Overlay message. Also converts values to other types if specified.
                         * @param message Overlay
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.Overlay, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Overlay to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Overlay
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Overlay {

                        /** Properties of a NormalizedCoordinate. */
                        interface INormalizedCoordinate {

                            /** NormalizedCoordinate x */
                            x?: (number|null);

                            /** NormalizedCoordinate y */
                            y?: (number|null);
                        }

                        /** Represents a NormalizedCoordinate. */
                        class NormalizedCoordinate implements INormalizedCoordinate {

                            /**
                             * Constructs a new NormalizedCoordinate.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Overlay.INormalizedCoordinate);

                            /** NormalizedCoordinate x. */
                            public x: number;

                            /** NormalizedCoordinate y. */
                            public y: number;

                            /**
                             * Creates a new NormalizedCoordinate instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns NormalizedCoordinate instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Overlay.INormalizedCoordinate): google.cloud.video.transcoder.v1.Overlay.NormalizedCoordinate;

                            /**
                             * Encodes the specified NormalizedCoordinate message. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.NormalizedCoordinate.verify|verify} messages.
                             * @param message NormalizedCoordinate message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Overlay.INormalizedCoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified NormalizedCoordinate message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.NormalizedCoordinate.verify|verify} messages.
                             * @param message NormalizedCoordinate message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Overlay.INormalizedCoordinate, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a NormalizedCoordinate message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns NormalizedCoordinate
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Overlay.NormalizedCoordinate;

                            /**
                             * Decodes a NormalizedCoordinate message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns NormalizedCoordinate
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Overlay.NormalizedCoordinate;

                            /**
                             * Verifies a NormalizedCoordinate message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a NormalizedCoordinate message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns NormalizedCoordinate
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Overlay.NormalizedCoordinate;

                            /**
                             * Creates a plain object from a NormalizedCoordinate message. Also converts values to other types if specified.
                             * @param message NormalizedCoordinate
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Overlay.NormalizedCoordinate, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this NormalizedCoordinate to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for NormalizedCoordinate
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an Image. */
                        interface IImage {

                            /** Image uri */
                            uri?: (string|null);

                            /** Image resolution */
                            resolution?: (google.cloud.video.transcoder.v1.Overlay.INormalizedCoordinate|null);

                            /** Image alpha */
                            alpha?: (number|null);
                        }

                        /** Represents an Image. */
                        class Image implements IImage {

                            /**
                             * Constructs a new Image.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Overlay.IImage);

                            /** Image uri. */
                            public uri: string;

                            /** Image resolution. */
                            public resolution?: (google.cloud.video.transcoder.v1.Overlay.INormalizedCoordinate|null);

                            /** Image alpha. */
                            public alpha: number;

                            /**
                             * Creates a new Image instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Image instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Overlay.IImage): google.cloud.video.transcoder.v1.Overlay.Image;

                            /**
                             * Encodes the specified Image message. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.Image.verify|verify} messages.
                             * @param message Image message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Overlay.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Image message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.Image.verify|verify} messages.
                             * @param message Image message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Overlay.IImage, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Image message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Image
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Overlay.Image;

                            /**
                             * Decodes an Image message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Image
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Overlay.Image;

                            /**
                             * Verifies an Image message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Image message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Image
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Overlay.Image;

                            /**
                             * Creates a plain object from an Image message. Also converts values to other types if specified.
                             * @param message Image
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Overlay.Image, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Image to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Image
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an AnimationStatic. */
                        interface IAnimationStatic {

                            /** AnimationStatic xy */
                            xy?: (google.cloud.video.transcoder.v1.Overlay.INormalizedCoordinate|null);

                            /** AnimationStatic startTimeOffset */
                            startTimeOffset?: (google.protobuf.IDuration|null);
                        }

                        /** Represents an AnimationStatic. */
                        class AnimationStatic implements IAnimationStatic {

                            /**
                             * Constructs a new AnimationStatic.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Overlay.IAnimationStatic);

                            /** AnimationStatic xy. */
                            public xy?: (google.cloud.video.transcoder.v1.Overlay.INormalizedCoordinate|null);

                            /** AnimationStatic startTimeOffset. */
                            public startTimeOffset?: (google.protobuf.IDuration|null);

                            /**
                             * Creates a new AnimationStatic instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AnimationStatic instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Overlay.IAnimationStatic): google.cloud.video.transcoder.v1.Overlay.AnimationStatic;

                            /**
                             * Encodes the specified AnimationStatic message. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.AnimationStatic.verify|verify} messages.
                             * @param message AnimationStatic message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Overlay.IAnimationStatic, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AnimationStatic message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.AnimationStatic.verify|verify} messages.
                             * @param message AnimationStatic message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Overlay.IAnimationStatic, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AnimationStatic message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AnimationStatic
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Overlay.AnimationStatic;

                            /**
                             * Decodes an AnimationStatic message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AnimationStatic
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Overlay.AnimationStatic;

                            /**
                             * Verifies an AnimationStatic message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AnimationStatic message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AnimationStatic
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Overlay.AnimationStatic;

                            /**
                             * Creates a plain object from an AnimationStatic message. Also converts values to other types if specified.
                             * @param message AnimationStatic
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Overlay.AnimationStatic, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AnimationStatic to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AnimationStatic
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** FadeType enum. */
                        enum FadeType {
                            FADE_TYPE_UNSPECIFIED = 0,
                            FADE_IN = 1,
                            FADE_OUT = 2
                        }

                        /** Properties of an AnimationFade. */
                        interface IAnimationFade {

                            /** AnimationFade fadeType */
                            fadeType?: (google.cloud.video.transcoder.v1.Overlay.FadeType|keyof typeof google.cloud.video.transcoder.v1.Overlay.FadeType|null);

                            /** AnimationFade xy */
                            xy?: (google.cloud.video.transcoder.v1.Overlay.INormalizedCoordinate|null);

                            /** AnimationFade startTimeOffset */
                            startTimeOffset?: (google.protobuf.IDuration|null);

                            /** AnimationFade endTimeOffset */
                            endTimeOffset?: (google.protobuf.IDuration|null);
                        }

                        /** Represents an AnimationFade. */
                        class AnimationFade implements IAnimationFade {

                            /**
                             * Constructs a new AnimationFade.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Overlay.IAnimationFade);

                            /** AnimationFade fadeType. */
                            public fadeType: (google.cloud.video.transcoder.v1.Overlay.FadeType|keyof typeof google.cloud.video.transcoder.v1.Overlay.FadeType);

                            /** AnimationFade xy. */
                            public xy?: (google.cloud.video.transcoder.v1.Overlay.INormalizedCoordinate|null);

                            /** AnimationFade startTimeOffset. */
                            public startTimeOffset?: (google.protobuf.IDuration|null);

                            /** AnimationFade endTimeOffset. */
                            public endTimeOffset?: (google.protobuf.IDuration|null);

                            /**
                             * Creates a new AnimationFade instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AnimationFade instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Overlay.IAnimationFade): google.cloud.video.transcoder.v1.Overlay.AnimationFade;

                            /**
                             * Encodes the specified AnimationFade message. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.AnimationFade.verify|verify} messages.
                             * @param message AnimationFade message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Overlay.IAnimationFade, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AnimationFade message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.AnimationFade.verify|verify} messages.
                             * @param message AnimationFade message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Overlay.IAnimationFade, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AnimationFade message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AnimationFade
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Overlay.AnimationFade;

                            /**
                             * Decodes an AnimationFade message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AnimationFade
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Overlay.AnimationFade;

                            /**
                             * Verifies an AnimationFade message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AnimationFade message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AnimationFade
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Overlay.AnimationFade;

                            /**
                             * Creates a plain object from an AnimationFade message. Also converts values to other types if specified.
                             * @param message AnimationFade
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Overlay.AnimationFade, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AnimationFade to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AnimationFade
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an AnimationEnd. */
                        interface IAnimationEnd {

                            /** AnimationEnd startTimeOffset */
                            startTimeOffset?: (google.protobuf.IDuration|null);
                        }

                        /** Represents an AnimationEnd. */
                        class AnimationEnd implements IAnimationEnd {

                            /**
                             * Constructs a new AnimationEnd.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Overlay.IAnimationEnd);

                            /** AnimationEnd startTimeOffset. */
                            public startTimeOffset?: (google.protobuf.IDuration|null);

                            /**
                             * Creates a new AnimationEnd instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AnimationEnd instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Overlay.IAnimationEnd): google.cloud.video.transcoder.v1.Overlay.AnimationEnd;

                            /**
                             * Encodes the specified AnimationEnd message. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.AnimationEnd.verify|verify} messages.
                             * @param message AnimationEnd message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Overlay.IAnimationEnd, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AnimationEnd message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.AnimationEnd.verify|verify} messages.
                             * @param message AnimationEnd message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Overlay.IAnimationEnd, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AnimationEnd message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AnimationEnd
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Overlay.AnimationEnd;

                            /**
                             * Decodes an AnimationEnd message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AnimationEnd
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Overlay.AnimationEnd;

                            /**
                             * Verifies an AnimationEnd message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AnimationEnd message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AnimationEnd
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Overlay.AnimationEnd;

                            /**
                             * Creates a plain object from an AnimationEnd message. Also converts values to other types if specified.
                             * @param message AnimationEnd
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Overlay.AnimationEnd, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AnimationEnd to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AnimationEnd
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an Animation. */
                        interface IAnimation {

                            /** Animation animationStatic */
                            animationStatic?: (google.cloud.video.transcoder.v1.Overlay.IAnimationStatic|null);

                            /** Animation animationFade */
                            animationFade?: (google.cloud.video.transcoder.v1.Overlay.IAnimationFade|null);

                            /** Animation animationEnd */
                            animationEnd?: (google.cloud.video.transcoder.v1.Overlay.IAnimationEnd|null);
                        }

                        /** Represents an Animation. */
                        class Animation implements IAnimation {

                            /**
                             * Constructs a new Animation.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Overlay.IAnimation);

                            /** Animation animationStatic. */
                            public animationStatic?: (google.cloud.video.transcoder.v1.Overlay.IAnimationStatic|null);

                            /** Animation animationFade. */
                            public animationFade?: (google.cloud.video.transcoder.v1.Overlay.IAnimationFade|null);

                            /** Animation animationEnd. */
                            public animationEnd?: (google.cloud.video.transcoder.v1.Overlay.IAnimationEnd|null);

                            /** Animation animationType. */
                            public animationType?: ("animationStatic"|"animationFade"|"animationEnd");

                            /**
                             * Creates a new Animation instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Animation instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Overlay.IAnimation): google.cloud.video.transcoder.v1.Overlay.Animation;

                            /**
                             * Encodes the specified Animation message. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.Animation.verify|verify} messages.
                             * @param message Animation message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Overlay.IAnimation, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Animation message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Overlay.Animation.verify|verify} messages.
                             * @param message Animation message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Overlay.IAnimation, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Animation message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Animation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Overlay.Animation;

                            /**
                             * Decodes an Animation message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Animation
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Overlay.Animation;

                            /**
                             * Verifies an Animation message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Animation message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Animation
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Overlay.Animation;

                            /**
                             * Creates a plain object from an Animation message. Also converts values to other types if specified.
                             * @param message Animation
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Overlay.Animation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Animation to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Animation
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a PreprocessingConfig. */
                    interface IPreprocessingConfig {

                        /** PreprocessingConfig color */
                        color?: (google.cloud.video.transcoder.v1.PreprocessingConfig.IColor|null);

                        /** PreprocessingConfig denoise */
                        denoise?: (google.cloud.video.transcoder.v1.PreprocessingConfig.IDenoise|null);

                        /** PreprocessingConfig deblock */
                        deblock?: (google.cloud.video.transcoder.v1.PreprocessingConfig.IDeblock|null);

                        /** PreprocessingConfig audio */
                        audio?: (google.cloud.video.transcoder.v1.PreprocessingConfig.IAudio|null);

                        /** PreprocessingConfig crop */
                        crop?: (google.cloud.video.transcoder.v1.PreprocessingConfig.ICrop|null);

                        /** PreprocessingConfig pad */
                        pad?: (google.cloud.video.transcoder.v1.PreprocessingConfig.IPad|null);

                        /** PreprocessingConfig deinterlace */
                        deinterlace?: (google.cloud.video.transcoder.v1.PreprocessingConfig.IDeinterlace|null);
                    }

                    /** Represents a PreprocessingConfig. */
                    class PreprocessingConfig implements IPreprocessingConfig {

                        /**
                         * Constructs a new PreprocessingConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IPreprocessingConfig);

                        /** PreprocessingConfig color. */
                        public color?: (google.cloud.video.transcoder.v1.PreprocessingConfig.IColor|null);

                        /** PreprocessingConfig denoise. */
                        public denoise?: (google.cloud.video.transcoder.v1.PreprocessingConfig.IDenoise|null);

                        /** PreprocessingConfig deblock. */
                        public deblock?: (google.cloud.video.transcoder.v1.PreprocessingConfig.IDeblock|null);

                        /** PreprocessingConfig audio. */
                        public audio?: (google.cloud.video.transcoder.v1.PreprocessingConfig.IAudio|null);

                        /** PreprocessingConfig crop. */
                        public crop?: (google.cloud.video.transcoder.v1.PreprocessingConfig.ICrop|null);

                        /** PreprocessingConfig pad. */
                        public pad?: (google.cloud.video.transcoder.v1.PreprocessingConfig.IPad|null);

                        /** PreprocessingConfig deinterlace. */
                        public deinterlace?: (google.cloud.video.transcoder.v1.PreprocessingConfig.IDeinterlace|null);

                        /**
                         * Creates a new PreprocessingConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns PreprocessingConfig instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IPreprocessingConfig): google.cloud.video.transcoder.v1.PreprocessingConfig;

                        /**
                         * Encodes the specified PreprocessingConfig message. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.verify|verify} messages.
                         * @param message PreprocessingConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IPreprocessingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified PreprocessingConfig message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.verify|verify} messages.
                         * @param message PreprocessingConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IPreprocessingConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a PreprocessingConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns PreprocessingConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.PreprocessingConfig;

                        /**
                         * Decodes a PreprocessingConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns PreprocessingConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.PreprocessingConfig;

                        /**
                         * Verifies a PreprocessingConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a PreprocessingConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns PreprocessingConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.PreprocessingConfig;

                        /**
                         * Creates a plain object from a PreprocessingConfig message. Also converts values to other types if specified.
                         * @param message PreprocessingConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.PreprocessingConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this PreprocessingConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for PreprocessingConfig
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace PreprocessingConfig {

                        /** Properties of a Color. */
                        interface IColor {

                            /** Color saturation */
                            saturation?: (number|null);

                            /** Color contrast */
                            contrast?: (number|null);

                            /** Color brightness */
                            brightness?: (number|null);
                        }

                        /** Represents a Color. */
                        class Color implements IColor {

                            /**
                             * Constructs a new Color.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.IColor);

                            /** Color saturation. */
                            public saturation: number;

                            /** Color contrast. */
                            public contrast: number;

                            /** Color brightness. */
                            public brightness: number;

                            /**
                             * Creates a new Color instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Color instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.IColor): google.cloud.video.transcoder.v1.PreprocessingConfig.Color;

                            /**
                             * Encodes the specified Color message. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Color.verify|verify} messages.
                             * @param message Color message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.PreprocessingConfig.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Color message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Color.verify|verify} messages.
                             * @param message Color message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.PreprocessingConfig.IColor, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Color message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Color
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.PreprocessingConfig.Color;

                            /**
                             * Decodes a Color message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Color
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.PreprocessingConfig.Color;

                            /**
                             * Verifies a Color message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Color message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Color
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.PreprocessingConfig.Color;

                            /**
                             * Creates a plain object from a Color message. Also converts values to other types if specified.
                             * @param message Color
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.PreprocessingConfig.Color, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Color to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Color
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Denoise. */
                        interface IDenoise {

                            /** Denoise strength */
                            strength?: (number|null);

                            /** Denoise tune */
                            tune?: (string|null);
                        }

                        /** Represents a Denoise. */
                        class Denoise implements IDenoise {

                            /**
                             * Constructs a new Denoise.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.IDenoise);

                            /** Denoise strength. */
                            public strength: number;

                            /** Denoise tune. */
                            public tune: string;

                            /**
                             * Creates a new Denoise instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Denoise instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.IDenoise): google.cloud.video.transcoder.v1.PreprocessingConfig.Denoise;

                            /**
                             * Encodes the specified Denoise message. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Denoise.verify|verify} messages.
                             * @param message Denoise message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.PreprocessingConfig.IDenoise, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Denoise message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Denoise.verify|verify} messages.
                             * @param message Denoise message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.PreprocessingConfig.IDenoise, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Denoise message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Denoise
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.PreprocessingConfig.Denoise;

                            /**
                             * Decodes a Denoise message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Denoise
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.PreprocessingConfig.Denoise;

                            /**
                             * Verifies a Denoise message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Denoise message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Denoise
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.PreprocessingConfig.Denoise;

                            /**
                             * Creates a plain object from a Denoise message. Also converts values to other types if specified.
                             * @param message Denoise
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.PreprocessingConfig.Denoise, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Denoise to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Denoise
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Deblock. */
                        interface IDeblock {

                            /** Deblock strength */
                            strength?: (number|null);

                            /** Deblock enabled */
                            enabled?: (boolean|null);
                        }

                        /** Represents a Deblock. */
                        class Deblock implements IDeblock {

                            /**
                             * Constructs a new Deblock.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.IDeblock);

                            /** Deblock strength. */
                            public strength: number;

                            /** Deblock enabled. */
                            public enabled: boolean;

                            /**
                             * Creates a new Deblock instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Deblock instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.IDeblock): google.cloud.video.transcoder.v1.PreprocessingConfig.Deblock;

                            /**
                             * Encodes the specified Deblock message. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Deblock.verify|verify} messages.
                             * @param message Deblock message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.PreprocessingConfig.IDeblock, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Deblock message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Deblock.verify|verify} messages.
                             * @param message Deblock message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.PreprocessingConfig.IDeblock, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Deblock message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Deblock
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.PreprocessingConfig.Deblock;

                            /**
                             * Decodes a Deblock message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Deblock
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.PreprocessingConfig.Deblock;

                            /**
                             * Verifies a Deblock message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Deblock message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Deblock
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.PreprocessingConfig.Deblock;

                            /**
                             * Creates a plain object from a Deblock message. Also converts values to other types if specified.
                             * @param message Deblock
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.PreprocessingConfig.Deblock, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Deblock to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Deblock
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of an Audio. */
                        interface IAudio {

                            /** Audio lufs */
                            lufs?: (number|null);

                            /** Audio highBoost */
                            highBoost?: (boolean|null);

                            /** Audio lowBoost */
                            lowBoost?: (boolean|null);
                        }

                        /** Represents an Audio. */
                        class Audio implements IAudio {

                            /**
                             * Constructs a new Audio.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.IAudio);

                            /** Audio lufs. */
                            public lufs: number;

                            /** Audio highBoost. */
                            public highBoost: boolean;

                            /** Audio lowBoost. */
                            public lowBoost: boolean;

                            /**
                             * Creates a new Audio instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Audio instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.IAudio): google.cloud.video.transcoder.v1.PreprocessingConfig.Audio;

                            /**
                             * Encodes the specified Audio message. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Audio.verify|verify} messages.
                             * @param message Audio message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.PreprocessingConfig.IAudio, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Audio message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Audio.verify|verify} messages.
                             * @param message Audio message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.PreprocessingConfig.IAudio, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Audio message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Audio
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.PreprocessingConfig.Audio;

                            /**
                             * Decodes an Audio message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Audio
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.PreprocessingConfig.Audio;

                            /**
                             * Verifies an Audio message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Audio message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Audio
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.PreprocessingConfig.Audio;

                            /**
                             * Creates a plain object from an Audio message. Also converts values to other types if specified.
                             * @param message Audio
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.PreprocessingConfig.Audio, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Audio to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Audio
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Crop. */
                        interface ICrop {

                            /** Crop topPixels */
                            topPixels?: (number|null);

                            /** Crop bottomPixels */
                            bottomPixels?: (number|null);

                            /** Crop leftPixels */
                            leftPixels?: (number|null);

                            /** Crop rightPixels */
                            rightPixels?: (number|null);
                        }

                        /** Represents a Crop. */
                        class Crop implements ICrop {

                            /**
                             * Constructs a new Crop.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.ICrop);

                            /** Crop topPixels. */
                            public topPixels: number;

                            /** Crop bottomPixels. */
                            public bottomPixels: number;

                            /** Crop leftPixels. */
                            public leftPixels: number;

                            /** Crop rightPixels. */
                            public rightPixels: number;

                            /**
                             * Creates a new Crop instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Crop instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.ICrop): google.cloud.video.transcoder.v1.PreprocessingConfig.Crop;

                            /**
                             * Encodes the specified Crop message. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Crop.verify|verify} messages.
                             * @param message Crop message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.PreprocessingConfig.ICrop, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Crop message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Crop.verify|verify} messages.
                             * @param message Crop message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.PreprocessingConfig.ICrop, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Crop message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Crop
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.PreprocessingConfig.Crop;

                            /**
                             * Decodes a Crop message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Crop
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.PreprocessingConfig.Crop;

                            /**
                             * Verifies a Crop message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Crop message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Crop
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.PreprocessingConfig.Crop;

                            /**
                             * Creates a plain object from a Crop message. Also converts values to other types if specified.
                             * @param message Crop
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.PreprocessingConfig.Crop, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Crop to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Crop
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Pad. */
                        interface IPad {

                            /** Pad topPixels */
                            topPixels?: (number|null);

                            /** Pad bottomPixels */
                            bottomPixels?: (number|null);

                            /** Pad leftPixels */
                            leftPixels?: (number|null);

                            /** Pad rightPixels */
                            rightPixels?: (number|null);
                        }

                        /** Represents a Pad. */
                        class Pad implements IPad {

                            /**
                             * Constructs a new Pad.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.IPad);

                            /** Pad topPixels. */
                            public topPixels: number;

                            /** Pad bottomPixels. */
                            public bottomPixels: number;

                            /** Pad leftPixels. */
                            public leftPixels: number;

                            /** Pad rightPixels. */
                            public rightPixels: number;

                            /**
                             * Creates a new Pad instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Pad instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.IPad): google.cloud.video.transcoder.v1.PreprocessingConfig.Pad;

                            /**
                             * Encodes the specified Pad message. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Pad.verify|verify} messages.
                             * @param message Pad message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.PreprocessingConfig.IPad, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Pad message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Pad.verify|verify} messages.
                             * @param message Pad message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.PreprocessingConfig.IPad, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Pad message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Pad
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.PreprocessingConfig.Pad;

                            /**
                             * Decodes a Pad message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Pad
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.PreprocessingConfig.Pad;

                            /**
                             * Verifies a Pad message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Pad message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Pad
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.PreprocessingConfig.Pad;

                            /**
                             * Creates a plain object from a Pad message. Also converts values to other types if specified.
                             * @param message Pad
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.PreprocessingConfig.Pad, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Pad to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Pad
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Deinterlace. */
                        interface IDeinterlace {

                            /** Deinterlace yadif */
                            yadif?: (google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.IYadifConfig|null);

                            /** Deinterlace bwdif */
                            bwdif?: (google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.IBwdifConfig|null);
                        }

                        /** Represents a Deinterlace. */
                        class Deinterlace implements IDeinterlace {

                            /**
                             * Constructs a new Deinterlace.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.IDeinterlace);

                            /** Deinterlace yadif. */
                            public yadif?: (google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.IYadifConfig|null);

                            /** Deinterlace bwdif. */
                            public bwdif?: (google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.IBwdifConfig|null);

                            /** Deinterlace deinterlacingFilter. */
                            public deinterlacingFilter?: ("yadif"|"bwdif");

                            /**
                             * Creates a new Deinterlace instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Deinterlace instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.IDeinterlace): google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace;

                            /**
                             * Encodes the specified Deinterlace message. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.verify|verify} messages.
                             * @param message Deinterlace message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.PreprocessingConfig.IDeinterlace, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Deinterlace message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.verify|verify} messages.
                             * @param message Deinterlace message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.PreprocessingConfig.IDeinterlace, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Deinterlace message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Deinterlace
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace;

                            /**
                             * Decodes a Deinterlace message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Deinterlace
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace;

                            /**
                             * Verifies a Deinterlace message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Deinterlace message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Deinterlace
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace;

                            /**
                             * Creates a plain object from a Deinterlace message. Also converts values to other types if specified.
                             * @param message Deinterlace
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Deinterlace to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Deinterlace
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        namespace Deinterlace {

                            /** Properties of a YadifConfig. */
                            interface IYadifConfig {

                                /** YadifConfig mode */
                                mode?: (string|null);

                                /** YadifConfig disableSpatialInterlacing */
                                disableSpatialInterlacing?: (boolean|null);

                                /** YadifConfig parity */
                                parity?: (string|null);

                                /** YadifConfig deinterlaceAllFrames */
                                deinterlaceAllFrames?: (boolean|null);
                            }

                            /** Represents a YadifConfig. */
                            class YadifConfig implements IYadifConfig {

                                /**
                                 * Constructs a new YadifConfig.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.IYadifConfig);

                                /** YadifConfig mode. */
                                public mode: string;

                                /** YadifConfig disableSpatialInterlacing. */
                                public disableSpatialInterlacing: boolean;

                                /** YadifConfig parity. */
                                public parity: string;

                                /** YadifConfig deinterlaceAllFrames. */
                                public deinterlaceAllFrames: boolean;

                                /**
                                 * Creates a new YadifConfig instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns YadifConfig instance
                                 */
                                public static create(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.IYadifConfig): google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.YadifConfig;

                                /**
                                 * Encodes the specified YadifConfig message. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.YadifConfig.verify|verify} messages.
                                 * @param message YadifConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.IYadifConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified YadifConfig message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.YadifConfig.verify|verify} messages.
                                 * @param message YadifConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.IYadifConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a YadifConfig message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns YadifConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.YadifConfig;

                                /**
                                 * Decodes a YadifConfig message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns YadifConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.YadifConfig;

                                /**
                                 * Verifies a YadifConfig message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a YadifConfig message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns YadifConfig
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.YadifConfig;

                                /**
                                 * Creates a plain object from a YadifConfig message. Also converts values to other types if specified.
                                 * @param message YadifConfig
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.YadifConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this YadifConfig to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for YadifConfig
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }

                            /** Properties of a BwdifConfig. */
                            interface IBwdifConfig {

                                /** BwdifConfig mode */
                                mode?: (string|null);

                                /** BwdifConfig parity */
                                parity?: (string|null);

                                /** BwdifConfig deinterlaceAllFrames */
                                deinterlaceAllFrames?: (boolean|null);
                            }

                            /** Represents a BwdifConfig. */
                            class BwdifConfig implements IBwdifConfig {

                                /**
                                 * Constructs a new BwdifConfig.
                                 * @param [properties] Properties to set
                                 */
                                constructor(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.IBwdifConfig);

                                /** BwdifConfig mode. */
                                public mode: string;

                                /** BwdifConfig parity. */
                                public parity: string;

                                /** BwdifConfig deinterlaceAllFrames. */
                                public deinterlaceAllFrames: boolean;

                                /**
                                 * Creates a new BwdifConfig instance using the specified properties.
                                 * @param [properties] Properties to set
                                 * @returns BwdifConfig instance
                                 */
                                public static create(properties?: google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.IBwdifConfig): google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.BwdifConfig;

                                /**
                                 * Encodes the specified BwdifConfig message. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.BwdifConfig.verify|verify} messages.
                                 * @param message BwdifConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encode(message: google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.IBwdifConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Encodes the specified BwdifConfig message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.BwdifConfig.verify|verify} messages.
                                 * @param message BwdifConfig message or plain object to encode
                                 * @param [writer] Writer to encode to
                                 * @returns Writer
                                 */
                                public static encodeDelimited(message: google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.IBwdifConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                                /**
                                 * Decodes a BwdifConfig message from the specified reader or buffer.
                                 * @param reader Reader or buffer to decode from
                                 * @param [length] Message length if known beforehand
                                 * @returns BwdifConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.BwdifConfig;

                                /**
                                 * Decodes a BwdifConfig message from the specified reader or buffer, length delimited.
                                 * @param reader Reader or buffer to decode from
                                 * @returns BwdifConfig
                                 * @throws {Error} If the payload is not a reader or valid buffer
                                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                                 */
                                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.BwdifConfig;

                                /**
                                 * Verifies a BwdifConfig message.
                                 * @param message Plain object to verify
                                 * @returns `null` if valid, otherwise the reason why it is not
                                 */
                                public static verify(message: { [k: string]: any }): (string|null);

                                /**
                                 * Creates a BwdifConfig message from a plain object. Also converts values to their respective internal types.
                                 * @param object Plain object
                                 * @returns BwdifConfig
                                 */
                                public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.BwdifConfig;

                                /**
                                 * Creates a plain object from a BwdifConfig message. Also converts values to other types if specified.
                                 * @param message BwdifConfig
                                 * @param [options] Conversion options
                                 * @returns Plain object
                                 */
                                public static toObject(message: google.cloud.video.transcoder.v1.PreprocessingConfig.Deinterlace.BwdifConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                                /**
                                 * Converts this BwdifConfig to JSON.
                                 * @returns JSON object
                                 */
                                public toJSON(): { [k: string]: any };

                                /**
                                 * Gets the default type url for BwdifConfig
                                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                                 * @returns The default type url
                                 */
                                public static getTypeUrl(typeUrlPrefix?: string): string;
                            }
                        }
                    }

                    /** Properties of a VideoStream. */
                    interface IVideoStream {

                        /** VideoStream h264 */
                        h264?: (google.cloud.video.transcoder.v1.VideoStream.IH264CodecSettings|null);

                        /** VideoStream h265 */
                        h265?: (google.cloud.video.transcoder.v1.VideoStream.IH265CodecSettings|null);

                        /** VideoStream vp9 */
                        vp9?: (google.cloud.video.transcoder.v1.VideoStream.IVp9CodecSettings|null);
                    }

                    /** Represents a VideoStream. */
                    class VideoStream implements IVideoStream {

                        /**
                         * Constructs a new VideoStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IVideoStream);

                        /** VideoStream h264. */
                        public h264?: (google.cloud.video.transcoder.v1.VideoStream.IH264CodecSettings|null);

                        /** VideoStream h265. */
                        public h265?: (google.cloud.video.transcoder.v1.VideoStream.IH265CodecSettings|null);

                        /** VideoStream vp9. */
                        public vp9?: (google.cloud.video.transcoder.v1.VideoStream.IVp9CodecSettings|null);

                        /** VideoStream codecSettings. */
                        public codecSettings?: ("h264"|"h265"|"vp9");

                        /**
                         * Creates a new VideoStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns VideoStream instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IVideoStream): google.cloud.video.transcoder.v1.VideoStream;

                        /**
                         * Encodes the specified VideoStream message. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.verify|verify} messages.
                         * @param message VideoStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IVideoStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified VideoStream message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.verify|verify} messages.
                         * @param message VideoStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IVideoStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a VideoStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns VideoStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.VideoStream;

                        /**
                         * Decodes a VideoStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns VideoStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.VideoStream;

                        /**
                         * Verifies a VideoStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a VideoStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns VideoStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.VideoStream;

                        /**
                         * Creates a plain object from a VideoStream message. Also converts values to other types if specified.
                         * @param message VideoStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.VideoStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this VideoStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for VideoStream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace VideoStream {

                        /** FrameRateConversionStrategy enum. */
                        enum FrameRateConversionStrategy {
                            FRAME_RATE_CONVERSION_STRATEGY_UNSPECIFIED = 0,
                            DOWNSAMPLE = 1,
                            DROP_DUPLICATE = 2
                        }

                        /** Properties of a H264ColorFormatSDR. */
                        interface IH264ColorFormatSDR {
                        }

                        /** Represents a H264ColorFormatSDR. */
                        class H264ColorFormatSDR implements IH264ColorFormatSDR {

                            /**
                             * Constructs a new H264ColorFormatSDR.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.VideoStream.IH264ColorFormatSDR);

                            /**
                             * Creates a new H264ColorFormatSDR instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns H264ColorFormatSDR instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.VideoStream.IH264ColorFormatSDR): google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatSDR;

                            /**
                             * Encodes the specified H264ColorFormatSDR message. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatSDR.verify|verify} messages.
                             * @param message H264ColorFormatSDR message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.VideoStream.IH264ColorFormatSDR, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified H264ColorFormatSDR message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatSDR.verify|verify} messages.
                             * @param message H264ColorFormatSDR message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.VideoStream.IH264ColorFormatSDR, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a H264ColorFormatSDR message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns H264ColorFormatSDR
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatSDR;

                            /**
                             * Decodes a H264ColorFormatSDR message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns H264ColorFormatSDR
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatSDR;

                            /**
                             * Verifies a H264ColorFormatSDR message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a H264ColorFormatSDR message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns H264ColorFormatSDR
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatSDR;

                            /**
                             * Creates a plain object from a H264ColorFormatSDR message. Also converts values to other types if specified.
                             * @param message H264ColorFormatSDR
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatSDR, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this H264ColorFormatSDR to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for H264ColorFormatSDR
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a H264ColorFormatHLG. */
                        interface IH264ColorFormatHLG {
                        }

                        /** Represents a H264ColorFormatHLG. */
                        class H264ColorFormatHLG implements IH264ColorFormatHLG {

                            /**
                             * Constructs a new H264ColorFormatHLG.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.VideoStream.IH264ColorFormatHLG);

                            /**
                             * Creates a new H264ColorFormatHLG instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns H264ColorFormatHLG instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.VideoStream.IH264ColorFormatHLG): google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatHLG;

                            /**
                             * Encodes the specified H264ColorFormatHLG message. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatHLG.verify|verify} messages.
                             * @param message H264ColorFormatHLG message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.VideoStream.IH264ColorFormatHLG, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified H264ColorFormatHLG message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatHLG.verify|verify} messages.
                             * @param message H264ColorFormatHLG message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.VideoStream.IH264ColorFormatHLG, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a H264ColorFormatHLG message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns H264ColorFormatHLG
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatHLG;

                            /**
                             * Decodes a H264ColorFormatHLG message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns H264ColorFormatHLG
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatHLG;

                            /**
                             * Verifies a H264ColorFormatHLG message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a H264ColorFormatHLG message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns H264ColorFormatHLG
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatHLG;

                            /**
                             * Creates a plain object from a H264ColorFormatHLG message. Also converts values to other types if specified.
                             * @param message H264ColorFormatHLG
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.VideoStream.H264ColorFormatHLG, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this H264ColorFormatHLG to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for H264ColorFormatHLG
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a H264CodecSettings. */
                        interface IH264CodecSettings {

                            /** H264CodecSettings widthPixels */
                            widthPixels?: (number|null);

                            /** H264CodecSettings heightPixels */
                            heightPixels?: (number|null);

                            /** H264CodecSettings frameRate */
                            frameRate?: (number|null);

                            /** H264CodecSettings frameRateConversionStrategy */
                            frameRateConversionStrategy?: (google.cloud.video.transcoder.v1.VideoStream.FrameRateConversionStrategy|keyof typeof google.cloud.video.transcoder.v1.VideoStream.FrameRateConversionStrategy|null);

                            /** H264CodecSettings bitrateBps */
                            bitrateBps?: (number|null);

                            /** H264CodecSettings pixelFormat */
                            pixelFormat?: (string|null);

                            /** H264CodecSettings rateControlMode */
                            rateControlMode?: (string|null);

                            /** H264CodecSettings crfLevel */
                            crfLevel?: (number|null);

                            /** H264CodecSettings allowOpenGop */
                            allowOpenGop?: (boolean|null);

                            /** H264CodecSettings gopFrameCount */
                            gopFrameCount?: (number|null);

                            /** H264CodecSettings gopDuration */
                            gopDuration?: (google.protobuf.IDuration|null);

                            /** H264CodecSettings enableTwoPass */
                            enableTwoPass?: (boolean|null);

                            /** H264CodecSettings vbvSizeBits */
                            vbvSizeBits?: (number|null);

                            /** H264CodecSettings vbvFullnessBits */
                            vbvFullnessBits?: (number|null);

                            /** H264CodecSettings entropyCoder */
                            entropyCoder?: (string|null);

                            /** H264CodecSettings bPyramid */
                            bPyramid?: (boolean|null);

                            /** H264CodecSettings bFrameCount */
                            bFrameCount?: (number|null);

                            /** H264CodecSettings aqStrength */
                            aqStrength?: (number|null);

                            /** H264CodecSettings profile */
                            profile?: (string|null);

                            /** H264CodecSettings tune */
                            tune?: (string|null);

                            /** H264CodecSettings preset */
                            preset?: (string|null);

                            /** H264CodecSettings sdr */
                            sdr?: (google.cloud.video.transcoder.v1.VideoStream.IH264ColorFormatSDR|null);

                            /** H264CodecSettings hlg */
                            hlg?: (google.cloud.video.transcoder.v1.VideoStream.IH264ColorFormatHLG|null);
                        }

                        /** Represents a H264CodecSettings. */
                        class H264CodecSettings implements IH264CodecSettings {

                            /**
                             * Constructs a new H264CodecSettings.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.VideoStream.IH264CodecSettings);

                            /** H264CodecSettings widthPixels. */
                            public widthPixels: number;

                            /** H264CodecSettings heightPixels. */
                            public heightPixels: number;

                            /** H264CodecSettings frameRate. */
                            public frameRate: number;

                            /** H264CodecSettings frameRateConversionStrategy. */
                            public frameRateConversionStrategy: (google.cloud.video.transcoder.v1.VideoStream.FrameRateConversionStrategy|keyof typeof google.cloud.video.transcoder.v1.VideoStream.FrameRateConversionStrategy);

                            /** H264CodecSettings bitrateBps. */
                            public bitrateBps: number;

                            /** H264CodecSettings pixelFormat. */
                            public pixelFormat: string;

                            /** H264CodecSettings rateControlMode. */
                            public rateControlMode: string;

                            /** H264CodecSettings crfLevel. */
                            public crfLevel: number;

                            /** H264CodecSettings allowOpenGop. */
                            public allowOpenGop: boolean;

                            /** H264CodecSettings gopFrameCount. */
                            public gopFrameCount?: (number|null);

                            /** H264CodecSettings gopDuration. */
                            public gopDuration?: (google.protobuf.IDuration|null);

                            /** H264CodecSettings enableTwoPass. */
                            public enableTwoPass: boolean;

                            /** H264CodecSettings vbvSizeBits. */
                            public vbvSizeBits: number;

                            /** H264CodecSettings vbvFullnessBits. */
                            public vbvFullnessBits: number;

                            /** H264CodecSettings entropyCoder. */
                            public entropyCoder: string;

                            /** H264CodecSettings bPyramid. */
                            public bPyramid: boolean;

                            /** H264CodecSettings bFrameCount. */
                            public bFrameCount: number;

                            /** H264CodecSettings aqStrength. */
                            public aqStrength: number;

                            /** H264CodecSettings profile. */
                            public profile: string;

                            /** H264CodecSettings tune. */
                            public tune: string;

                            /** H264CodecSettings preset. */
                            public preset: string;

                            /** H264CodecSettings sdr. */
                            public sdr?: (google.cloud.video.transcoder.v1.VideoStream.IH264ColorFormatSDR|null);

                            /** H264CodecSettings hlg. */
                            public hlg?: (google.cloud.video.transcoder.v1.VideoStream.IH264ColorFormatHLG|null);

                            /** H264CodecSettings gopMode. */
                            public gopMode?: ("gopFrameCount"|"gopDuration");

                            /** H264CodecSettings colorFormat. */
                            public colorFormat?: ("sdr"|"hlg");

                            /**
                             * Creates a new H264CodecSettings instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns H264CodecSettings instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.VideoStream.IH264CodecSettings): google.cloud.video.transcoder.v1.VideoStream.H264CodecSettings;

                            /**
                             * Encodes the specified H264CodecSettings message. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H264CodecSettings.verify|verify} messages.
                             * @param message H264CodecSettings message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.VideoStream.IH264CodecSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified H264CodecSettings message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H264CodecSettings.verify|verify} messages.
                             * @param message H264CodecSettings message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.VideoStream.IH264CodecSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a H264CodecSettings message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns H264CodecSettings
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.VideoStream.H264CodecSettings;

                            /**
                             * Decodes a H264CodecSettings message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns H264CodecSettings
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.VideoStream.H264CodecSettings;

                            /**
                             * Verifies a H264CodecSettings message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a H264CodecSettings message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns H264CodecSettings
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.VideoStream.H264CodecSettings;

                            /**
                             * Creates a plain object from a H264CodecSettings message. Also converts values to other types if specified.
                             * @param message H264CodecSettings
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.VideoStream.H264CodecSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this H264CodecSettings to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for H264CodecSettings
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a H265ColorFormatSDR. */
                        interface IH265ColorFormatSDR {
                        }

                        /** Represents a H265ColorFormatSDR. */
                        class H265ColorFormatSDR implements IH265ColorFormatSDR {

                            /**
                             * Constructs a new H265ColorFormatSDR.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatSDR);

                            /**
                             * Creates a new H265ColorFormatSDR instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns H265ColorFormatSDR instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatSDR): google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatSDR;

                            /**
                             * Encodes the specified H265ColorFormatSDR message. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatSDR.verify|verify} messages.
                             * @param message H265ColorFormatSDR message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatSDR, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified H265ColorFormatSDR message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatSDR.verify|verify} messages.
                             * @param message H265ColorFormatSDR message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatSDR, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a H265ColorFormatSDR message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns H265ColorFormatSDR
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatSDR;

                            /**
                             * Decodes a H265ColorFormatSDR message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns H265ColorFormatSDR
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatSDR;

                            /**
                             * Verifies a H265ColorFormatSDR message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a H265ColorFormatSDR message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns H265ColorFormatSDR
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatSDR;

                            /**
                             * Creates a plain object from a H265ColorFormatSDR message. Also converts values to other types if specified.
                             * @param message H265ColorFormatSDR
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatSDR, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this H265ColorFormatSDR to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for H265ColorFormatSDR
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a H265ColorFormatHLG. */
                        interface IH265ColorFormatHLG {
                        }

                        /** Represents a H265ColorFormatHLG. */
                        class H265ColorFormatHLG implements IH265ColorFormatHLG {

                            /**
                             * Constructs a new H265ColorFormatHLG.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatHLG);

                            /**
                             * Creates a new H265ColorFormatHLG instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns H265ColorFormatHLG instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatHLG): google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHLG;

                            /**
                             * Encodes the specified H265ColorFormatHLG message. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHLG.verify|verify} messages.
                             * @param message H265ColorFormatHLG message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatHLG, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified H265ColorFormatHLG message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHLG.verify|verify} messages.
                             * @param message H265ColorFormatHLG message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatHLG, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a H265ColorFormatHLG message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns H265ColorFormatHLG
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHLG;

                            /**
                             * Decodes a H265ColorFormatHLG message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns H265ColorFormatHLG
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHLG;

                            /**
                             * Verifies a H265ColorFormatHLG message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a H265ColorFormatHLG message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns H265ColorFormatHLG
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHLG;

                            /**
                             * Creates a plain object from a H265ColorFormatHLG message. Also converts values to other types if specified.
                             * @param message H265ColorFormatHLG
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHLG, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this H265ColorFormatHLG to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for H265ColorFormatHLG
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a H265ColorFormatHDR10. */
                        interface IH265ColorFormatHDR10 {
                        }

                        /** Represents a H265ColorFormatHDR10. */
                        class H265ColorFormatHDR10 implements IH265ColorFormatHDR10 {

                            /**
                             * Constructs a new H265ColorFormatHDR10.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatHDR10);

                            /**
                             * Creates a new H265ColorFormatHDR10 instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns H265ColorFormatHDR10 instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatHDR10): google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHDR10;

                            /**
                             * Encodes the specified H265ColorFormatHDR10 message. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHDR10.verify|verify} messages.
                             * @param message H265ColorFormatHDR10 message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatHDR10, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified H265ColorFormatHDR10 message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHDR10.verify|verify} messages.
                             * @param message H265ColorFormatHDR10 message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatHDR10, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a H265ColorFormatHDR10 message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns H265ColorFormatHDR10
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHDR10;

                            /**
                             * Decodes a H265ColorFormatHDR10 message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns H265ColorFormatHDR10
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHDR10;

                            /**
                             * Verifies a H265ColorFormatHDR10 message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a H265ColorFormatHDR10 message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns H265ColorFormatHDR10
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHDR10;

                            /**
                             * Creates a plain object from a H265ColorFormatHDR10 message. Also converts values to other types if specified.
                             * @param message H265ColorFormatHDR10
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.VideoStream.H265ColorFormatHDR10, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this H265ColorFormatHDR10 to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for H265ColorFormatHDR10
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a H265CodecSettings. */
                        interface IH265CodecSettings {

                            /** H265CodecSettings widthPixels */
                            widthPixels?: (number|null);

                            /** H265CodecSettings heightPixels */
                            heightPixels?: (number|null);

                            /** H265CodecSettings frameRate */
                            frameRate?: (number|null);

                            /** H265CodecSettings frameRateConversionStrategy */
                            frameRateConversionStrategy?: (google.cloud.video.transcoder.v1.VideoStream.FrameRateConversionStrategy|keyof typeof google.cloud.video.transcoder.v1.VideoStream.FrameRateConversionStrategy|null);

                            /** H265CodecSettings bitrateBps */
                            bitrateBps?: (number|null);

                            /** H265CodecSettings pixelFormat */
                            pixelFormat?: (string|null);

                            /** H265CodecSettings rateControlMode */
                            rateControlMode?: (string|null);

                            /** H265CodecSettings crfLevel */
                            crfLevel?: (number|null);

                            /** H265CodecSettings allowOpenGop */
                            allowOpenGop?: (boolean|null);

                            /** H265CodecSettings gopFrameCount */
                            gopFrameCount?: (number|null);

                            /** H265CodecSettings gopDuration */
                            gopDuration?: (google.protobuf.IDuration|null);

                            /** H265CodecSettings enableTwoPass */
                            enableTwoPass?: (boolean|null);

                            /** H265CodecSettings vbvSizeBits */
                            vbvSizeBits?: (number|null);

                            /** H265CodecSettings vbvFullnessBits */
                            vbvFullnessBits?: (number|null);

                            /** H265CodecSettings bPyramid */
                            bPyramid?: (boolean|null);

                            /** H265CodecSettings bFrameCount */
                            bFrameCount?: (number|null);

                            /** H265CodecSettings aqStrength */
                            aqStrength?: (number|null);

                            /** H265CodecSettings profile */
                            profile?: (string|null);

                            /** H265CodecSettings tune */
                            tune?: (string|null);

                            /** H265CodecSettings preset */
                            preset?: (string|null);

                            /** H265CodecSettings sdr */
                            sdr?: (google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatSDR|null);

                            /** H265CodecSettings hlg */
                            hlg?: (google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatHLG|null);

                            /** H265CodecSettings hdr10 */
                            hdr10?: (google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatHDR10|null);
                        }

                        /** Represents a H265CodecSettings. */
                        class H265CodecSettings implements IH265CodecSettings {

                            /**
                             * Constructs a new H265CodecSettings.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.VideoStream.IH265CodecSettings);

                            /** H265CodecSettings widthPixels. */
                            public widthPixels: number;

                            /** H265CodecSettings heightPixels. */
                            public heightPixels: number;

                            /** H265CodecSettings frameRate. */
                            public frameRate: number;

                            /** H265CodecSettings frameRateConversionStrategy. */
                            public frameRateConversionStrategy: (google.cloud.video.transcoder.v1.VideoStream.FrameRateConversionStrategy|keyof typeof google.cloud.video.transcoder.v1.VideoStream.FrameRateConversionStrategy);

                            /** H265CodecSettings bitrateBps. */
                            public bitrateBps: number;

                            /** H265CodecSettings pixelFormat. */
                            public pixelFormat: string;

                            /** H265CodecSettings rateControlMode. */
                            public rateControlMode: string;

                            /** H265CodecSettings crfLevel. */
                            public crfLevel: number;

                            /** H265CodecSettings allowOpenGop. */
                            public allowOpenGop: boolean;

                            /** H265CodecSettings gopFrameCount. */
                            public gopFrameCount?: (number|null);

                            /** H265CodecSettings gopDuration. */
                            public gopDuration?: (google.protobuf.IDuration|null);

                            /** H265CodecSettings enableTwoPass. */
                            public enableTwoPass: boolean;

                            /** H265CodecSettings vbvSizeBits. */
                            public vbvSizeBits: number;

                            /** H265CodecSettings vbvFullnessBits. */
                            public vbvFullnessBits: number;

                            /** H265CodecSettings bPyramid. */
                            public bPyramid: boolean;

                            /** H265CodecSettings bFrameCount. */
                            public bFrameCount: number;

                            /** H265CodecSettings aqStrength. */
                            public aqStrength: number;

                            /** H265CodecSettings profile. */
                            public profile: string;

                            /** H265CodecSettings tune. */
                            public tune: string;

                            /** H265CodecSettings preset. */
                            public preset: string;

                            /** H265CodecSettings sdr. */
                            public sdr?: (google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatSDR|null);

                            /** H265CodecSettings hlg. */
                            public hlg?: (google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatHLG|null);

                            /** H265CodecSettings hdr10. */
                            public hdr10?: (google.cloud.video.transcoder.v1.VideoStream.IH265ColorFormatHDR10|null);

                            /** H265CodecSettings gopMode. */
                            public gopMode?: ("gopFrameCount"|"gopDuration");

                            /** H265CodecSettings colorFormat. */
                            public colorFormat?: ("sdr"|"hlg"|"hdr10");

                            /**
                             * Creates a new H265CodecSettings instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns H265CodecSettings instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.VideoStream.IH265CodecSettings): google.cloud.video.transcoder.v1.VideoStream.H265CodecSettings;

                            /**
                             * Encodes the specified H265CodecSettings message. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H265CodecSettings.verify|verify} messages.
                             * @param message H265CodecSettings message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.VideoStream.IH265CodecSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified H265CodecSettings message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.H265CodecSettings.verify|verify} messages.
                             * @param message H265CodecSettings message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.VideoStream.IH265CodecSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a H265CodecSettings message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns H265CodecSettings
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.VideoStream.H265CodecSettings;

                            /**
                             * Decodes a H265CodecSettings message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns H265CodecSettings
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.VideoStream.H265CodecSettings;

                            /**
                             * Verifies a H265CodecSettings message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a H265CodecSettings message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns H265CodecSettings
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.VideoStream.H265CodecSettings;

                            /**
                             * Creates a plain object from a H265CodecSettings message. Also converts values to other types if specified.
                             * @param message H265CodecSettings
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.VideoStream.H265CodecSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this H265CodecSettings to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for H265CodecSettings
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Vp9ColorFormatSDR. */
                        interface IVp9ColorFormatSDR {
                        }

                        /** Represents a Vp9ColorFormatSDR. */
                        class Vp9ColorFormatSDR implements IVp9ColorFormatSDR {

                            /**
                             * Constructs a new Vp9ColorFormatSDR.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.VideoStream.IVp9ColorFormatSDR);

                            /**
                             * Creates a new Vp9ColorFormatSDR instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Vp9ColorFormatSDR instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.VideoStream.IVp9ColorFormatSDR): google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatSDR;

                            /**
                             * Encodes the specified Vp9ColorFormatSDR message. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatSDR.verify|verify} messages.
                             * @param message Vp9ColorFormatSDR message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.VideoStream.IVp9ColorFormatSDR, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Vp9ColorFormatSDR message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatSDR.verify|verify} messages.
                             * @param message Vp9ColorFormatSDR message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.VideoStream.IVp9ColorFormatSDR, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Vp9ColorFormatSDR message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Vp9ColorFormatSDR
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatSDR;

                            /**
                             * Decodes a Vp9ColorFormatSDR message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Vp9ColorFormatSDR
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatSDR;

                            /**
                             * Verifies a Vp9ColorFormatSDR message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Vp9ColorFormatSDR message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Vp9ColorFormatSDR
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatSDR;

                            /**
                             * Creates a plain object from a Vp9ColorFormatSDR message. Also converts values to other types if specified.
                             * @param message Vp9ColorFormatSDR
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatSDR, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Vp9ColorFormatSDR to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Vp9ColorFormatSDR
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Vp9ColorFormatHLG. */
                        interface IVp9ColorFormatHLG {
                        }

                        /** Represents a Vp9ColorFormatHLG. */
                        class Vp9ColorFormatHLG implements IVp9ColorFormatHLG {

                            /**
                             * Constructs a new Vp9ColorFormatHLG.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.VideoStream.IVp9ColorFormatHLG);

                            /**
                             * Creates a new Vp9ColorFormatHLG instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Vp9ColorFormatHLG instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.VideoStream.IVp9ColorFormatHLG): google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatHLG;

                            /**
                             * Encodes the specified Vp9ColorFormatHLG message. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatHLG.verify|verify} messages.
                             * @param message Vp9ColorFormatHLG message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.VideoStream.IVp9ColorFormatHLG, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Vp9ColorFormatHLG message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatHLG.verify|verify} messages.
                             * @param message Vp9ColorFormatHLG message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.VideoStream.IVp9ColorFormatHLG, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Vp9ColorFormatHLG message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Vp9ColorFormatHLG
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatHLG;

                            /**
                             * Decodes a Vp9ColorFormatHLG message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Vp9ColorFormatHLG
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatHLG;

                            /**
                             * Verifies a Vp9ColorFormatHLG message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Vp9ColorFormatHLG message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Vp9ColorFormatHLG
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatHLG;

                            /**
                             * Creates a plain object from a Vp9ColorFormatHLG message. Also converts values to other types if specified.
                             * @param message Vp9ColorFormatHLG
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.VideoStream.Vp9ColorFormatHLG, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Vp9ColorFormatHLG to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Vp9ColorFormatHLG
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Vp9CodecSettings. */
                        interface IVp9CodecSettings {

                            /** Vp9CodecSettings widthPixels */
                            widthPixels?: (number|null);

                            /** Vp9CodecSettings heightPixels */
                            heightPixels?: (number|null);

                            /** Vp9CodecSettings frameRate */
                            frameRate?: (number|null);

                            /** Vp9CodecSettings frameRateConversionStrategy */
                            frameRateConversionStrategy?: (google.cloud.video.transcoder.v1.VideoStream.FrameRateConversionStrategy|keyof typeof google.cloud.video.transcoder.v1.VideoStream.FrameRateConversionStrategy|null);

                            /** Vp9CodecSettings bitrateBps */
                            bitrateBps?: (number|null);

                            /** Vp9CodecSettings pixelFormat */
                            pixelFormat?: (string|null);

                            /** Vp9CodecSettings rateControlMode */
                            rateControlMode?: (string|null);

                            /** Vp9CodecSettings crfLevel */
                            crfLevel?: (number|null);

                            /** Vp9CodecSettings gopFrameCount */
                            gopFrameCount?: (number|null);

                            /** Vp9CodecSettings gopDuration */
                            gopDuration?: (google.protobuf.IDuration|null);

                            /** Vp9CodecSettings profile */
                            profile?: (string|null);

                            /** Vp9CodecSettings sdr */
                            sdr?: (google.cloud.video.transcoder.v1.VideoStream.IVp9ColorFormatSDR|null);

                            /** Vp9CodecSettings hlg */
                            hlg?: (google.cloud.video.transcoder.v1.VideoStream.IVp9ColorFormatHLG|null);
                        }

                        /** Represents a Vp9CodecSettings. */
                        class Vp9CodecSettings implements IVp9CodecSettings {

                            /**
                             * Constructs a new Vp9CodecSettings.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.VideoStream.IVp9CodecSettings);

                            /** Vp9CodecSettings widthPixels. */
                            public widthPixels: number;

                            /** Vp9CodecSettings heightPixels. */
                            public heightPixels: number;

                            /** Vp9CodecSettings frameRate. */
                            public frameRate: number;

                            /** Vp9CodecSettings frameRateConversionStrategy. */
                            public frameRateConversionStrategy: (google.cloud.video.transcoder.v1.VideoStream.FrameRateConversionStrategy|keyof typeof google.cloud.video.transcoder.v1.VideoStream.FrameRateConversionStrategy);

                            /** Vp9CodecSettings bitrateBps. */
                            public bitrateBps: number;

                            /** Vp9CodecSettings pixelFormat. */
                            public pixelFormat: string;

                            /** Vp9CodecSettings rateControlMode. */
                            public rateControlMode: string;

                            /** Vp9CodecSettings crfLevel. */
                            public crfLevel: number;

                            /** Vp9CodecSettings gopFrameCount. */
                            public gopFrameCount?: (number|null);

                            /** Vp9CodecSettings gopDuration. */
                            public gopDuration?: (google.protobuf.IDuration|null);

                            /** Vp9CodecSettings profile. */
                            public profile: string;

                            /** Vp9CodecSettings sdr. */
                            public sdr?: (google.cloud.video.transcoder.v1.VideoStream.IVp9ColorFormatSDR|null);

                            /** Vp9CodecSettings hlg. */
                            public hlg?: (google.cloud.video.transcoder.v1.VideoStream.IVp9ColorFormatHLG|null);

                            /** Vp9CodecSettings gopMode. */
                            public gopMode?: ("gopFrameCount"|"gopDuration");

                            /** Vp9CodecSettings colorFormat. */
                            public colorFormat?: ("sdr"|"hlg");

                            /**
                             * Creates a new Vp9CodecSettings instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Vp9CodecSettings instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.VideoStream.IVp9CodecSettings): google.cloud.video.transcoder.v1.VideoStream.Vp9CodecSettings;

                            /**
                             * Encodes the specified Vp9CodecSettings message. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.Vp9CodecSettings.verify|verify} messages.
                             * @param message Vp9CodecSettings message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.VideoStream.IVp9CodecSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Vp9CodecSettings message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.VideoStream.Vp9CodecSettings.verify|verify} messages.
                             * @param message Vp9CodecSettings message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.VideoStream.IVp9CodecSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Vp9CodecSettings message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Vp9CodecSettings
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.VideoStream.Vp9CodecSettings;

                            /**
                             * Decodes a Vp9CodecSettings message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Vp9CodecSettings
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.VideoStream.Vp9CodecSettings;

                            /**
                             * Verifies a Vp9CodecSettings message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Vp9CodecSettings message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Vp9CodecSettings
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.VideoStream.Vp9CodecSettings;

                            /**
                             * Creates a plain object from a Vp9CodecSettings message. Also converts values to other types if specified.
                             * @param message Vp9CodecSettings
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.VideoStream.Vp9CodecSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Vp9CodecSettings to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Vp9CodecSettings
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of an AudioStream. */
                    interface IAudioStream {

                        /** AudioStream codec */
                        codec?: (string|null);

                        /** AudioStream bitrateBps */
                        bitrateBps?: (number|null);

                        /** AudioStream channelCount */
                        channelCount?: (number|null);

                        /** AudioStream channelLayout */
                        channelLayout?: (string[]|null);

                        /** AudioStream mapping */
                        mapping?: (google.cloud.video.transcoder.v1.AudioStream.IAudioMapping[]|null);

                        /** AudioStream sampleRateHertz */
                        sampleRateHertz?: (number|null);

                        /** AudioStream languageCode */
                        languageCode?: (string|null);

                        /** AudioStream displayName */
                        displayName?: (string|null);
                    }

                    /** Represents an AudioStream. */
                    class AudioStream implements IAudioStream {

                        /**
                         * Constructs a new AudioStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IAudioStream);

                        /** AudioStream codec. */
                        public codec: string;

                        /** AudioStream bitrateBps. */
                        public bitrateBps: number;

                        /** AudioStream channelCount. */
                        public channelCount: number;

                        /** AudioStream channelLayout. */
                        public channelLayout: string[];

                        /** AudioStream mapping. */
                        public mapping: google.cloud.video.transcoder.v1.AudioStream.IAudioMapping[];

                        /** AudioStream sampleRateHertz. */
                        public sampleRateHertz: number;

                        /** AudioStream languageCode. */
                        public languageCode: string;

                        /** AudioStream displayName. */
                        public displayName: string;

                        /**
                         * Creates a new AudioStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AudioStream instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IAudioStream): google.cloud.video.transcoder.v1.AudioStream;

                        /**
                         * Encodes the specified AudioStream message. Does not implicitly {@link google.cloud.video.transcoder.v1.AudioStream.verify|verify} messages.
                         * @param message AudioStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IAudioStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AudioStream message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.AudioStream.verify|verify} messages.
                         * @param message AudioStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IAudioStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AudioStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AudioStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.AudioStream;

                        /**
                         * Decodes an AudioStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AudioStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.AudioStream;

                        /**
                         * Verifies an AudioStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AudioStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AudioStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.AudioStream;

                        /**
                         * Creates a plain object from an AudioStream message. Also converts values to other types if specified.
                         * @param message AudioStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.AudioStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AudioStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for AudioStream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace AudioStream {

                        /** Properties of an AudioMapping. */
                        interface IAudioMapping {

                            /** AudioMapping atomKey */
                            atomKey?: (string|null);

                            /** AudioMapping inputKey */
                            inputKey?: (string|null);

                            /** AudioMapping inputTrack */
                            inputTrack?: (number|null);

                            /** AudioMapping inputChannel */
                            inputChannel?: (number|null);

                            /** AudioMapping outputChannel */
                            outputChannel?: (number|null);

                            /** AudioMapping gainDb */
                            gainDb?: (number|null);
                        }

                        /** Represents an AudioMapping. */
                        class AudioMapping implements IAudioMapping {

                            /**
                             * Constructs a new AudioMapping.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.AudioStream.IAudioMapping);

                            /** AudioMapping atomKey. */
                            public atomKey: string;

                            /** AudioMapping inputKey. */
                            public inputKey: string;

                            /** AudioMapping inputTrack. */
                            public inputTrack: number;

                            /** AudioMapping inputChannel. */
                            public inputChannel: number;

                            /** AudioMapping outputChannel. */
                            public outputChannel: number;

                            /** AudioMapping gainDb. */
                            public gainDb: number;

                            /**
                             * Creates a new AudioMapping instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns AudioMapping instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.AudioStream.IAudioMapping): google.cloud.video.transcoder.v1.AudioStream.AudioMapping;

                            /**
                             * Encodes the specified AudioMapping message. Does not implicitly {@link google.cloud.video.transcoder.v1.AudioStream.AudioMapping.verify|verify} messages.
                             * @param message AudioMapping message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.AudioStream.IAudioMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified AudioMapping message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.AudioStream.AudioMapping.verify|verify} messages.
                             * @param message AudioMapping message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.AudioStream.IAudioMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an AudioMapping message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns AudioMapping
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.AudioStream.AudioMapping;

                            /**
                             * Decodes an AudioMapping message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns AudioMapping
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.AudioStream.AudioMapping;

                            /**
                             * Verifies an AudioMapping message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an AudioMapping message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns AudioMapping
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.AudioStream.AudioMapping;

                            /**
                             * Creates a plain object from an AudioMapping message. Also converts values to other types if specified.
                             * @param message AudioMapping
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.AudioStream.AudioMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this AudioMapping to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for AudioMapping
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a TextStream. */
                    interface ITextStream {

                        /** TextStream codec */
                        codec?: (string|null);

                        /** TextStream languageCode */
                        languageCode?: (string|null);

                        /** TextStream mapping */
                        mapping?: (google.cloud.video.transcoder.v1.TextStream.ITextMapping[]|null);

                        /** TextStream displayName */
                        displayName?: (string|null);
                    }

                    /** Represents a TextStream. */
                    class TextStream implements ITextStream {

                        /**
                         * Constructs a new TextStream.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.ITextStream);

                        /** TextStream codec. */
                        public codec: string;

                        /** TextStream languageCode. */
                        public languageCode: string;

                        /** TextStream mapping. */
                        public mapping: google.cloud.video.transcoder.v1.TextStream.ITextMapping[];

                        /** TextStream displayName. */
                        public displayName: string;

                        /**
                         * Creates a new TextStream instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns TextStream instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.ITextStream): google.cloud.video.transcoder.v1.TextStream;

                        /**
                         * Encodes the specified TextStream message. Does not implicitly {@link google.cloud.video.transcoder.v1.TextStream.verify|verify} messages.
                         * @param message TextStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.ITextStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified TextStream message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.TextStream.verify|verify} messages.
                         * @param message TextStream message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.ITextStream, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a TextStream message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns TextStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.TextStream;

                        /**
                         * Decodes a TextStream message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns TextStream
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.TextStream;

                        /**
                         * Verifies a TextStream message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a TextStream message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns TextStream
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.TextStream;

                        /**
                         * Creates a plain object from a TextStream message. Also converts values to other types if specified.
                         * @param message TextStream
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.TextStream, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this TextStream to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for TextStream
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace TextStream {

                        /** Properties of a TextMapping. */
                        interface ITextMapping {

                            /** TextMapping atomKey */
                            atomKey?: (string|null);

                            /** TextMapping inputKey */
                            inputKey?: (string|null);

                            /** TextMapping inputTrack */
                            inputTrack?: (number|null);
                        }

                        /** Represents a TextMapping. */
                        class TextMapping implements ITextMapping {

                            /**
                             * Constructs a new TextMapping.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.TextStream.ITextMapping);

                            /** TextMapping atomKey. */
                            public atomKey: string;

                            /** TextMapping inputKey. */
                            public inputKey: string;

                            /** TextMapping inputTrack. */
                            public inputTrack: number;

                            /**
                             * Creates a new TextMapping instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns TextMapping instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.TextStream.ITextMapping): google.cloud.video.transcoder.v1.TextStream.TextMapping;

                            /**
                             * Encodes the specified TextMapping message. Does not implicitly {@link google.cloud.video.transcoder.v1.TextStream.TextMapping.verify|verify} messages.
                             * @param message TextMapping message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.TextStream.ITextMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified TextMapping message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.TextStream.TextMapping.verify|verify} messages.
                             * @param message TextMapping message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.TextStream.ITextMapping, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a TextMapping message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns TextMapping
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.TextStream.TextMapping;

                            /**
                             * Decodes a TextMapping message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns TextMapping
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.TextStream.TextMapping;

                            /**
                             * Verifies a TextMapping message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a TextMapping message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns TextMapping
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.TextStream.TextMapping;

                            /**
                             * Creates a plain object from a TextMapping message. Also converts values to other types if specified.
                             * @param message TextMapping
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.TextStream.TextMapping, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this TextMapping to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for TextMapping
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Properties of a SegmentSettings. */
                    interface ISegmentSettings {

                        /** SegmentSettings segmentDuration */
                        segmentDuration?: (google.protobuf.IDuration|null);

                        /** SegmentSettings individualSegments */
                        individualSegments?: (boolean|null);
                    }

                    /** Represents a SegmentSettings. */
                    class SegmentSettings implements ISegmentSettings {

                        /**
                         * Constructs a new SegmentSettings.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.ISegmentSettings);

                        /** SegmentSettings segmentDuration. */
                        public segmentDuration?: (google.protobuf.IDuration|null);

                        /** SegmentSettings individualSegments. */
                        public individualSegments: boolean;

                        /**
                         * Creates a new SegmentSettings instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SegmentSettings instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.ISegmentSettings): google.cloud.video.transcoder.v1.SegmentSettings;

                        /**
                         * Encodes the specified SegmentSettings message. Does not implicitly {@link google.cloud.video.transcoder.v1.SegmentSettings.verify|verify} messages.
                         * @param message SegmentSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.ISegmentSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SegmentSettings message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.SegmentSettings.verify|verify} messages.
                         * @param message SegmentSettings message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.ISegmentSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SegmentSettings message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SegmentSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.SegmentSettings;

                        /**
                         * Decodes a SegmentSettings message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SegmentSettings
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.SegmentSettings;

                        /**
                         * Verifies a SegmentSettings message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SegmentSettings message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SegmentSettings
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.SegmentSettings;

                        /**
                         * Creates a plain object from a SegmentSettings message. Also converts values to other types if specified.
                         * @param message SegmentSettings
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.SegmentSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SegmentSettings to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for SegmentSettings
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of an Encryption. */
                    interface IEncryption {

                        /** Encryption id */
                        id?: (string|null);

                        /** Encryption aes_128 */
                        aes_128?: (google.cloud.video.transcoder.v1.Encryption.IAes128Encryption|null);

                        /** Encryption sampleAes */
                        sampleAes?: (google.cloud.video.transcoder.v1.Encryption.ISampleAesEncryption|null);

                        /** Encryption mpegCenc */
                        mpegCenc?: (google.cloud.video.transcoder.v1.Encryption.IMpegCommonEncryption|null);

                        /** Encryption secretManagerKeySource */
                        secretManagerKeySource?: (google.cloud.video.transcoder.v1.Encryption.ISecretManagerSource|null);

                        /** Encryption drmSystems */
                        drmSystems?: (google.cloud.video.transcoder.v1.Encryption.IDrmSystems|null);
                    }

                    /** Represents an Encryption. */
                    class Encryption implements IEncryption {

                        /**
                         * Constructs a new Encryption.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IEncryption);

                        /** Encryption id. */
                        public id: string;

                        /** Encryption aes_128. */
                        public aes_128?: (google.cloud.video.transcoder.v1.Encryption.IAes128Encryption|null);

                        /** Encryption sampleAes. */
                        public sampleAes?: (google.cloud.video.transcoder.v1.Encryption.ISampleAesEncryption|null);

                        /** Encryption mpegCenc. */
                        public mpegCenc?: (google.cloud.video.transcoder.v1.Encryption.IMpegCommonEncryption|null);

                        /** Encryption secretManagerKeySource. */
                        public secretManagerKeySource?: (google.cloud.video.transcoder.v1.Encryption.ISecretManagerSource|null);

                        /** Encryption drmSystems. */
                        public drmSystems?: (google.cloud.video.transcoder.v1.Encryption.IDrmSystems|null);

                        /** Encryption encryptionMode. */
                        public encryptionMode?: ("aes_128"|"sampleAes"|"mpegCenc");

                        /** Encryption secretSource. */
                        public secretSource?: "secretManagerKeySource";

                        /**
                         * Creates a new Encryption instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns Encryption instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IEncryption): google.cloud.video.transcoder.v1.Encryption;

                        /**
                         * Encodes the specified Encryption message. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.verify|verify} messages.
                         * @param message Encryption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified Encryption message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.verify|verify} messages.
                         * @param message Encryption message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an Encryption message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns Encryption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Encryption;

                        /**
                         * Decodes an Encryption message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns Encryption
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Encryption;

                        /**
                         * Verifies an Encryption message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an Encryption message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns Encryption
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Encryption;

                        /**
                         * Creates a plain object from an Encryption message. Also converts values to other types if specified.
                         * @param message Encryption
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.Encryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this Encryption to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for Encryption
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    namespace Encryption {

                        /** Properties of an Aes128Encryption. */
                        interface IAes128Encryption {
                        }

                        /** Represents an Aes128Encryption. */
                        class Aes128Encryption implements IAes128Encryption {

                            /**
                             * Constructs a new Aes128Encryption.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Encryption.IAes128Encryption);

                            /**
                             * Creates a new Aes128Encryption instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Aes128Encryption instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Encryption.IAes128Encryption): google.cloud.video.transcoder.v1.Encryption.Aes128Encryption;

                            /**
                             * Encodes the specified Aes128Encryption message. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.Aes128Encryption.verify|verify} messages.
                             * @param message Aes128Encryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Encryption.IAes128Encryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Aes128Encryption message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.Aes128Encryption.verify|verify} messages.
                             * @param message Aes128Encryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Encryption.IAes128Encryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes an Aes128Encryption message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Aes128Encryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Encryption.Aes128Encryption;

                            /**
                             * Decodes an Aes128Encryption message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Aes128Encryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Encryption.Aes128Encryption;

                            /**
                             * Verifies an Aes128Encryption message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates an Aes128Encryption message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Aes128Encryption
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Encryption.Aes128Encryption;

                            /**
                             * Creates a plain object from an Aes128Encryption message. Also converts values to other types if specified.
                             * @param message Aes128Encryption
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Encryption.Aes128Encryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Aes128Encryption to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Aes128Encryption
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a SampleAesEncryption. */
                        interface ISampleAesEncryption {
                        }

                        /** Represents a SampleAesEncryption. */
                        class SampleAesEncryption implements ISampleAesEncryption {

                            /**
                             * Constructs a new SampleAesEncryption.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Encryption.ISampleAesEncryption);

                            /**
                             * Creates a new SampleAesEncryption instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SampleAesEncryption instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Encryption.ISampleAesEncryption): google.cloud.video.transcoder.v1.Encryption.SampleAesEncryption;

                            /**
                             * Encodes the specified SampleAesEncryption message. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.SampleAesEncryption.verify|verify} messages.
                             * @param message SampleAesEncryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Encryption.ISampleAesEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SampleAesEncryption message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.SampleAesEncryption.verify|verify} messages.
                             * @param message SampleAesEncryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Encryption.ISampleAesEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SampleAesEncryption message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SampleAesEncryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Encryption.SampleAesEncryption;

                            /**
                             * Decodes a SampleAesEncryption message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SampleAesEncryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Encryption.SampleAesEncryption;

                            /**
                             * Verifies a SampleAesEncryption message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SampleAesEncryption message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SampleAesEncryption
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Encryption.SampleAesEncryption;

                            /**
                             * Creates a plain object from a SampleAesEncryption message. Also converts values to other types if specified.
                             * @param message SampleAesEncryption
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Encryption.SampleAesEncryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SampleAesEncryption to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SampleAesEncryption
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a MpegCommonEncryption. */
                        interface IMpegCommonEncryption {

                            /** MpegCommonEncryption scheme */
                            scheme?: (string|null);
                        }

                        /** Represents a MpegCommonEncryption. */
                        class MpegCommonEncryption implements IMpegCommonEncryption {

                            /**
                             * Constructs a new MpegCommonEncryption.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Encryption.IMpegCommonEncryption);

                            /** MpegCommonEncryption scheme. */
                            public scheme: string;

                            /**
                             * Creates a new MpegCommonEncryption instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns MpegCommonEncryption instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Encryption.IMpegCommonEncryption): google.cloud.video.transcoder.v1.Encryption.MpegCommonEncryption;

                            /**
                             * Encodes the specified MpegCommonEncryption message. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.MpegCommonEncryption.verify|verify} messages.
                             * @param message MpegCommonEncryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Encryption.IMpegCommonEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified MpegCommonEncryption message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.MpegCommonEncryption.verify|verify} messages.
                             * @param message MpegCommonEncryption message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Encryption.IMpegCommonEncryption, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a MpegCommonEncryption message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns MpegCommonEncryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Encryption.MpegCommonEncryption;

                            /**
                             * Decodes a MpegCommonEncryption message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns MpegCommonEncryption
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Encryption.MpegCommonEncryption;

                            /**
                             * Verifies a MpegCommonEncryption message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a MpegCommonEncryption message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns MpegCommonEncryption
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Encryption.MpegCommonEncryption;

                            /**
                             * Creates a plain object from a MpegCommonEncryption message. Also converts values to other types if specified.
                             * @param message MpegCommonEncryption
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Encryption.MpegCommonEncryption, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this MpegCommonEncryption to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for MpegCommonEncryption
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a SecretManagerSource. */
                        interface ISecretManagerSource {

                            /** SecretManagerSource secretVersion */
                            secretVersion?: (string|null);
                        }

                        /** Represents a SecretManagerSource. */
                        class SecretManagerSource implements ISecretManagerSource {

                            /**
                             * Constructs a new SecretManagerSource.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Encryption.ISecretManagerSource);

                            /** SecretManagerSource secretVersion. */
                            public secretVersion: string;

                            /**
                             * Creates a new SecretManagerSource instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns SecretManagerSource instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Encryption.ISecretManagerSource): google.cloud.video.transcoder.v1.Encryption.SecretManagerSource;

                            /**
                             * Encodes the specified SecretManagerSource message. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.SecretManagerSource.verify|verify} messages.
                             * @param message SecretManagerSource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Encryption.ISecretManagerSource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified SecretManagerSource message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.SecretManagerSource.verify|verify} messages.
                             * @param message SecretManagerSource message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Encryption.ISecretManagerSource, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a SecretManagerSource message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns SecretManagerSource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Encryption.SecretManagerSource;

                            /**
                             * Decodes a SecretManagerSource message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns SecretManagerSource
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Encryption.SecretManagerSource;

                            /**
                             * Verifies a SecretManagerSource message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a SecretManagerSource message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns SecretManagerSource
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Encryption.SecretManagerSource;

                            /**
                             * Creates a plain object from a SecretManagerSource message. Also converts values to other types if specified.
                             * @param message SecretManagerSource
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Encryption.SecretManagerSource, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this SecretManagerSource to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for SecretManagerSource
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Widevine. */
                        interface IWidevine {
                        }

                        /** Represents a Widevine. */
                        class Widevine implements IWidevine {

                            /**
                             * Constructs a new Widevine.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Encryption.IWidevine);

                            /**
                             * Creates a new Widevine instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Widevine instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Encryption.IWidevine): google.cloud.video.transcoder.v1.Encryption.Widevine;

                            /**
                             * Encodes the specified Widevine message. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.Widevine.verify|verify} messages.
                             * @param message Widevine message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Encryption.IWidevine, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Widevine message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.Widevine.verify|verify} messages.
                             * @param message Widevine message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Encryption.IWidevine, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Widevine message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Widevine
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Encryption.Widevine;

                            /**
                             * Decodes a Widevine message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Widevine
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Encryption.Widevine;

                            /**
                             * Verifies a Widevine message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Widevine message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Widevine
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Encryption.Widevine;

                            /**
                             * Creates a plain object from a Widevine message. Also converts values to other types if specified.
                             * @param message Widevine
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Encryption.Widevine, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Widevine to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Widevine
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Fairplay. */
                        interface IFairplay {
                        }

                        /** Represents a Fairplay. */
                        class Fairplay implements IFairplay {

                            /**
                             * Constructs a new Fairplay.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Encryption.IFairplay);

                            /**
                             * Creates a new Fairplay instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Fairplay instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Encryption.IFairplay): google.cloud.video.transcoder.v1.Encryption.Fairplay;

                            /**
                             * Encodes the specified Fairplay message. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.Fairplay.verify|verify} messages.
                             * @param message Fairplay message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Encryption.IFairplay, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Fairplay message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.Fairplay.verify|verify} messages.
                             * @param message Fairplay message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Encryption.IFairplay, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Fairplay message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Fairplay
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Encryption.Fairplay;

                            /**
                             * Decodes a Fairplay message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Fairplay
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Encryption.Fairplay;

                            /**
                             * Verifies a Fairplay message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Fairplay message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Fairplay
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Encryption.Fairplay;

                            /**
                             * Creates a plain object from a Fairplay message. Also converts values to other types if specified.
                             * @param message Fairplay
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Encryption.Fairplay, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Fairplay to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Fairplay
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Playready. */
                        interface IPlayready {
                        }

                        /** Represents a Playready. */
                        class Playready implements IPlayready {

                            /**
                             * Constructs a new Playready.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Encryption.IPlayready);

                            /**
                             * Creates a new Playready instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Playready instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Encryption.IPlayready): google.cloud.video.transcoder.v1.Encryption.Playready;

                            /**
                             * Encodes the specified Playready message. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.Playready.verify|verify} messages.
                             * @param message Playready message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Encryption.IPlayready, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Playready message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.Playready.verify|verify} messages.
                             * @param message Playready message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Encryption.IPlayready, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Playready message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Playready
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Encryption.Playready;

                            /**
                             * Decodes a Playready message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Playready
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Encryption.Playready;

                            /**
                             * Verifies a Playready message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Playready message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Playready
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Encryption.Playready;

                            /**
                             * Creates a plain object from a Playready message. Also converts values to other types if specified.
                             * @param message Playready
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Encryption.Playready, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Playready to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Playready
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a Clearkey. */
                        interface IClearkey {
                        }

                        /** Represents a Clearkey. */
                        class Clearkey implements IClearkey {

                            /**
                             * Constructs a new Clearkey.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Encryption.IClearkey);

                            /**
                             * Creates a new Clearkey instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns Clearkey instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Encryption.IClearkey): google.cloud.video.transcoder.v1.Encryption.Clearkey;

                            /**
                             * Encodes the specified Clearkey message. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.Clearkey.verify|verify} messages.
                             * @param message Clearkey message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Encryption.IClearkey, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified Clearkey message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.Clearkey.verify|verify} messages.
                             * @param message Clearkey message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Encryption.IClearkey, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a Clearkey message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns Clearkey
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Encryption.Clearkey;

                            /**
                             * Decodes a Clearkey message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns Clearkey
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Encryption.Clearkey;

                            /**
                             * Verifies a Clearkey message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a Clearkey message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns Clearkey
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Encryption.Clearkey;

                            /**
                             * Creates a plain object from a Clearkey message. Also converts values to other types if specified.
                             * @param message Clearkey
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Encryption.Clearkey, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this Clearkey to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for Clearkey
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }

                        /** Properties of a DrmSystems. */
                        interface IDrmSystems {

                            /** DrmSystems widevine */
                            widevine?: (google.cloud.video.transcoder.v1.Encryption.IWidevine|null);

                            /** DrmSystems fairplay */
                            fairplay?: (google.cloud.video.transcoder.v1.Encryption.IFairplay|null);

                            /** DrmSystems playready */
                            playready?: (google.cloud.video.transcoder.v1.Encryption.IPlayready|null);

                            /** DrmSystems clearkey */
                            clearkey?: (google.cloud.video.transcoder.v1.Encryption.IClearkey|null);
                        }

                        /** Represents a DrmSystems. */
                        class DrmSystems implements IDrmSystems {

                            /**
                             * Constructs a new DrmSystems.
                             * @param [properties] Properties to set
                             */
                            constructor(properties?: google.cloud.video.transcoder.v1.Encryption.IDrmSystems);

                            /** DrmSystems widevine. */
                            public widevine?: (google.cloud.video.transcoder.v1.Encryption.IWidevine|null);

                            /** DrmSystems fairplay. */
                            public fairplay?: (google.cloud.video.transcoder.v1.Encryption.IFairplay|null);

                            /** DrmSystems playready. */
                            public playready?: (google.cloud.video.transcoder.v1.Encryption.IPlayready|null);

                            /** DrmSystems clearkey. */
                            public clearkey?: (google.cloud.video.transcoder.v1.Encryption.IClearkey|null);

                            /**
                             * Creates a new DrmSystems instance using the specified properties.
                             * @param [properties] Properties to set
                             * @returns DrmSystems instance
                             */
                            public static create(properties?: google.cloud.video.transcoder.v1.Encryption.IDrmSystems): google.cloud.video.transcoder.v1.Encryption.DrmSystems;

                            /**
                             * Encodes the specified DrmSystems message. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.DrmSystems.verify|verify} messages.
                             * @param message DrmSystems message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encode(message: google.cloud.video.transcoder.v1.Encryption.IDrmSystems, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Encodes the specified DrmSystems message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.Encryption.DrmSystems.verify|verify} messages.
                             * @param message DrmSystems message or plain object to encode
                             * @param [writer] Writer to encode to
                             * @returns Writer
                             */
                            public static encodeDelimited(message: google.cloud.video.transcoder.v1.Encryption.IDrmSystems, writer?: $protobuf.Writer): $protobuf.Writer;

                            /**
                             * Decodes a DrmSystems message from the specified reader or buffer.
                             * @param reader Reader or buffer to decode from
                             * @param [length] Message length if known beforehand
                             * @returns DrmSystems
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.Encryption.DrmSystems;

                            /**
                             * Decodes a DrmSystems message from the specified reader or buffer, length delimited.
                             * @param reader Reader or buffer to decode from
                             * @returns DrmSystems
                             * @throws {Error} If the payload is not a reader or valid buffer
                             * @throws {$protobuf.util.ProtocolError} If required fields are missing
                             */
                            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.Encryption.DrmSystems;

                            /**
                             * Verifies a DrmSystems message.
                             * @param message Plain object to verify
                             * @returns `null` if valid, otherwise the reason why it is not
                             */
                            public static verify(message: { [k: string]: any }): (string|null);

                            /**
                             * Creates a DrmSystems message from a plain object. Also converts values to their respective internal types.
                             * @param object Plain object
                             * @returns DrmSystems
                             */
                            public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.Encryption.DrmSystems;

                            /**
                             * Creates a plain object from a DrmSystems message. Also converts values to other types if specified.
                             * @param message DrmSystems
                             * @param [options] Conversion options
                             * @returns Plain object
                             */
                            public static toObject(message: google.cloud.video.transcoder.v1.Encryption.DrmSystems, options?: $protobuf.IConversionOptions): { [k: string]: any };

                            /**
                             * Converts this DrmSystems to JSON.
                             * @returns JSON object
                             */
                            public toJSON(): { [k: string]: any };

                            /**
                             * Gets the default type url for DrmSystems
                             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                             * @returns The default type url
                             */
                            public static getTypeUrl(typeUrlPrefix?: string): string;
                        }
                    }

                    /** Represents a TranscoderService */
                    class TranscoderService extends $protobuf.rpc.Service {

                        /**
                         * Constructs a new TranscoderService service.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         */
                        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                        /**
                         * Creates new TranscoderService service using the specified rpc implementation.
                         * @param rpcImpl RPC implementation
                         * @param [requestDelimited=false] Whether requests are length-delimited
                         * @param [responseDelimited=false] Whether responses are length-delimited
                         * @returns RPC service. Useful where requests and/or responses are streamed.
                         */
                        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TranscoderService;

                        /**
                         * Calls CreateJob.
                         * @param request CreateJobRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Job
                         */
                        public createJob(request: google.cloud.video.transcoder.v1.ICreateJobRequest, callback: google.cloud.video.transcoder.v1.TranscoderService.CreateJobCallback): void;

                        /**
                         * Calls CreateJob.
                         * @param request CreateJobRequest message or plain object
                         * @returns Promise
                         */
                        public createJob(request: google.cloud.video.transcoder.v1.ICreateJobRequest): Promise<google.cloud.video.transcoder.v1.Job>;

                        /**
                         * Calls ListJobs.
                         * @param request ListJobsRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListJobsResponse
                         */
                        public listJobs(request: google.cloud.video.transcoder.v1.IListJobsRequest, callback: google.cloud.video.transcoder.v1.TranscoderService.ListJobsCallback): void;

                        /**
                         * Calls ListJobs.
                         * @param request ListJobsRequest message or plain object
                         * @returns Promise
                         */
                        public listJobs(request: google.cloud.video.transcoder.v1.IListJobsRequest): Promise<google.cloud.video.transcoder.v1.ListJobsResponse>;

                        /**
                         * Calls GetJob.
                         * @param request GetJobRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Job
                         */
                        public getJob(request: google.cloud.video.transcoder.v1.IGetJobRequest, callback: google.cloud.video.transcoder.v1.TranscoderService.GetJobCallback): void;

                        /**
                         * Calls GetJob.
                         * @param request GetJobRequest message or plain object
                         * @returns Promise
                         */
                        public getJob(request: google.cloud.video.transcoder.v1.IGetJobRequest): Promise<google.cloud.video.transcoder.v1.Job>;

                        /**
                         * Calls DeleteJob.
                         * @param request DeleteJobRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteJob(request: google.cloud.video.transcoder.v1.IDeleteJobRequest, callback: google.cloud.video.transcoder.v1.TranscoderService.DeleteJobCallback): void;

                        /**
                         * Calls DeleteJob.
                         * @param request DeleteJobRequest message or plain object
                         * @returns Promise
                         */
                        public deleteJob(request: google.cloud.video.transcoder.v1.IDeleteJobRequest): Promise<google.protobuf.Empty>;

                        /**
                         * Calls CreateJobTemplate.
                         * @param request CreateJobTemplateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and JobTemplate
                         */
                        public createJobTemplate(request: google.cloud.video.transcoder.v1.ICreateJobTemplateRequest, callback: google.cloud.video.transcoder.v1.TranscoderService.CreateJobTemplateCallback): void;

                        /**
                         * Calls CreateJobTemplate.
                         * @param request CreateJobTemplateRequest message or plain object
                         * @returns Promise
                         */
                        public createJobTemplate(request: google.cloud.video.transcoder.v1.ICreateJobTemplateRequest): Promise<google.cloud.video.transcoder.v1.JobTemplate>;

                        /**
                         * Calls ListJobTemplates.
                         * @param request ListJobTemplatesRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and ListJobTemplatesResponse
                         */
                        public listJobTemplates(request: google.cloud.video.transcoder.v1.IListJobTemplatesRequest, callback: google.cloud.video.transcoder.v1.TranscoderService.ListJobTemplatesCallback): void;

                        /**
                         * Calls ListJobTemplates.
                         * @param request ListJobTemplatesRequest message or plain object
                         * @returns Promise
                         */
                        public listJobTemplates(request: google.cloud.video.transcoder.v1.IListJobTemplatesRequest): Promise<google.cloud.video.transcoder.v1.ListJobTemplatesResponse>;

                        /**
                         * Calls GetJobTemplate.
                         * @param request GetJobTemplateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and JobTemplate
                         */
                        public getJobTemplate(request: google.cloud.video.transcoder.v1.IGetJobTemplateRequest, callback: google.cloud.video.transcoder.v1.TranscoderService.GetJobTemplateCallback): void;

                        /**
                         * Calls GetJobTemplate.
                         * @param request GetJobTemplateRequest message or plain object
                         * @returns Promise
                         */
                        public getJobTemplate(request: google.cloud.video.transcoder.v1.IGetJobTemplateRequest): Promise<google.cloud.video.transcoder.v1.JobTemplate>;

                        /**
                         * Calls DeleteJobTemplate.
                         * @param request DeleteJobTemplateRequest message or plain object
                         * @param callback Node-style callback called with the error, if any, and Empty
                         */
                        public deleteJobTemplate(request: google.cloud.video.transcoder.v1.IDeleteJobTemplateRequest, callback: google.cloud.video.transcoder.v1.TranscoderService.DeleteJobTemplateCallback): void;

                        /**
                         * Calls DeleteJobTemplate.
                         * @param request DeleteJobTemplateRequest message or plain object
                         * @returns Promise
                         */
                        public deleteJobTemplate(request: google.cloud.video.transcoder.v1.IDeleteJobTemplateRequest): Promise<google.protobuf.Empty>;
                    }

                    namespace TranscoderService {

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1.TranscoderService|createJob}.
                         * @param error Error, if any
                         * @param [response] Job
                         */
                        type CreateJobCallback = (error: (Error|null), response?: google.cloud.video.transcoder.v1.Job) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1.TranscoderService|listJobs}.
                         * @param error Error, if any
                         * @param [response] ListJobsResponse
                         */
                        type ListJobsCallback = (error: (Error|null), response?: google.cloud.video.transcoder.v1.ListJobsResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1.TranscoderService|getJob}.
                         * @param error Error, if any
                         * @param [response] Job
                         */
                        type GetJobCallback = (error: (Error|null), response?: google.cloud.video.transcoder.v1.Job) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1.TranscoderService|deleteJob}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteJobCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1.TranscoderService|createJobTemplate}.
                         * @param error Error, if any
                         * @param [response] JobTemplate
                         */
                        type CreateJobTemplateCallback = (error: (Error|null), response?: google.cloud.video.transcoder.v1.JobTemplate) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1.TranscoderService|listJobTemplates}.
                         * @param error Error, if any
                         * @param [response] ListJobTemplatesResponse
                         */
                        type ListJobTemplatesCallback = (error: (Error|null), response?: google.cloud.video.transcoder.v1.ListJobTemplatesResponse) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1.TranscoderService|getJobTemplate}.
                         * @param error Error, if any
                         * @param [response] JobTemplate
                         */
                        type GetJobTemplateCallback = (error: (Error|null), response?: google.cloud.video.transcoder.v1.JobTemplate) => void;

                        /**
                         * Callback as used by {@link google.cloud.video.transcoder.v1.TranscoderService|deleteJobTemplate}.
                         * @param error Error, if any
                         * @param [response] Empty
                         */
                        type DeleteJobTemplateCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;
                    }

                    /** Properties of a CreateJobRequest. */
                    interface ICreateJobRequest {

                        /** CreateJobRequest parent */
                        parent?: (string|null);

                        /** CreateJobRequest job */
                        job?: (google.cloud.video.transcoder.v1.IJob|null);
                    }

                    /** Represents a CreateJobRequest. */
                    class CreateJobRequest implements ICreateJobRequest {

                        /**
                         * Constructs a new CreateJobRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.ICreateJobRequest);

                        /** CreateJobRequest parent. */
                        public parent: string;

                        /** CreateJobRequest job. */
                        public job?: (google.cloud.video.transcoder.v1.IJob|null);

                        /**
                         * Creates a new CreateJobRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateJobRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.ICreateJobRequest): google.cloud.video.transcoder.v1.CreateJobRequest;

                        /**
                         * Encodes the specified CreateJobRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1.CreateJobRequest.verify|verify} messages.
                         * @param message CreateJobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateJobRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.CreateJobRequest.verify|verify} messages.
                         * @param message CreateJobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.ICreateJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateJobRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.CreateJobRequest;

                        /**
                         * Decodes a CreateJobRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.CreateJobRequest;

                        /**
                         * Verifies a CreateJobRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateJobRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateJobRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.CreateJobRequest;

                        /**
                         * Creates a plain object from a CreateJobRequest message. Also converts values to other types if specified.
                         * @param message CreateJobRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.CreateJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateJobRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateJobRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListJobsRequest. */
                    interface IListJobsRequest {

                        /** ListJobsRequest parent */
                        parent?: (string|null);

                        /** ListJobsRequest pageSize */
                        pageSize?: (number|null);

                        /** ListJobsRequest pageToken */
                        pageToken?: (string|null);

                        /** ListJobsRequest filter */
                        filter?: (string|null);

                        /** ListJobsRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListJobsRequest. */
                    class ListJobsRequest implements IListJobsRequest {

                        /**
                         * Constructs a new ListJobsRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IListJobsRequest);

                        /** ListJobsRequest parent. */
                        public parent: string;

                        /** ListJobsRequest pageSize. */
                        public pageSize: number;

                        /** ListJobsRequest pageToken. */
                        public pageToken: string;

                        /** ListJobsRequest filter. */
                        public filter: string;

                        /** ListJobsRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListJobsRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListJobsRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IListJobsRequest): google.cloud.video.transcoder.v1.ListJobsRequest;

                        /**
                         * Encodes the specified ListJobsRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1.ListJobsRequest.verify|verify} messages.
                         * @param message ListJobsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListJobsRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.ListJobsRequest.verify|verify} messages.
                         * @param message ListJobsRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IListJobsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListJobsRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListJobsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.ListJobsRequest;

                        /**
                         * Decodes a ListJobsRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListJobsRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.ListJobsRequest;

                        /**
                         * Verifies a ListJobsRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListJobsRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListJobsRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.ListJobsRequest;

                        /**
                         * Creates a plain object from a ListJobsRequest message. Also converts values to other types if specified.
                         * @param message ListJobsRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.ListJobsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListJobsRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListJobsRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetJobRequest. */
                    interface IGetJobRequest {

                        /** GetJobRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetJobRequest. */
                    class GetJobRequest implements IGetJobRequest {

                        /**
                         * Constructs a new GetJobRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IGetJobRequest);

                        /** GetJobRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetJobRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetJobRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IGetJobRequest): google.cloud.video.transcoder.v1.GetJobRequest;

                        /**
                         * Encodes the specified GetJobRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1.GetJobRequest.verify|verify} messages.
                         * @param message GetJobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetJobRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.GetJobRequest.verify|verify} messages.
                         * @param message GetJobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IGetJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetJobRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.GetJobRequest;

                        /**
                         * Decodes a GetJobRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.GetJobRequest;

                        /**
                         * Verifies a GetJobRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetJobRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetJobRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.GetJobRequest;

                        /**
                         * Creates a plain object from a GetJobRequest message. Also converts values to other types if specified.
                         * @param message GetJobRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.GetJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetJobRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetJobRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteJobRequest. */
                    interface IDeleteJobRequest {

                        /** DeleteJobRequest name */
                        name?: (string|null);

                        /** DeleteJobRequest allowMissing */
                        allowMissing?: (boolean|null);
                    }

                    /** Represents a DeleteJobRequest. */
                    class DeleteJobRequest implements IDeleteJobRequest {

                        /**
                         * Constructs a new DeleteJobRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IDeleteJobRequest);

                        /** DeleteJobRequest name. */
                        public name: string;

                        /** DeleteJobRequest allowMissing. */
                        public allowMissing: boolean;

                        /**
                         * Creates a new DeleteJobRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteJobRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IDeleteJobRequest): google.cloud.video.transcoder.v1.DeleteJobRequest;

                        /**
                         * Encodes the specified DeleteJobRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1.DeleteJobRequest.verify|verify} messages.
                         * @param message DeleteJobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteJobRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.DeleteJobRequest.verify|verify} messages.
                         * @param message DeleteJobRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IDeleteJobRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteJobRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.DeleteJobRequest;

                        /**
                         * Decodes a DeleteJobRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteJobRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.DeleteJobRequest;

                        /**
                         * Verifies a DeleteJobRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteJobRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteJobRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.DeleteJobRequest;

                        /**
                         * Creates a plain object from a DeleteJobRequest message. Also converts values to other types if specified.
                         * @param message DeleteJobRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.DeleteJobRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteJobRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteJobRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListJobsResponse. */
                    interface IListJobsResponse {

                        /** ListJobsResponse jobs */
                        jobs?: (google.cloud.video.transcoder.v1.IJob[]|null);

                        /** ListJobsResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListJobsResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListJobsResponse. */
                    class ListJobsResponse implements IListJobsResponse {

                        /**
                         * Constructs a new ListJobsResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IListJobsResponse);

                        /** ListJobsResponse jobs. */
                        public jobs: google.cloud.video.transcoder.v1.IJob[];

                        /** ListJobsResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListJobsResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListJobsResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListJobsResponse instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IListJobsResponse): google.cloud.video.transcoder.v1.ListJobsResponse;

                        /**
                         * Encodes the specified ListJobsResponse message. Does not implicitly {@link google.cloud.video.transcoder.v1.ListJobsResponse.verify|verify} messages.
                         * @param message ListJobsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListJobsResponse message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.ListJobsResponse.verify|verify} messages.
                         * @param message ListJobsResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IListJobsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListJobsResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListJobsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.ListJobsResponse;

                        /**
                         * Decodes a ListJobsResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListJobsResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.ListJobsResponse;

                        /**
                         * Verifies a ListJobsResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListJobsResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListJobsResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.ListJobsResponse;

                        /**
                         * Creates a plain object from a ListJobsResponse message. Also converts values to other types if specified.
                         * @param message ListJobsResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.ListJobsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListJobsResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListJobsResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a CreateJobTemplateRequest. */
                    interface ICreateJobTemplateRequest {

                        /** CreateJobTemplateRequest parent */
                        parent?: (string|null);

                        /** CreateJobTemplateRequest jobTemplate */
                        jobTemplate?: (google.cloud.video.transcoder.v1.IJobTemplate|null);

                        /** CreateJobTemplateRequest jobTemplateId */
                        jobTemplateId?: (string|null);
                    }

                    /** Represents a CreateJobTemplateRequest. */
                    class CreateJobTemplateRequest implements ICreateJobTemplateRequest {

                        /**
                         * Constructs a new CreateJobTemplateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.ICreateJobTemplateRequest);

                        /** CreateJobTemplateRequest parent. */
                        public parent: string;

                        /** CreateJobTemplateRequest jobTemplate. */
                        public jobTemplate?: (google.cloud.video.transcoder.v1.IJobTemplate|null);

                        /** CreateJobTemplateRequest jobTemplateId. */
                        public jobTemplateId: string;

                        /**
                         * Creates a new CreateJobTemplateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns CreateJobTemplateRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.ICreateJobTemplateRequest): google.cloud.video.transcoder.v1.CreateJobTemplateRequest;

                        /**
                         * Encodes the specified CreateJobTemplateRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1.CreateJobTemplateRequest.verify|verify} messages.
                         * @param message CreateJobTemplateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.ICreateJobTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified CreateJobTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.CreateJobTemplateRequest.verify|verify} messages.
                         * @param message CreateJobTemplateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.ICreateJobTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a CreateJobTemplateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns CreateJobTemplateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.CreateJobTemplateRequest;

                        /**
                         * Decodes a CreateJobTemplateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns CreateJobTemplateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.CreateJobTemplateRequest;

                        /**
                         * Verifies a CreateJobTemplateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a CreateJobTemplateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns CreateJobTemplateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.CreateJobTemplateRequest;

                        /**
                         * Creates a plain object from a CreateJobTemplateRequest message. Also converts values to other types if specified.
                         * @param message CreateJobTemplateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.CreateJobTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this CreateJobTemplateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for CreateJobTemplateRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListJobTemplatesRequest. */
                    interface IListJobTemplatesRequest {

                        /** ListJobTemplatesRequest parent */
                        parent?: (string|null);

                        /** ListJobTemplatesRequest pageSize */
                        pageSize?: (number|null);

                        /** ListJobTemplatesRequest pageToken */
                        pageToken?: (string|null);

                        /** ListJobTemplatesRequest filter */
                        filter?: (string|null);

                        /** ListJobTemplatesRequest orderBy */
                        orderBy?: (string|null);
                    }

                    /** Represents a ListJobTemplatesRequest. */
                    class ListJobTemplatesRequest implements IListJobTemplatesRequest {

                        /**
                         * Constructs a new ListJobTemplatesRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IListJobTemplatesRequest);

                        /** ListJobTemplatesRequest parent. */
                        public parent: string;

                        /** ListJobTemplatesRequest pageSize. */
                        public pageSize: number;

                        /** ListJobTemplatesRequest pageToken. */
                        public pageToken: string;

                        /** ListJobTemplatesRequest filter. */
                        public filter: string;

                        /** ListJobTemplatesRequest orderBy. */
                        public orderBy: string;

                        /**
                         * Creates a new ListJobTemplatesRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListJobTemplatesRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IListJobTemplatesRequest): google.cloud.video.transcoder.v1.ListJobTemplatesRequest;

                        /**
                         * Encodes the specified ListJobTemplatesRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1.ListJobTemplatesRequest.verify|verify} messages.
                         * @param message ListJobTemplatesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IListJobTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListJobTemplatesRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.ListJobTemplatesRequest.verify|verify} messages.
                         * @param message ListJobTemplatesRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IListJobTemplatesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListJobTemplatesRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListJobTemplatesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.ListJobTemplatesRequest;

                        /**
                         * Decodes a ListJobTemplatesRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListJobTemplatesRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.ListJobTemplatesRequest;

                        /**
                         * Verifies a ListJobTemplatesRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListJobTemplatesRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListJobTemplatesRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.ListJobTemplatesRequest;

                        /**
                         * Creates a plain object from a ListJobTemplatesRequest message. Also converts values to other types if specified.
                         * @param message ListJobTemplatesRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.ListJobTemplatesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListJobTemplatesRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListJobTemplatesRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a GetJobTemplateRequest. */
                    interface IGetJobTemplateRequest {

                        /** GetJobTemplateRequest name */
                        name?: (string|null);
                    }

                    /** Represents a GetJobTemplateRequest. */
                    class GetJobTemplateRequest implements IGetJobTemplateRequest {

                        /**
                         * Constructs a new GetJobTemplateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IGetJobTemplateRequest);

                        /** GetJobTemplateRequest name. */
                        public name: string;

                        /**
                         * Creates a new GetJobTemplateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns GetJobTemplateRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IGetJobTemplateRequest): google.cloud.video.transcoder.v1.GetJobTemplateRequest;

                        /**
                         * Encodes the specified GetJobTemplateRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1.GetJobTemplateRequest.verify|verify} messages.
                         * @param message GetJobTemplateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IGetJobTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified GetJobTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.GetJobTemplateRequest.verify|verify} messages.
                         * @param message GetJobTemplateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IGetJobTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a GetJobTemplateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns GetJobTemplateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.GetJobTemplateRequest;

                        /**
                         * Decodes a GetJobTemplateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns GetJobTemplateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.GetJobTemplateRequest;

                        /**
                         * Verifies a GetJobTemplateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a GetJobTemplateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns GetJobTemplateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.GetJobTemplateRequest;

                        /**
                         * Creates a plain object from a GetJobTemplateRequest message. Also converts values to other types if specified.
                         * @param message GetJobTemplateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.GetJobTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this GetJobTemplateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for GetJobTemplateRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a DeleteJobTemplateRequest. */
                    interface IDeleteJobTemplateRequest {

                        /** DeleteJobTemplateRequest name */
                        name?: (string|null);

                        /** DeleteJobTemplateRequest allowMissing */
                        allowMissing?: (boolean|null);
                    }

                    /** Represents a DeleteJobTemplateRequest. */
                    class DeleteJobTemplateRequest implements IDeleteJobTemplateRequest {

                        /**
                         * Constructs a new DeleteJobTemplateRequest.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IDeleteJobTemplateRequest);

                        /** DeleteJobTemplateRequest name. */
                        public name: string;

                        /** DeleteJobTemplateRequest allowMissing. */
                        public allowMissing: boolean;

                        /**
                         * Creates a new DeleteJobTemplateRequest instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns DeleteJobTemplateRequest instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IDeleteJobTemplateRequest): google.cloud.video.transcoder.v1.DeleteJobTemplateRequest;

                        /**
                         * Encodes the specified DeleteJobTemplateRequest message. Does not implicitly {@link google.cloud.video.transcoder.v1.DeleteJobTemplateRequest.verify|verify} messages.
                         * @param message DeleteJobTemplateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IDeleteJobTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified DeleteJobTemplateRequest message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.DeleteJobTemplateRequest.verify|verify} messages.
                         * @param message DeleteJobTemplateRequest message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IDeleteJobTemplateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a DeleteJobTemplateRequest message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns DeleteJobTemplateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.DeleteJobTemplateRequest;

                        /**
                         * Decodes a DeleteJobTemplateRequest message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns DeleteJobTemplateRequest
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.DeleteJobTemplateRequest;

                        /**
                         * Verifies a DeleteJobTemplateRequest message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a DeleteJobTemplateRequest message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns DeleteJobTemplateRequest
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.DeleteJobTemplateRequest;

                        /**
                         * Creates a plain object from a DeleteJobTemplateRequest message. Also converts values to other types if specified.
                         * @param message DeleteJobTemplateRequest
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.DeleteJobTemplateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this DeleteJobTemplateRequest to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for DeleteJobTemplateRequest
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }

                    /** Properties of a ListJobTemplatesResponse. */
                    interface IListJobTemplatesResponse {

                        /** ListJobTemplatesResponse jobTemplates */
                        jobTemplates?: (google.cloud.video.transcoder.v1.IJobTemplate[]|null);

                        /** ListJobTemplatesResponse nextPageToken */
                        nextPageToken?: (string|null);

                        /** ListJobTemplatesResponse unreachable */
                        unreachable?: (string[]|null);
                    }

                    /** Represents a ListJobTemplatesResponse. */
                    class ListJobTemplatesResponse implements IListJobTemplatesResponse {

                        /**
                         * Constructs a new ListJobTemplatesResponse.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.video.transcoder.v1.IListJobTemplatesResponse);

                        /** ListJobTemplatesResponse jobTemplates. */
                        public jobTemplates: google.cloud.video.transcoder.v1.IJobTemplate[];

                        /** ListJobTemplatesResponse nextPageToken. */
                        public nextPageToken: string;

                        /** ListJobTemplatesResponse unreachable. */
                        public unreachable: string[];

                        /**
                         * Creates a new ListJobTemplatesResponse instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListJobTemplatesResponse instance
                         */
                        public static create(properties?: google.cloud.video.transcoder.v1.IListJobTemplatesResponse): google.cloud.video.transcoder.v1.ListJobTemplatesResponse;

                        /**
                         * Encodes the specified ListJobTemplatesResponse message. Does not implicitly {@link google.cloud.video.transcoder.v1.ListJobTemplatesResponse.verify|verify} messages.
                         * @param message ListJobTemplatesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.video.transcoder.v1.IListJobTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListJobTemplatesResponse message, length delimited. Does not implicitly {@link google.cloud.video.transcoder.v1.ListJobTemplatesResponse.verify|verify} messages.
                         * @param message ListJobTemplatesResponse message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.video.transcoder.v1.IListJobTemplatesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListJobTemplatesResponse message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListJobTemplatesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.video.transcoder.v1.ListJobTemplatesResponse;

                        /**
                         * Decodes a ListJobTemplatesResponse message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListJobTemplatesResponse
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.video.transcoder.v1.ListJobTemplatesResponse;

                        /**
                         * Verifies a ListJobTemplatesResponse message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListJobTemplatesResponse message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListJobTemplatesResponse
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.video.transcoder.v1.ListJobTemplatesResponse;

                        /**
                         * Creates a plain object from a ListJobTemplatesResponse message. Also converts values to other types if specified.
                         * @param message ListJobTemplatesResponse
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.video.transcoder.v1.ListJobTemplatesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListJobTemplatesResponse to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };

                        /**
                         * Gets the default type url for ListJobTemplatesResponse
                         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                         * @returns The default type url
                         */
                        public static getTypeUrl(typeUrlPrefix?: string): string;
                    }
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5,
            UNORDERED_LIST = 6,
            NON_EMPTY_DEFAULT = 7,
            IDENTIFIER = 8
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);

            /** ResourceDescriptor style */
            style?: (google.api.ResourceDescriptor.Style[]|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: (google.api.ResourceDescriptor.History|keyof typeof google.api.ResourceDescriptor.History);

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /** ResourceDescriptor style. */
            public style: google.api.ResourceDescriptor.Style[];

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceDescriptor
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }

            /** Style enum. */
            enum Style {
                STYLE_UNSPECIFIED = 0,
                DECLARATIVE_FRIENDLY = 1
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ResourceReference
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Http
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get?: (string|null);

            /** HttpRule put. */
            public put?: (string|null);

            /** HttpRule post. */
            public post?: (string|null);

            /** HttpRule delete. */
            public delete?: (string|null);

            /** HttpRule patch. */
            public patch?: (string|null);

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for HttpRule
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CustomHttpPattern
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CommonLanguageSettings. */
        interface ICommonLanguageSettings {

            /** CommonLanguageSettings referenceDocsUri */
            referenceDocsUri?: (string|null);

            /** CommonLanguageSettings destinations */
            destinations?: (google.api.ClientLibraryDestination[]|null);

            /** CommonLanguageSettings selectiveGapicGeneration */
            selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);
        }

        /** Represents a CommonLanguageSettings. */
        class CommonLanguageSettings implements ICommonLanguageSettings {

            /**
             * Constructs a new CommonLanguageSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICommonLanguageSettings);

            /** CommonLanguageSettings referenceDocsUri. */
            public referenceDocsUri: string;

            /** CommonLanguageSettings destinations. */
            public destinations: google.api.ClientLibraryDestination[];

            /** CommonLanguageSettings selectiveGapicGeneration. */
            public selectiveGapicGeneration?: (google.api.ISelectiveGapicGeneration|null);

            /**
             * Creates a new CommonLanguageSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CommonLanguageSettings instance
             */
            public static create(properties?: google.api.ICommonLanguageSettings): google.api.CommonLanguageSettings;

            /**
             * Encodes the specified CommonLanguageSettings message. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CommonLanguageSettings message, length delimited. Does not implicitly {@link google.api.CommonLanguageSettings.verify|verify} messages.
             * @param message CommonLanguageSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICommonLanguageSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CommonLanguageSettings;

            /**
             * Decodes a CommonLanguageSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CommonLanguageSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CommonLanguageSettings;

            /**
             * Verifies a CommonLanguageSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CommonLanguageSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CommonLanguageSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CommonLanguageSettings;

            /**
             * Creates a plain object from a CommonLanguageSettings message. Also converts values to other types if specified.
             * @param message CommonLanguageSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CommonLanguageSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CommonLanguageSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CommonLanguageSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ClientLibrarySettings. */
        interface IClientLibrarySettings {

            /** ClientLibrarySettings version */
            version?: (string|null);

            /** ClientLibrarySettings launchStage */
            launchStage?: (google.api.LaunchStage|keyof typeof google.api.LaunchStage|null);

            /** ClientLibrarySettings restNumericEnums */
            restNumericEnums?: (boolean|null);

            /** ClientLibrarySettings javaSettings */
            javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings */
            cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings */
            phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings */
            pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings */
            nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings */
            dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings */
            rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings */
            goSettings?: (google.api.IGoSettings|null);
        }

        /** Represents a ClientLibrarySettings. */
        class ClientLibrarySettings implements IClientLibrarySettings {

            /**
             * Constructs a new ClientLibrarySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IClientLibrarySettings);

            /** ClientLibrarySettings version. */
            public version: string;

            /** ClientLibrarySettings launchStage. */
            public launchStage: (google.api.LaunchStage|keyof typeof google.api.LaunchStage);

            /** ClientLibrarySettings restNumericEnums. */
            public restNumericEnums: boolean;

            /** ClientLibrarySettings javaSettings. */
            public javaSettings?: (google.api.IJavaSettings|null);

            /** ClientLibrarySettings cppSettings. */
            public cppSettings?: (google.api.ICppSettings|null);

            /** ClientLibrarySettings phpSettings. */
            public phpSettings?: (google.api.IPhpSettings|null);

            /** ClientLibrarySettings pythonSettings. */
            public pythonSettings?: (google.api.IPythonSettings|null);

            /** ClientLibrarySettings nodeSettings. */
            public nodeSettings?: (google.api.INodeSettings|null);

            /** ClientLibrarySettings dotnetSettings. */
            public dotnetSettings?: (google.api.IDotnetSettings|null);

            /** ClientLibrarySettings rubySettings. */
            public rubySettings?: (google.api.IRubySettings|null);

            /** ClientLibrarySettings goSettings. */
            public goSettings?: (google.api.IGoSettings|null);

            /**
             * Creates a new ClientLibrarySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClientLibrarySettings instance
             */
            public static create(properties?: google.api.IClientLibrarySettings): google.api.ClientLibrarySettings;

            /**
             * Encodes the specified ClientLibrarySettings message. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClientLibrarySettings message, length delimited. Does not implicitly {@link google.api.ClientLibrarySettings.verify|verify} messages.
             * @param message ClientLibrarySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IClientLibrarySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ClientLibrarySettings;

            /**
             * Decodes a ClientLibrarySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClientLibrarySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ClientLibrarySettings;

            /**
             * Verifies a ClientLibrarySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClientLibrarySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClientLibrarySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.ClientLibrarySettings;

            /**
             * Creates a plain object from a ClientLibrarySettings message. Also converts values to other types if specified.
             * @param message ClientLibrarySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ClientLibrarySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClientLibrarySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ClientLibrarySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Publishing. */
        interface IPublishing {

            /** Publishing methodSettings */
            methodSettings?: (google.api.IMethodSettings[]|null);

            /** Publishing newIssueUri */
            newIssueUri?: (string|null);

            /** Publishing documentationUri */
            documentationUri?: (string|null);

            /** Publishing apiShortName */
            apiShortName?: (string|null);

            /** Publishing githubLabel */
            githubLabel?: (string|null);

            /** Publishing codeownerGithubTeams */
            codeownerGithubTeams?: (string[]|null);

            /** Publishing docTagPrefix */
            docTagPrefix?: (string|null);

            /** Publishing organization */
            organization?: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization|null);

            /** Publishing librarySettings */
            librarySettings?: (google.api.IClientLibrarySettings[]|null);

            /** Publishing protoReferenceDocumentationUri */
            protoReferenceDocumentationUri?: (string|null);

            /** Publishing restReferenceDocumentationUri */
            restReferenceDocumentationUri?: (string|null);
        }

        /** Represents a Publishing. */
        class Publishing implements IPublishing {

            /**
             * Constructs a new Publishing.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPublishing);

            /** Publishing methodSettings. */
            public methodSettings: google.api.IMethodSettings[];

            /** Publishing newIssueUri. */
            public newIssueUri: string;

            /** Publishing documentationUri. */
            public documentationUri: string;

            /** Publishing apiShortName. */
            public apiShortName: string;

            /** Publishing githubLabel. */
            public githubLabel: string;

            /** Publishing codeownerGithubTeams. */
            public codeownerGithubTeams: string[];

            /** Publishing docTagPrefix. */
            public docTagPrefix: string;

            /** Publishing organization. */
            public organization: (google.api.ClientLibraryOrganization|keyof typeof google.api.ClientLibraryOrganization);

            /** Publishing librarySettings. */
            public librarySettings: google.api.IClientLibrarySettings[];

            /** Publishing protoReferenceDocumentationUri. */
            public protoReferenceDocumentationUri: string;

            /** Publishing restReferenceDocumentationUri. */
            public restReferenceDocumentationUri: string;

            /**
             * Creates a new Publishing instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Publishing instance
             */
            public static create(properties?: google.api.IPublishing): google.api.Publishing;

            /**
             * Encodes the specified Publishing message. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Publishing message, length delimited. Does not implicitly {@link google.api.Publishing.verify|verify} messages.
             * @param message Publishing message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPublishing, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Publishing message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Publishing;

            /**
             * Decodes a Publishing message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Publishing
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Publishing;

            /**
             * Verifies a Publishing message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Publishing message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Publishing
             */
            public static fromObject(object: { [k: string]: any }): google.api.Publishing;

            /**
             * Creates a plain object from a Publishing message. Also converts values to other types if specified.
             * @param message Publishing
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Publishing, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Publishing to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Publishing
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a JavaSettings. */
        interface IJavaSettings {

            /** JavaSettings libraryPackage */
            libraryPackage?: (string|null);

            /** JavaSettings serviceClassNames */
            serviceClassNames?: ({ [k: string]: string }|null);

            /** JavaSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a JavaSettings. */
        class JavaSettings implements IJavaSettings {

            /**
             * Constructs a new JavaSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IJavaSettings);

            /** JavaSettings libraryPackage. */
            public libraryPackage: string;

            /** JavaSettings serviceClassNames. */
            public serviceClassNames: { [k: string]: string };

            /** JavaSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new JavaSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns JavaSettings instance
             */
            public static create(properties?: google.api.IJavaSettings): google.api.JavaSettings;

            /**
             * Encodes the specified JavaSettings message. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified JavaSettings message, length delimited. Does not implicitly {@link google.api.JavaSettings.verify|verify} messages.
             * @param message JavaSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IJavaSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.JavaSettings;

            /**
             * Decodes a JavaSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns JavaSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.JavaSettings;

            /**
             * Verifies a JavaSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a JavaSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns JavaSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.JavaSettings;

            /**
             * Creates a plain object from a JavaSettings message. Also converts values to other types if specified.
             * @param message JavaSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.JavaSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this JavaSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for JavaSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a CppSettings. */
        interface ICppSettings {

            /** CppSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a CppSettings. */
        class CppSettings implements ICppSettings {

            /**
             * Constructs a new CppSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICppSettings);

            /** CppSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new CppSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CppSettings instance
             */
            public static create(properties?: google.api.ICppSettings): google.api.CppSettings;

            /**
             * Encodes the specified CppSettings message. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CppSettings message, length delimited. Does not implicitly {@link google.api.CppSettings.verify|verify} messages.
             * @param message CppSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICppSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CppSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CppSettings;

            /**
             * Decodes a CppSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CppSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CppSettings;

            /**
             * Verifies a CppSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CppSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CppSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.CppSettings;

            /**
             * Creates a plain object from a CppSettings message. Also converts values to other types if specified.
             * @param message CppSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CppSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CppSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for CppSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PhpSettings. */
        interface IPhpSettings {

            /** PhpSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a PhpSettings. */
        class PhpSettings implements IPhpSettings {

            /**
             * Constructs a new PhpSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPhpSettings);

            /** PhpSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new PhpSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PhpSettings instance
             */
            public static create(properties?: google.api.IPhpSettings): google.api.PhpSettings;

            /**
             * Encodes the specified PhpSettings message. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PhpSettings message, length delimited. Does not implicitly {@link google.api.PhpSettings.verify|verify} messages.
             * @param message PhpSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPhpSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PhpSettings;

            /**
             * Decodes a PhpSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PhpSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PhpSettings;

            /**
             * Verifies a PhpSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PhpSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PhpSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PhpSettings;

            /**
             * Creates a plain object from a PhpSettings message. Also converts values to other types if specified.
             * @param message PhpSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PhpSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PhpSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PhpSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a PythonSettings. */
        interface IPythonSettings {

            /** PythonSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** PythonSettings experimentalFeatures */
            experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);
        }

        /** Represents a PythonSettings. */
        class PythonSettings implements IPythonSettings {

            /**
             * Constructs a new PythonSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IPythonSettings);

            /** PythonSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** PythonSettings experimentalFeatures. */
            public experimentalFeatures?: (google.api.PythonSettings.IExperimentalFeatures|null);

            /**
             * Creates a new PythonSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PythonSettings instance
             */
            public static create(properties?: google.api.IPythonSettings): google.api.PythonSettings;

            /**
             * Encodes the specified PythonSettings message. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PythonSettings message, length delimited. Does not implicitly {@link google.api.PythonSettings.verify|verify} messages.
             * @param message PythonSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IPythonSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings;

            /**
             * Decodes a PythonSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PythonSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings;

            /**
             * Verifies a PythonSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PythonSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PythonSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.PythonSettings;

            /**
             * Creates a plain object from a PythonSettings message. Also converts values to other types if specified.
             * @param message PythonSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.PythonSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PythonSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for PythonSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace PythonSettings {

            /** Properties of an ExperimentalFeatures. */
            interface IExperimentalFeatures {

                /** ExperimentalFeatures restAsyncIoEnabled */
                restAsyncIoEnabled?: (boolean|null);

                /** ExperimentalFeatures protobufPythonicTypesEnabled */
                protobufPythonicTypesEnabled?: (boolean|null);

                /** ExperimentalFeatures unversionedPackageDisabled */
                unversionedPackageDisabled?: (boolean|null);
            }

            /** Represents an ExperimentalFeatures. */
            class ExperimentalFeatures implements IExperimentalFeatures {

                /**
                 * Constructs a new ExperimentalFeatures.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.PythonSettings.IExperimentalFeatures);

                /** ExperimentalFeatures restAsyncIoEnabled. */
                public restAsyncIoEnabled: boolean;

                /** ExperimentalFeatures protobufPythonicTypesEnabled. */
                public protobufPythonicTypesEnabled: boolean;

                /** ExperimentalFeatures unversionedPackageDisabled. */
                public unversionedPackageDisabled: boolean;

                /**
                 * Creates a new ExperimentalFeatures instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExperimentalFeatures instance
                 */
                public static create(properties?: google.api.PythonSettings.IExperimentalFeatures): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Encodes the specified ExperimentalFeatures message. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExperimentalFeatures message, length delimited. Does not implicitly {@link google.api.PythonSettings.ExperimentalFeatures.verify|verify} messages.
                 * @param message ExperimentalFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.PythonSettings.IExperimentalFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Decodes an ExperimentalFeatures message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExperimentalFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Verifies an ExperimentalFeatures message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExperimentalFeatures message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExperimentalFeatures
                 */
                public static fromObject(object: { [k: string]: any }): google.api.PythonSettings.ExperimentalFeatures;

                /**
                 * Creates a plain object from an ExperimentalFeatures message. Also converts values to other types if specified.
                 * @param message ExperimentalFeatures
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.PythonSettings.ExperimentalFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExperimentalFeatures to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExperimentalFeatures
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a NodeSettings. */
        interface INodeSettings {

            /** NodeSettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a NodeSettings. */
        class NodeSettings implements INodeSettings {

            /**
             * Constructs a new NodeSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.INodeSettings);

            /** NodeSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new NodeSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeSettings instance
             */
            public static create(properties?: google.api.INodeSettings): google.api.NodeSettings;

            /**
             * Encodes the specified NodeSettings message. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NodeSettings message, length delimited. Does not implicitly {@link google.api.NodeSettings.verify|verify} messages.
             * @param message NodeSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.INodeSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.NodeSettings;

            /**
             * Decodes a NodeSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.NodeSettings;

            /**
             * Verifies a NodeSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.NodeSettings;

            /**
             * Creates a plain object from a NodeSettings message. Also converts values to other types if specified.
             * @param message NodeSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.NodeSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for NodeSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DotnetSettings. */
        interface IDotnetSettings {

            /** DotnetSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);

            /** DotnetSettings renamedResources */
            renamedResources?: ({ [k: string]: string }|null);

            /** DotnetSettings ignoredResources */
            ignoredResources?: (string[]|null);

            /** DotnetSettings forcedNamespaceAliases */
            forcedNamespaceAliases?: (string[]|null);

            /** DotnetSettings handwrittenSignatures */
            handwrittenSignatures?: (string[]|null);
        }

        /** Represents a DotnetSettings. */
        class DotnetSettings implements IDotnetSettings {

            /**
             * Constructs a new DotnetSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IDotnetSettings);

            /** DotnetSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** DotnetSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /** DotnetSettings renamedResources. */
            public renamedResources: { [k: string]: string };

            /** DotnetSettings ignoredResources. */
            public ignoredResources: string[];

            /** DotnetSettings forcedNamespaceAliases. */
            public forcedNamespaceAliases: string[];

            /** DotnetSettings handwrittenSignatures. */
            public handwrittenSignatures: string[];

            /**
             * Creates a new DotnetSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DotnetSettings instance
             */
            public static create(properties?: google.api.IDotnetSettings): google.api.DotnetSettings;

            /**
             * Encodes the specified DotnetSettings message. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DotnetSettings message, length delimited. Does not implicitly {@link google.api.DotnetSettings.verify|verify} messages.
             * @param message DotnetSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IDotnetSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.DotnetSettings;

            /**
             * Decodes a DotnetSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DotnetSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.DotnetSettings;

            /**
             * Verifies a DotnetSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DotnetSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DotnetSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.DotnetSettings;

            /**
             * Creates a plain object from a DotnetSettings message. Also converts values to other types if specified.
             * @param message DotnetSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.DotnetSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DotnetSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DotnetSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a RubySettings. */
        interface IRubySettings {

            /** RubySettings common */
            common?: (google.api.ICommonLanguageSettings|null);
        }

        /** Represents a RubySettings. */
        class RubySettings implements IRubySettings {

            /**
             * Constructs a new RubySettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IRubySettings);

            /** RubySettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /**
             * Creates a new RubySettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RubySettings instance
             */
            public static create(properties?: google.api.IRubySettings): google.api.RubySettings;

            /**
             * Encodes the specified RubySettings message. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RubySettings message, length delimited. Does not implicitly {@link google.api.RubySettings.verify|verify} messages.
             * @param message RubySettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IRubySettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RubySettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.RubySettings;

            /**
             * Decodes a RubySettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RubySettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.RubySettings;

            /**
             * Verifies a RubySettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RubySettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RubySettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.RubySettings;

            /**
             * Creates a plain object from a RubySettings message. Also converts values to other types if specified.
             * @param message RubySettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.RubySettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RubySettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for RubySettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a GoSettings. */
        interface IGoSettings {

            /** GoSettings common */
            common?: (google.api.ICommonLanguageSettings|null);

            /** GoSettings renamedServices */
            renamedServices?: ({ [k: string]: string }|null);
        }

        /** Represents a GoSettings. */
        class GoSettings implements IGoSettings {

            /**
             * Constructs a new GoSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IGoSettings);

            /** GoSettings common. */
            public common?: (google.api.ICommonLanguageSettings|null);

            /** GoSettings renamedServices. */
            public renamedServices: { [k: string]: string };

            /**
             * Creates a new GoSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GoSettings instance
             */
            public static create(properties?: google.api.IGoSettings): google.api.GoSettings;

            /**
             * Encodes the specified GoSettings message. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GoSettings message, length delimited. Does not implicitly {@link google.api.GoSettings.verify|verify} messages.
             * @param message GoSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IGoSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GoSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.GoSettings;

            /**
             * Decodes a GoSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GoSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.GoSettings;

            /**
             * Verifies a GoSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GoSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GoSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.GoSettings;

            /**
             * Creates a plain object from a GoSettings message. Also converts values to other types if specified.
             * @param message GoSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.GoSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GoSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GoSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodSettings. */
        interface IMethodSettings {

            /** MethodSettings selector */
            selector?: (string|null);

            /** MethodSettings longRunning */
            longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields */
            autoPopulatedFields?: (string[]|null);
        }

        /** Represents a MethodSettings. */
        class MethodSettings implements IMethodSettings {

            /**
             * Constructs a new MethodSettings.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IMethodSettings);

            /** MethodSettings selector. */
            public selector: string;

            /** MethodSettings longRunning. */
            public longRunning?: (google.api.MethodSettings.ILongRunning|null);

            /** MethodSettings autoPopulatedFields. */
            public autoPopulatedFields: string[];

            /**
             * Creates a new MethodSettings instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodSettings instance
             */
            public static create(properties?: google.api.IMethodSettings): google.api.MethodSettings;

            /**
             * Encodes the specified MethodSettings message. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodSettings message, length delimited. Does not implicitly {@link google.api.MethodSettings.verify|verify} messages.
             * @param message MethodSettings message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IMethodSettings, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings;

            /**
             * Decodes a MethodSettings message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodSettings
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings;

            /**
             * Verifies a MethodSettings message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodSettings message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodSettings
             */
            public static fromObject(object: { [k: string]: any }): google.api.MethodSettings;

            /**
             * Creates a plain object from a MethodSettings message. Also converts values to other types if specified.
             * @param message MethodSettings
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.MethodSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodSettings to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodSettings
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodSettings {

            /** Properties of a LongRunning. */
            interface ILongRunning {

                /** LongRunning initialPollDelay */
                initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier */
                pollDelayMultiplier?: (number|null);

                /** LongRunning maxPollDelay */
                maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout */
                totalPollTimeout?: (google.protobuf.IDuration|null);
            }

            /** Represents a LongRunning. */
            class LongRunning implements ILongRunning {

                /**
                 * Constructs a new LongRunning.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.api.MethodSettings.ILongRunning);

                /** LongRunning initialPollDelay. */
                public initialPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning pollDelayMultiplier. */
                public pollDelayMultiplier: number;

                /** LongRunning maxPollDelay. */
                public maxPollDelay?: (google.protobuf.IDuration|null);

                /** LongRunning totalPollTimeout. */
                public totalPollTimeout?: (google.protobuf.IDuration|null);

                /**
                 * Creates a new LongRunning instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns LongRunning instance
                 */
                public static create(properties?: google.api.MethodSettings.ILongRunning): google.api.MethodSettings.LongRunning;

                /**
                 * Encodes the specified LongRunning message. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified LongRunning message, length delimited. Does not implicitly {@link google.api.MethodSettings.LongRunning.verify|verify} messages.
                 * @param message LongRunning message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.api.MethodSettings.ILongRunning, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.MethodSettings.LongRunning;

                /**
                 * Decodes a LongRunning message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns LongRunning
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.MethodSettings.LongRunning;

                /**
                 * Verifies a LongRunning message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a LongRunning message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns LongRunning
                 */
                public static fromObject(object: { [k: string]: any }): google.api.MethodSettings.LongRunning;

                /**
                 * Creates a plain object from a LongRunning message. Also converts values to other types if specified.
                 * @param message LongRunning
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.api.MethodSettings.LongRunning, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this LongRunning to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for LongRunning
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** ClientLibraryOrganization enum. */
        enum ClientLibraryOrganization {
            CLIENT_LIBRARY_ORGANIZATION_UNSPECIFIED = 0,
            CLOUD = 1,
            ADS = 2,
            PHOTOS = 3,
            STREET_VIEW = 4,
            SHOPPING = 5,
            GEO = 6,
            GENERATIVE_AI = 7
        }

        /** ClientLibraryDestination enum. */
        enum ClientLibraryDestination {
            CLIENT_LIBRARY_DESTINATION_UNSPECIFIED = 0,
            GITHUB = 10,
            PACKAGE_MANAGER = 20
        }

        /** Properties of a SelectiveGapicGeneration. */
        interface ISelectiveGapicGeneration {

            /** SelectiveGapicGeneration methods */
            methods?: (string[]|null);

            /** SelectiveGapicGeneration generateOmittedAsInternal */
            generateOmittedAsInternal?: (boolean|null);
        }

        /** Represents a SelectiveGapicGeneration. */
        class SelectiveGapicGeneration implements ISelectiveGapicGeneration {

            /**
             * Constructs a new SelectiveGapicGeneration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ISelectiveGapicGeneration);

            /** SelectiveGapicGeneration methods. */
            public methods: string[];

            /** SelectiveGapicGeneration generateOmittedAsInternal. */
            public generateOmittedAsInternal: boolean;

            /**
             * Creates a new SelectiveGapicGeneration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SelectiveGapicGeneration instance
             */
            public static create(properties?: google.api.ISelectiveGapicGeneration): google.api.SelectiveGapicGeneration;

            /**
             * Encodes the specified SelectiveGapicGeneration message. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SelectiveGapicGeneration message, length delimited. Does not implicitly {@link google.api.SelectiveGapicGeneration.verify|verify} messages.
             * @param message SelectiveGapicGeneration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ISelectiveGapicGeneration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.SelectiveGapicGeneration;

            /**
             * Decodes a SelectiveGapicGeneration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SelectiveGapicGeneration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.SelectiveGapicGeneration;

            /**
             * Verifies a SelectiveGapicGeneration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SelectiveGapicGeneration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SelectiveGapicGeneration
             */
            public static fromObject(object: { [k: string]: any }): google.api.SelectiveGapicGeneration;

            /**
             * Creates a plain object from a SelectiveGapicGeneration message. Also converts values to other types if specified.
             * @param message SelectiveGapicGeneration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.SelectiveGapicGeneration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SelectiveGapicGeneration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SelectiveGapicGeneration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** LaunchStage enum. */
        enum LaunchStage {
            LAUNCH_STAGE_UNSPECIFIED = 0,
            UNIMPLEMENTED = 6,
            PRELAUNCH = 7,
            EARLY_ACCESS = 1,
            ALPHA = 2,
            BETA = 3,
            GA = 4,
            DEPRECATED = 5
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Edition enum. */
        enum Edition {
            EDITION_UNKNOWN = 0,
            EDITION_LEGACY = 900,
            EDITION_PROTO2 = 998,
            EDITION_PROTO3 = 999,
            EDITION_2023 = 1000,
            EDITION_2024 = 1001,
            EDITION_1_TEST_ONLY = 1,
            EDITION_2_TEST_ONLY = 2,
            EDITION_99997_TEST_ONLY = 99997,
            EDITION_99998_TEST_ONLY = 99998,
            EDITION_99999_TEST_ONLY = 99999,
            EDITION_MAX = 2147483647
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto optionDependency */
            optionDependency?: (string[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto optionDependency. */
            public optionDependency: string[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);

            /** DescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /** DescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ExtensionRangeOptions declaration */
            declaration?: (google.protobuf.ExtensionRangeOptions.IDeclaration[]|null);

            /** ExtensionRangeOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification */
            verification?: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** ExtensionRangeOptions declaration. */
            public declaration: google.protobuf.ExtensionRangeOptions.IDeclaration[];

            /** ExtensionRangeOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ExtensionRangeOptions verification. */
            public verification: (google.protobuf.ExtensionRangeOptions.VerificationState|keyof typeof google.protobuf.ExtensionRangeOptions.VerificationState);

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace ExtensionRangeOptions {

            /** Properties of a Declaration. */
            interface IDeclaration {

                /** Declaration number */
                number?: (number|null);

                /** Declaration fullName */
                fullName?: (string|null);

                /** Declaration type */
                type?: (string|null);

                /** Declaration reserved */
                reserved?: (boolean|null);

                /** Declaration repeated */
                repeated?: (boolean|null);
            }

            /** Represents a Declaration. */
            class Declaration implements IDeclaration {

                /**
                 * Constructs a new Declaration.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration);

                /** Declaration number. */
                public number: number;

                /** Declaration fullName. */
                public fullName: string;

                /** Declaration type. */
                public type: string;

                /** Declaration reserved. */
                public reserved: boolean;

                /** Declaration repeated. */
                public repeated: boolean;

                /**
                 * Creates a new Declaration instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Declaration instance
                 */
                public static create(properties?: google.protobuf.ExtensionRangeOptions.IDeclaration): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Encodes the specified Declaration message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Declaration message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.Declaration.verify|verify} messages.
                 * @param message Declaration message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.ExtensionRangeOptions.IDeclaration, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Declaration message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Decodes a Declaration message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Declaration
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Verifies a Declaration message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Declaration message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Declaration
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions.Declaration;

                /**
                 * Creates a plain object from a Declaration message. Also converts values to other types if specified.
                 * @param message Declaration
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.ExtensionRangeOptions.Declaration, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Declaration to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Declaration
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** VerificationState enum. */
            enum VerificationState {
                DECLARATION = 0,
                UNVERIFIED = 1
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: (google.protobuf.FieldDescriptorProto.Label|keyof typeof google.protobuf.FieldDescriptorProto.Label);

            /** FieldDescriptorProto type. */
            public type: (google.protobuf.FieldDescriptorProto.Type|keyof typeof google.protobuf.FieldDescriptorProto.Type);

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REPEATED = 3,
                LABEL_REQUIRED = 2
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);

            /** EnumDescriptorProto visibility */
            visibility?: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /** EnumDescriptorProto visibility. */
            public visibility: (google.protobuf.SymbolVisibility|keyof typeof google.protobuf.SymbolVisibility);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: (google.protobuf.FileOptions.OptimizeMode|keyof typeof google.protobuf.FileOptions.OptimizeMode);

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** MessageOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** MessageOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions debugRedact */
            debugRedact?: (boolean|null);

            /** FieldOptions retention */
            retention?: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention|null);

            /** FieldOptions targets */
            targets?: (google.protobuf.FieldOptions.OptionTargetType[]|null);

            /** FieldOptions editionDefaults */
            editionDefaults?: (google.protobuf.FieldOptions.IEditionDefault[]|null);

            /** FieldOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: (google.protobuf.FieldOptions.CType|keyof typeof google.protobuf.FieldOptions.CType);

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: (google.protobuf.FieldOptions.JSType|keyof typeof google.protobuf.FieldOptions.JSType);

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions debugRedact. */
            public debugRedact: boolean;

            /** FieldOptions retention. */
            public retention: (google.protobuf.FieldOptions.OptionRetention|keyof typeof google.protobuf.FieldOptions.OptionRetention);

            /** FieldOptions targets. */
            public targets: google.protobuf.FieldOptions.OptionTargetType[];

            /** FieldOptions editionDefaults. */
            public editionDefaults: google.protobuf.FieldOptions.IEditionDefault[];

            /** FieldOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** FieldOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }

            /** OptionRetention enum. */
            enum OptionRetention {
                RETENTION_UNKNOWN = 0,
                RETENTION_RUNTIME = 1,
                RETENTION_SOURCE = 2
            }

            /** OptionTargetType enum. */
            enum OptionTargetType {
                TARGET_TYPE_UNKNOWN = 0,
                TARGET_TYPE_FILE = 1,
                TARGET_TYPE_EXTENSION_RANGE = 2,
                TARGET_TYPE_MESSAGE = 3,
                TARGET_TYPE_FIELD = 4,
                TARGET_TYPE_ONEOF = 5,
                TARGET_TYPE_ENUM = 6,
                TARGET_TYPE_ENUM_ENTRY = 7,
                TARGET_TYPE_SERVICE = 8,
                TARGET_TYPE_METHOD = 9
            }

            /** Properties of an EditionDefault. */
            interface IEditionDefault {

                /** EditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** EditionDefault value */
                value?: (string|null);
            }

            /** Represents an EditionDefault. */
            class EditionDefault implements IEditionDefault {

                /**
                 * Constructs a new EditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IEditionDefault);

                /** EditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** EditionDefault value. */
                public value: string;

                /**
                 * Creates a new EditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EditionDefault instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IEditionDefault): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Encodes the specified EditionDefault message. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.EditionDefault.verify|verify} messages.
                 * @param message EditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Decodes an EditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Verifies an EditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.EditionDefault;

                /**
                 * Creates a plain object from an EditionDefault message. Also converts values to other types if specified.
                 * @param message EditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.EditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a FeatureSupport. */
            interface IFeatureSupport {

                /** FeatureSupport editionIntroduced */
                editionIntroduced?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport editionDeprecated */
                editionDeprecated?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSupport deprecationWarning */
                deprecationWarning?: (string|null);

                /** FeatureSupport editionRemoved */
                editionRemoved?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
            }

            /** Represents a FeatureSupport. */
            class FeatureSupport implements IFeatureSupport {

                /**
                 * Constructs a new FeatureSupport.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FieldOptions.IFeatureSupport);

                /** FeatureSupport editionIntroduced. */
                public editionIntroduced: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport editionDeprecated. */
                public editionDeprecated: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSupport deprecationWarning. */
                public deprecationWarning: string;

                /** FeatureSupport editionRemoved. */
                public editionRemoved: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /**
                 * Creates a new FeatureSupport instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSupport instance
                 */
                public static create(properties?: google.protobuf.FieldOptions.IFeatureSupport): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Encodes the specified FeatureSupport message. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSupport message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.FeatureSupport.verify|verify} messages.
                 * @param message FeatureSupport message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FieldOptions.IFeatureSupport, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Decodes a FeatureSupport message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSupport
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Verifies a FeatureSupport message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSupport message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSupport
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions.FeatureSupport;

                /**
                 * Creates a plain object from a FeatureSupport message. Also converts values to other types if specified.
                 * @param message FeatureSupport
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FieldOptions.FeatureSupport, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSupport to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSupport
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions deprecatedLegacyJsonFieldConflicts */
            deprecatedLegacyJsonFieldConflicts?: (boolean|null);

            /** EnumOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions deprecatedLegacyJsonFieldConflicts. */
            public deprecatedLegacyJsonFieldConflicts: boolean;

            /** EnumOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact */
            debugRedact?: (boolean|null);

            /** EnumValueOptions featureSupport */
            featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** EnumValueOptions debugRedact. */
            public debugRedact: boolean;

            /** EnumValueOptions featureSupport. */
            public featureSupport?: (google.protobuf.FieldOptions.IFeatureSupport|null);

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);

            /** ServiceOptions .google.api.apiVersion */
            ".google.api.apiVersion"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions features */
            features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: (google.protobuf.MethodOptions.IdempotencyLevel|keyof typeof google.protobuf.MethodOptions.IdempotencyLevel);

            /** MethodOptions features. */
            public features?: (google.protobuf.IFeatureSet|null);

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|string|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|string|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|Buffer|string|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long|string);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long|string);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: (Uint8Array|Buffer|string);

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a FeatureSet. */
        interface IFeatureSet {

            /** FeatureSet fieldPresence */
            fieldPresence?: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence|null);

            /** FeatureSet enumType */
            enumType?: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType|null);

            /** FeatureSet repeatedFieldEncoding */
            repeatedFieldEncoding?: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding|null);

            /** FeatureSet utf8Validation */
            utf8Validation?: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation|null);

            /** FeatureSet messageEncoding */
            messageEncoding?: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding|null);

            /** FeatureSet jsonFormat */
            jsonFormat?: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat|null);

            /** FeatureSet enforceNamingStyle */
            enforceNamingStyle?: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle|null);

            /** FeatureSet defaultSymbolVisibility */
            defaultSymbolVisibility?: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|null);
        }

        /** Represents a FeatureSet. */
        class FeatureSet implements IFeatureSet {

            /**
             * Constructs a new FeatureSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSet);

            /** FeatureSet fieldPresence. */
            public fieldPresence: (google.protobuf.FeatureSet.FieldPresence|keyof typeof google.protobuf.FeatureSet.FieldPresence);

            /** FeatureSet enumType. */
            public enumType: (google.protobuf.FeatureSet.EnumType|keyof typeof google.protobuf.FeatureSet.EnumType);

            /** FeatureSet repeatedFieldEncoding. */
            public repeatedFieldEncoding: (google.protobuf.FeatureSet.RepeatedFieldEncoding|keyof typeof google.protobuf.FeatureSet.RepeatedFieldEncoding);

            /** FeatureSet utf8Validation. */
            public utf8Validation: (google.protobuf.FeatureSet.Utf8Validation|keyof typeof google.protobuf.FeatureSet.Utf8Validation);

            /** FeatureSet messageEncoding. */
            public messageEncoding: (google.protobuf.FeatureSet.MessageEncoding|keyof typeof google.protobuf.FeatureSet.MessageEncoding);

            /** FeatureSet jsonFormat. */
            public jsonFormat: (google.protobuf.FeatureSet.JsonFormat|keyof typeof google.protobuf.FeatureSet.JsonFormat);

            /** FeatureSet enforceNamingStyle. */
            public enforceNamingStyle: (google.protobuf.FeatureSet.EnforceNamingStyle|keyof typeof google.protobuf.FeatureSet.EnforceNamingStyle);

            /** FeatureSet defaultSymbolVisibility. */
            public defaultSymbolVisibility: (google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility|keyof typeof google.protobuf.FeatureSet.VisibilityFeature.DefaultSymbolVisibility);

            /**
             * Creates a new FeatureSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSet instance
             */
            public static create(properties?: google.protobuf.IFeatureSet): google.protobuf.FeatureSet;

            /**
             * Encodes the specified FeatureSet message. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSet message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.verify|verify} messages.
             * @param message FeatureSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet;

            /**
             * Decodes a FeatureSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet;

            /**
             * Verifies a FeatureSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet;

            /**
             * Creates a plain object from a FeatureSet message. Also converts values to other types if specified.
             * @param message FeatureSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSet {

            /** FieldPresence enum. */
            enum FieldPresence {
                FIELD_PRESENCE_UNKNOWN = 0,
                EXPLICIT = 1,
                IMPLICIT = 2,
                LEGACY_REQUIRED = 3
            }

            /** EnumType enum. */
            enum EnumType {
                ENUM_TYPE_UNKNOWN = 0,
                OPEN = 1,
                CLOSED = 2
            }

            /** RepeatedFieldEncoding enum. */
            enum RepeatedFieldEncoding {
                REPEATED_FIELD_ENCODING_UNKNOWN = 0,
                PACKED = 1,
                EXPANDED = 2
            }

            /** Utf8Validation enum. */
            enum Utf8Validation {
                UTF8_VALIDATION_UNKNOWN = 0,
                VERIFY = 2,
                NONE = 3
            }

            /** MessageEncoding enum. */
            enum MessageEncoding {
                MESSAGE_ENCODING_UNKNOWN = 0,
                LENGTH_PREFIXED = 1,
                DELIMITED = 2
            }

            /** JsonFormat enum. */
            enum JsonFormat {
                JSON_FORMAT_UNKNOWN = 0,
                ALLOW = 1,
                LEGACY_BEST_EFFORT = 2
            }

            /** EnforceNamingStyle enum. */
            enum EnforceNamingStyle {
                ENFORCE_NAMING_STYLE_UNKNOWN = 0,
                STYLE2024 = 1,
                STYLE_LEGACY = 2
            }

            /** Properties of a VisibilityFeature. */
            interface IVisibilityFeature {
            }

            /** Represents a VisibilityFeature. */
            class VisibilityFeature implements IVisibilityFeature {

                /**
                 * Constructs a new VisibilityFeature.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSet.IVisibilityFeature);

                /**
                 * Creates a new VisibilityFeature instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns VisibilityFeature instance
                 */
                public static create(properties?: google.protobuf.FeatureSet.IVisibilityFeature): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Encodes the specified VisibilityFeature message. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified VisibilityFeature message, length delimited. Does not implicitly {@link google.protobuf.FeatureSet.VisibilityFeature.verify|verify} messages.
                 * @param message VisibilityFeature message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSet.IVisibilityFeature, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Decodes a VisibilityFeature message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns VisibilityFeature
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Verifies a VisibilityFeature message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a VisibilityFeature message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns VisibilityFeature
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSet.VisibilityFeature;

                /**
                 * Creates a plain object from a VisibilityFeature message. Also converts values to other types if specified.
                 * @param message VisibilityFeature
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSet.VisibilityFeature, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this VisibilityFeature to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for VisibilityFeature
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace VisibilityFeature {

                /** DefaultSymbolVisibility enum. */
                enum DefaultSymbolVisibility {
                    DEFAULT_SYMBOL_VISIBILITY_UNKNOWN = 0,
                    EXPORT_ALL = 1,
                    EXPORT_TOP_LEVEL = 2,
                    LOCAL_ALL = 3,
                    STRICT = 4
                }
            }
        }

        /** Properties of a FeatureSetDefaults. */
        interface IFeatureSetDefaults {

            /** FeatureSetDefaults defaults */
            defaults?: (google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[]|null);

            /** FeatureSetDefaults minimumEdition */
            minimumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

            /** FeatureSetDefaults maximumEdition */
            maximumEdition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);
        }

        /** Represents a FeatureSetDefaults. */
        class FeatureSetDefaults implements IFeatureSetDefaults {

            /**
             * Constructs a new FeatureSetDefaults.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFeatureSetDefaults);

            /** FeatureSetDefaults defaults. */
            public defaults: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault[];

            /** FeatureSetDefaults minimumEdition. */
            public minimumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /** FeatureSetDefaults maximumEdition. */
            public maximumEdition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

            /**
             * Creates a new FeatureSetDefaults instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FeatureSetDefaults instance
             */
            public static create(properties?: google.protobuf.IFeatureSetDefaults): google.protobuf.FeatureSetDefaults;

            /**
             * Encodes the specified FeatureSetDefaults message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FeatureSetDefaults message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.verify|verify} messages.
             * @param message FeatureSetDefaults message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFeatureSetDefaults, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults;

            /**
             * Decodes a FeatureSetDefaults message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FeatureSetDefaults
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults;

            /**
             * Verifies a FeatureSetDefaults message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FeatureSetDefaults message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FeatureSetDefaults
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults;

            /**
             * Creates a plain object from a FeatureSetDefaults message. Also converts values to other types if specified.
             * @param message FeatureSetDefaults
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FeatureSetDefaults, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FeatureSetDefaults to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FeatureSetDefaults
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FeatureSetDefaults {

            /** Properties of a FeatureSetEditionDefault. */
            interface IFeatureSetEditionDefault {

                /** FeatureSetEditionDefault edition */
                edition?: (google.protobuf.Edition|keyof typeof google.protobuf.Edition|null);

                /** FeatureSetEditionDefault overridableFeatures */
                overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures */
                fixedFeatures?: (google.protobuf.IFeatureSet|null);
            }

            /** Represents a FeatureSetEditionDefault. */
            class FeatureSetEditionDefault implements IFeatureSetEditionDefault {

                /**
                 * Constructs a new FeatureSetEditionDefault.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault);

                /** FeatureSetEditionDefault edition. */
                public edition: (google.protobuf.Edition|keyof typeof google.protobuf.Edition);

                /** FeatureSetEditionDefault overridableFeatures. */
                public overridableFeatures?: (google.protobuf.IFeatureSet|null);

                /** FeatureSetEditionDefault fixedFeatures. */
                public fixedFeatures?: (google.protobuf.IFeatureSet|null);

                /**
                 * Creates a new FeatureSetEditionDefault instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FeatureSetEditionDefault instance
                 */
                public static create(properties?: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Encodes the specified FeatureSetEditionDefault message. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FeatureSetEditionDefault message, length delimited. Does not implicitly {@link google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault.verify|verify} messages.
                 * @param message FeatureSetEditionDefault message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.FeatureSetDefaults.IFeatureSetEditionDefault, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Decodes a FeatureSetEditionDefault message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FeatureSetEditionDefault
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Verifies a FeatureSetEditionDefault message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FeatureSetEditionDefault message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FeatureSetEditionDefault
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault;

                /**
                 * Creates a plain object from a FeatureSetEditionDefault message. Also converts values to other types if specified.
                 * @param message FeatureSetEditionDefault
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.FeatureSetDefaults.FeatureSetEditionDefault, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FeatureSetEditionDefault to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for FeatureSetEditionDefault
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|keyof typeof google.protobuf.GeneratedCodeInfo.Annotation.Semantic);

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }

        /** SymbolVisibility enum. */
        enum SymbolVisibility {
            VISIBILITY_UNSET = 0,
            VISIBILITY_LOCAL = 1,
            VISIBILITY_EXPORT = 2
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|string|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long|string);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Duration
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|string|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long|string);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Timestamp
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|Buffer|string|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: (Uint8Array|Buffer|string);

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Any
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Empty
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for Status
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }
    }
}
