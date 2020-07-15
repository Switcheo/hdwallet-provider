import {
  Provider,
  JSONRPCRequestPayload,
  JSONRPCErrorCallback
} from "ethereum-protocol";
import { JsonRpcResponse } from "web3-core-helpers";

type JSONRPCCallback = (error: Error | null, result?: JsonRpcResponse) => void

interface Web3ProviderEngineOptions {
  pollingInterval?: number;
  blockTracker?: any;
  blockTrackerProvider?: any;
}
declare class Web3ProviderEngine implements Provider {
  constructor(options?: Web3ProviderEngineOptions);
  on(event: string, handler: () => void): void;
  send(
    payload: JSONRPCRequestPayload,
    callback?: JSONRPCErrorCallback | JSONRPCCallback
  ): void;
  sendAsync(
    payload: JSONRPCRequestPayload,
    callback: JSONRPCErrorCallback | JSONRPCCallback
  ): void;
  addProvider(provider: any): void;
  // start block polling
  start(callback?: (error?: Error) => void): void;
  // stop block polling
  stop(): void;
}
export default Web3ProviderEngine;
