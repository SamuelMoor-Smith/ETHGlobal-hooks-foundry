import { GenericContractsDeclaration } from "~~/utils/scaffold-eth/contract";

/**
 * @example
 * const externalContracts = {
 *   1: {
 *     DAI: {
 *       address: "0x...",
 *       abi: [...],
 *     },
 *   },
 * } as const;
 */
const externalContracts = {
  11155111: {
    Game1: {
      name: "Game",
      address: "0x529171446fdf4d5e64c531798480d97c61a829f1",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_slashAmount",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "_vaultAddress",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "player",
              type: "address",
            },
            {
              indexed: false,
              internalType: "bool",
              name: "won",
              type: "bool",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
          ],
          name: "GamePlayed",
          type: "event",
        },
        {
          inputs: [],
          name: "playGame",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "PAUSE_DURATION",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "slashAmount",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "vault",
          outputs: [
            {
              internalType: "contract IVault",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      filePath: "OpenZeppelin ERC20 - 2/contracts/dappy2.sol",
      pinnedAt: 1710620984130,
    },
    StakeRouty: {
      name: "Vault",
      address: "0x72d4715d8dd6ae4a7efa90cbc83f9ce7a265e0ae",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_slasher",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
          ],
          name: "authorizeSlasher",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
          ],
          name: "deposit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "durationInSeconds",
              type: "uint256",
            },
          ],
          name: "imposePauseOnUpdateSlashAllowance",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_token",
              type: "address",
            },
            {
              internalType: "address",
              name: "_penaltyWallet",
              type: "address",
            },
            {
              internalType: "address",
              name: "initialOwner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_slasher",
              type: "address",
            },
          ],
          name: "revokeSlasher",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_user",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
          ],
          name: "slash",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "slasher",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "untilTimestamp",
              type: "uint256",
            },
          ],
          name: "SlashAllowanceUpdatePaused",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "slasher",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "SlashAllowanceUpdated",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "slasher",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Slashed",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "slasher",
              type: "address",
            },
          ],
          name: "SlasherAuthorized",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "slasher",
              type: "address",
            },
          ],
          name: "SlasherRevoked",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_slasher",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_newAmount",
              type: "uint256",
            },
          ],
          name: "updateMySlashAllowance",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "_amount",
              type: "uint256",
            },
          ],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_user",
              type: "address",
            },
            {
              internalType: "address",
              name: "_slasher",
              type: "address",
            },
          ],
          name: "getSlasherAllowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "isAuthorizedSlasher",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "penaltyWallet",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "slashAllowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "token",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "totalSlashAllowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      filePath: "OpenZeppelin ERC20 - 2/contracts/Slashrouter.sol",
      pinnedAt: 1710620675170,
    },
    MintHook: {
      address: "0x58472AD868B678749d801404930DBF8f85442F5B",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_poolManager",
              type: "address",
              internalType: "contract ICLPoolManager",
            },
            {
              name: "_stablepointAddress",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "BURN_CONTRACT",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "afterAddLiquidity",
          inputs: [
            {
              name: "user",
              type: "address",
              internalType: "address",
            },
            {
              name: "key",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct ICLPoolManager.ModifyLiquidityParams",
              components: [
                {
                  name: "tickLower",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "tickUpper",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "liquidityDelta",
                  type: "int256",
                  internalType: "int256",
                },
              ],
            },
            {
              name: "balanceDelta",
              type: "int256",
              internalType: "BalanceDelta",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "afterDonate",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "afterInitialize",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "",
              type: "uint160",
              internalType: "uint160",
            },
            {
              name: "",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "afterRemoveLiquidity",
          inputs: [
            {
              name: "user",
              type: "address",
              internalType: "address",
            },
            {
              name: "key",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct ICLPoolManager.ModifyLiquidityParams",
              components: [
                {
                  name: "tickLower",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "tickUpper",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "liquidityDelta",
                  type: "int256",
                  internalType: "int256",
                },
              ],
            },
            {
              name: "balanceDelta",
              type: "int256",
              internalType: "BalanceDelta",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "afterSwap",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct ICLPoolManager.SwapParams",
              components: [
                {
                  name: "zeroForOne",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "amountSpecified",
                  type: "int256",
                  internalType: "int256",
                },
                {
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                  internalType: "uint160",
                },
              ],
            },
            {
              name: "",
              type: "int256",
              internalType: "BalanceDelta",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "beforeAddLiquidity",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct ICLPoolManager.ModifyLiquidityParams",
              components: [
                {
                  name: "tickLower",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "tickUpper",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "liquidityDelta",
                  type: "int256",
                  internalType: "int256",
                },
              ],
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "beforeDonate",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "beforeInitialize",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "",
              type: "uint160",
              internalType: "uint160",
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "beforeRemoveLiquidity",
          inputs: [
            {
              name: "user",
              type: "address",
              internalType: "address",
            },
            {
              name: "key",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "params",
              type: "tuple",
              internalType: "struct ICLPoolManager.ModifyLiquidityParams",
              components: [
                {
                  name: "tickLower",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "tickUpper",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "liquidityDelta",
                  type: "int256",
                  internalType: "int256",
                },
              ],
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "beforeSwap",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "",
              type: "tuple",
              internalType: "struct ICLPoolManager.SwapParams",
              components: [
                {
                  name: "zeroForOne",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "amountSpecified",
                  type: "int256",
                  internalType: "int256",
                },
                {
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                  internalType: "uint160",
                },
              ],
            },
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "getHooksRegistrationBitmap",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint16",
              internalType: "uint16",
            },
          ],
          stateMutability: "pure",
        },
        {
          type: "function",
          name: "lockAcquired",
          inputs: [
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mintPoints",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "poolManager",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract ICLPoolManager",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "stablepoint",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IStablepoint",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "vault",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IVault",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "error",
          name: "HookNotImplemented",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidPool",
          inputs: [],
        },
        {
          type: "error",
          name: "LockFailure",
          inputs: [],
        },
        {
          type: "error",
          name: "NotPoolManager",
          inputs: [],
        },
        {
          type: "error",
          name: "NotSelf",
          inputs: [],
        },
        {
          type: "error",
          name: "NotVault",
          inputs: [],
        },
      ],
      bytecode: {
        object:
          "0x60c060405234801561000f575f80fd5b50604051610e2e380380610e2e83398101604081905261002e916100e1565b6001600160a01b03821660808190526040805163fbfa77cf60e01b8152905184929163fbfa77cf9160048083019260209291908290030181865afa158015610078573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061009c9190610119565b6001600160a01b0390811660a0525f80546001600160a01b03191693909116929092179091555061013b9050565b6001600160a01b03811681146100de575f80fd5b50565b5f80604083850312156100f2575f80fd5b82516100fd816100ca565b602084015190925061010e816100ca565b809150509250929050565b5f60208284031215610129575f80fd5b8151610134816100ca565b9392505050565b60805160a051610cb66101785f395f8181610248015261038201525f8181610206015281816102890152818161046901526106390152610cb65ff3fe608060405234801561000f575f80fd5b5060043610610106575f3560e01c80639f7724191161009e578063dc4c90d31161006e578063dc4c90d314610201578063e592dc93146101f3578063f961d1f414610228578063fbfa77cf14610243578063ff9cc8e61461026a575f80fd5b80639f772419146101a9578063ab6291fe146101c0578063b23855d3146101e0578063c089fa7c146101f3575f80fd5b80634b6a682d116100d95780634b6a682d1461017f5780635304d44e1461017f5780636f6657cb1461018d578063972e19a21461019b575f80fd5b80631e3b7a831461010a5780631ffe6a581461013b57806326d55e3f1461014e57806342cb7d4b1461016d575b5f80fd5b61011d61011836600461092f565b61027d565b6040516001600160e01b031990911681526020015b60405180910390f35b61011d6101493660046109b0565b61035b565b6101555f81565b6040516001600160a01b039091168152602001610132565b5f54610155906001600160a01b031681565b61011d610149366004610a23565b61011d61014936600461092f565b61011d610149366004610a7e565b6101b260015481565b604051908152602001610132565b6101d36101ce366004610af6565b610375565b6040516101329190610b35565b61011d6101ee36600461092f565b61045d565b61011d610149366004610b81565b6101557f000000000000000000000000000000000000000000000000000000000000000081565b6102306105c8565b60405161ffff9091168152602001610132565b6101557f000000000000000000000000000000000000000000000000000000000000000081565b61011d610278366004610b81565b61062d565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102c75760405163570c108560e11b815260040160405180910390fd5b60018054905f6102d683610bef565b91905055505f6102e585610769565b5f546040516340c10f1960e01b81526001600160a01b038b81166004830152602482018490529293509116906340c10f19906044015f604051808303815f87803b158015610331575f80fd5b505af1158015610343573d5f803e3d5ffd5b50631e3b7a8360e01b9b9a5050505050505050505050565b5f604051630a85dc2960e01b815260040160405180910390fd5b6060336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103c0576040516362df054560e01b815260040160405180910390fd5b5f80306001600160a01b031685856040516103dc929190610c07565b5f604051808303815f865af19150503d805f8114610415576040519150601f19603f3d011682016040523d82523d5f602084013e61041a565b606091505b5091509150811561042e5791506104579050565b80515f0361044f576040516314815f4760e31b815260040160405180910390fd5b805160208201fd5b92915050565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104a75760405163570c108560e11b815260040160405180910390fd5b5f6104b185610769565b5f80546040516323b872dd60e01b81526001600160a01b038c8116600483015260248201939093526044810184905292935016906323b872dd906064016020604051808303815f875af115801561050a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061052e9190610c16565b6105b45760405162461bcd60e51b815260206004820152604660248201527f5472616e73666572206661696c65643a204d75737420617070726f766520746f60448201527f6b656e207472616e73666572206265666f72652072656d6f76696e67206c697160648201526575696469747960d01b608482015260a4015b60405180910390fd5b5063b23855d360e01b979650505050505050565b60408051610160810182525f808252602082018190529181018290526001606082018190526080820181905260a082015260c0810182905260e081018290526101008101829052610120810182905261014081018290526106289061079d565b905090565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106775760405163570c108560e11b815260040160405180910390fd5b5f6106858560400135610877565b5f546040516370a0823160e01b81526001600160a01b038a811660048301529293508392909116906370a0823190602401602060405180830381865afa1580156106d1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106f59190610c3c565b10156107535760405162461bcd60e51b815260206004820152602760248201527f496e73756666696369656e7420746f6b656e7320746f2072656d6f7665206c696044820152667175696469747960c81b60648201526084016105ab565b50600162319b8d60e11b03199695505050505050565b5f8061077d6107788460801c90565b61088d565b90505f6107898461088d565b90506107958183610c53565b949350505050565b5f8161014001516107ae575f6107b2565b6104005b8261012001516107c2575f6107c6565b6102005b8361010001516107d6575f6107da565b6101005b8460e001516107e9575f6107ec565b60805b8560c001516107fb575f6107fe565b60405b8660a0015161080d575f610810565b60205b876080015161081f575f610822565b60105b8860600151610831575f610834565b60085b8960400151610843575f610846565b60045b8a60200151610855575f610858565b60025b8b51610864575f610867565b60015b1717171717171717171792915050565b5f808212156108895761045782610c66565b5090565b5f8082600f0b12156108a65781600f0b61045790610c66565b50600f0b90565b6001600160a01b03811681146108c1575f80fd5b50565b5f60c082840312156108d4575f80fd5b50919050565b5f606082840312156108d4575f80fd5b5f8083601f8401126108fa575f80fd5b50813567ffffffffffffffff811115610911575f80fd5b602083019150836020828501011115610928575f80fd5b9250929050565b5f805f805f806101808789031215610945575f80fd5b8635610950816108ad565b955061095f88602089016108c4565b945061096e8860e089016108da565b9350610140870135925061016087013567ffffffffffffffff811115610992575f80fd5b61099e89828a016108ea565b979a9699509497509295939492505050565b5f805f805f8061014087890312156109c6575f80fd5b86356109d1816108ad565b95506109e088602089016108c4565b945060e08701356109f0816108ad565b9350610100870135600281900b8114610a07575f80fd5b925061012087013567ffffffffffffffff811115610992575f80fd5b5f805f805f806101408789031215610a39575f80fd5b8635610a44816108ad565b9550610a5388602089016108c4565b945060e08701359350610100870135925061012087013567ffffffffffffffff811115610992575f80fd5b5f805f805f6101208688031215610a93575f80fd5b8535610a9e816108ad565b9450610aad87602088016108c4565b935060e0860135610abd816108ad565b925061010086013567ffffffffffffffff811115610ad9575f80fd5b610ae5888289016108ea565b969995985093965092949392505050565b5f8060208385031215610b07575f80fd5b823567ffffffffffffffff811115610b1d575f80fd5b610b29858286016108ea565b90969095509350505050565b5f602080835283518060208501525f5b81811015610b6157858101830151858201604001528201610b45565b505f604082860101526040601f19601f8301168501019250505092915050565b5f805f805f6101608688031215610b96575f80fd5b8535610ba1816108ad565b9450610bb087602088016108c4565b9350610bbf8760e088016108da565b925061014086013567ffffffffffffffff811115610ad9575f80fd5b634e487b7160e01b5f52601160045260245ffd5b5f60018201610c0057610c00610bdb565b5060010190565b818382375f9101908152919050565b5f60208284031215610c26575f80fd5b81518015158114610c35575f80fd5b9392505050565b5f60208284031215610c4c575f80fd5b5051919050565b8082018082111561045757610457610bdb565b5f600160ff1b8201610c7a57610c7a610bdb565b505f039056fea2646970667358221220ac76acbcdf18ce038e73d0fd059e7d9c58ba3034ceca44ee2cbb8a1336b30dab64736f6c63430008180033",
        sourceMap:
          "575:4165:121:-:0;;;925:159;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1836:26:120;;;;;;1880:43;;;-1:-1:-1;;;1880:43:120;;;;1006:12:121;;1836:26:120;1880:41;;:43;;;;;;;;;;;;;;1836:26;1880:43;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1;;;;;1872:51:120;;;;;1030:11:121::1;:47:::0;;-1:-1:-1;;;;;;1030:47:121::1;::::0;;;::::1;::::0;;;::::1;::::0;;;-1:-1:-1;575:4165:121;;-1:-1:-1;575:4165:121;14:147:124;-1:-1:-1;;;;;105:31:124;;95:42;;85:70;;151:1;148;141:12;85:70;14:147;:::o;166:441::-;269:6;277;330:2;318:9;309:7;305:23;301:32;298:52;;;346:1;343;336:12;298:52;378:9;372:16;397:47;438:5;397:47;:::i;:::-;513:2;498:18;;492:25;463:5;;-1:-1:-1;526:49:124;492:25;526:49;:::i;:::-;594:7;584:17;;;166:441;;;;;:::o;612:283::-;698:6;751:2;739:9;730:7;726:23;722:32;719:52;;;767:1;764;757:12;719:52;799:9;793:16;818:47;859:5;818:47;:::i;:::-;884:5;612:283;-1:-1:-1;;;612:283:124:o;:::-;575:4165:121;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        linkReferences: {},
      },
      deployedBytecode: {
        object:
          "0x608060405234801561000f575f80fd5b5060043610610106575f3560e01c80639f7724191161009e578063dc4c90d31161006e578063dc4c90d314610201578063e592dc93146101f3578063f961d1f414610228578063fbfa77cf14610243578063ff9cc8e61461026a575f80fd5b80639f772419146101a9578063ab6291fe146101c0578063b23855d3146101e0578063c089fa7c146101f3575f80fd5b80634b6a682d116100d95780634b6a682d1461017f5780635304d44e1461017f5780636f6657cb1461018d578063972e19a21461019b575f80fd5b80631e3b7a831461010a5780631ffe6a581461013b57806326d55e3f1461014e57806342cb7d4b1461016d575b5f80fd5b61011d61011836600461092f565b61027d565b6040516001600160e01b031990911681526020015b60405180910390f35b61011d6101493660046109b0565b61035b565b6101555f81565b6040516001600160a01b039091168152602001610132565b5f54610155906001600160a01b031681565b61011d610149366004610a23565b61011d61014936600461092f565b61011d610149366004610a7e565b6101b260015481565b604051908152602001610132565b6101d36101ce366004610af6565b610375565b6040516101329190610b35565b61011d6101ee36600461092f565b61045d565b61011d610149366004610b81565b6101557f000000000000000000000000000000000000000000000000000000000000000081565b6102306105c8565b60405161ffff9091168152602001610132565b6101557f000000000000000000000000000000000000000000000000000000000000000081565b61011d610278366004610b81565b61062d565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146102c75760405163570c108560e11b815260040160405180910390fd5b60018054905f6102d683610bef565b91905055505f6102e585610769565b5f546040516340c10f1960e01b81526001600160a01b038b81166004830152602482018490529293509116906340c10f19906044015f604051808303815f87803b158015610331575f80fd5b505af1158015610343573d5f803e3d5ffd5b50631e3b7a8360e01b9b9a5050505050505050505050565b5f604051630a85dc2960e01b815260040160405180910390fd5b6060336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146103c0576040516362df054560e01b815260040160405180910390fd5b5f80306001600160a01b031685856040516103dc929190610c07565b5f604051808303815f865af19150503d805f8114610415576040519150601f19603f3d011682016040523d82523d5f602084013e61041a565b606091505b5091509150811561042e5791506104579050565b80515f0361044f576040516314815f4760e31b815260040160405180910390fd5b805160208201fd5b92915050565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146104a75760405163570c108560e11b815260040160405180910390fd5b5f6104b185610769565b5f80546040516323b872dd60e01b81526001600160a01b038c8116600483015260248201939093526044810184905292935016906323b872dd906064016020604051808303815f875af115801561050a573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061052e9190610c16565b6105b45760405162461bcd60e51b815260206004820152604660248201527f5472616e73666572206661696c65643a204d75737420617070726f766520746f60448201527f6b656e207472616e73666572206265666f72652072656d6f76696e67206c697160648201526575696469747960d01b608482015260a4015b60405180910390fd5b5063b23855d360e01b979650505050505050565b60408051610160810182525f808252602082018190529181018290526001606082018190526080820181905260a082015260c0810182905260e081018290526101008101829052610120810182905261014081018290526106289061079d565b905090565b5f336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146106775760405163570c108560e11b815260040160405180910390fd5b5f6106858560400135610877565b5f546040516370a0823160e01b81526001600160a01b038a811660048301529293508392909116906370a0823190602401602060405180830381865afa1580156106d1573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906106f59190610c3c565b10156107535760405162461bcd60e51b815260206004820152602760248201527f496e73756666696369656e7420746f6b656e7320746f2072656d6f7665206c696044820152667175696469747960c81b60648201526084016105ab565b50600162319b8d60e11b03199695505050505050565b5f8061077d6107788460801c90565b61088d565b90505f6107898461088d565b90506107958183610c53565b949350505050565b5f8161014001516107ae575f6107b2565b6104005b8261012001516107c2575f6107c6565b6102005b8361010001516107d6575f6107da565b6101005b8460e001516107e9575f6107ec565b60805b8560c001516107fb575f6107fe565b60405b8660a0015161080d575f610810565b60205b876080015161081f575f610822565b60105b8860600151610831575f610834565b60085b8960400151610843575f610846565b60045b8a60200151610855575f610858565b60025b8b51610864575f610867565b60015b1717171717171717171792915050565b5f808212156108895761045782610c66565b5090565b5f8082600f0b12156108a65781600f0b61045790610c66565b50600f0b90565b6001600160a01b03811681146108c1575f80fd5b50565b5f60c082840312156108d4575f80fd5b50919050565b5f606082840312156108d4575f80fd5b5f8083601f8401126108fa575f80fd5b50813567ffffffffffffffff811115610911575f80fd5b602083019150836020828501011115610928575f80fd5b9250929050565b5f805f805f806101808789031215610945575f80fd5b8635610950816108ad565b955061095f88602089016108c4565b945061096e8860e089016108da565b9350610140870135925061016087013567ffffffffffffffff811115610992575f80fd5b61099e89828a016108ea565b979a9699509497509295939492505050565b5f805f805f8061014087890312156109c6575f80fd5b86356109d1816108ad565b95506109e088602089016108c4565b945060e08701356109f0816108ad565b9350610100870135600281900b8114610a07575f80fd5b925061012087013567ffffffffffffffff811115610992575f80fd5b5f805f805f806101408789031215610a39575f80fd5b8635610a44816108ad565b9550610a5388602089016108c4565b945060e08701359350610100870135925061012087013567ffffffffffffffff811115610992575f80fd5b5f805f805f6101208688031215610a93575f80fd5b8535610a9e816108ad565b9450610aad87602088016108c4565b935060e0860135610abd816108ad565b925061010086013567ffffffffffffffff811115610ad9575f80fd5b610ae5888289016108ea565b969995985093965092949392505050565b5f8060208385031215610b07575f80fd5b823567ffffffffffffffff811115610b1d575f80fd5b610b29858286016108ea565b90969095509350505050565b5f602080835283518060208501525f5b81811015610b6157858101830151858201604001528201610b45565b505f604082860101526040601f19601f8301168501019250505092915050565b5f805f805f6101608688031215610b96575f80fd5b8535610ba1816108ad565b9450610bb087602088016108c4565b9350610bbf8760e088016108da565b925061014086013567ffffffffffffffff811115610ad9575f80fd5b634e487b7160e01b5f52601160045260245ffd5b5f60018201610c0057610c00610bdb565b5060010190565b818382375f9101908152919050565b5f60208284031215610c26575f80fd5b81518015158114610c35575f80fd5b9392505050565b5f60208284031215610c4c575f80fd5b5051919050565b8082018082111561045757610457610bdb565b5f600160ff1b8201610c7a57610c7a610bdb565b505f039056fea2646970667358221220ac76acbcdf18ce038e73d0fd059e7d9c58ba3034ceca44ee2cbb8a1336b30dab64736f6c63430008180033",
        sourceMap:
          "575:4165:121:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1836:462;;;;;;:::i;:::-;;:::i;:::-;;;-1:-1:-1;;;;;;1936:33:124;;;1918:52;;1906:2;1891:18;1836:462:121;;;;;;;;3445:190:120;;;;;;:::i;:::-;;:::i;729:50:121:-;;777:1;729:50;;;;;-1:-1:-1;;;;;3135:32:124;;;3117:51;;3105:2;3090:18;729:50:121;2971:203:124;656:31:121;;;;;-1:-1:-1;;;;;656:31:121;;;5084:189:120;;;;;;:::i;4860:218::-;;;;;;:::i;3283:156::-;;;;;;:::i;693:25:121:-;;;;;;;;;6117::124;;;6105:2;6090:18;693:25:121;5971:177:124;2820:457:120;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;3171:536:121:-;;;;;;:::i;:::-;;:::i;3641:234:120:-;;;;;;:::i;1658:43::-;;;;;1090:606:121;;;:::i;:::-;;;9181:6:124;9169:19;;;9151:38;;9139:2;9124:18;1090:606:121;9007:188:124;1749:29:120;;;;;2463:535:121;;;;;;:::i;:::-;;:::i;1836:462::-;2078:6;2035:10:120;-1:-1:-1;;;;;2057:11:120;2035:34;;2031:63;;2078:16;;-1:-1:-1;;;2078:16:120;;;;;;;;;;;2031:63;2097:10:121::1;:12:::0;;;:10:::1;:12;::::0;::::1;:::i;:::-;;;;;;2143:14;2160:42;2189:12;2160:28;:42::i;:::-;2212:11;::::0;:30:::1;::::0;-1:-1:-1;;;2212:30:121;;-1:-1:-1;;;;;9888:32:124;;;2212:30:121::1;::::0;::::1;9870:51:124::0;9937:18;;;9930:34;;;2143:59:121;;-1:-1:-1;2212:11:121;::::1;::::0;:16:::1;::::0;9843:18:124;;2212:30:121::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;;;;2260:31:121;1836:462;-1:-1:-1;;;;;;;;;;;1836:462:121:o;3445:190:120:-;3579:6;3608:20;;-1:-1:-1;;;3608:20:120;;;;;;;;;;;2820:457;2899:12;2204:10;-1:-1:-1;;;;;2226:5:120;2204:28;;2200:51;;2241:10;;-1:-1:-1;;;2241:10:120;;;;;;;;;;;2200:51;2924:12:::1;2938:23:::0;2973:4:::1;-1:-1:-1::0;;;;;2965:18:120::1;2984:4;;2965:24;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2923:66;;;;3003:7;2999:30;;;3019:10:::0;-1:-1:-1;3012:17:120::1;::::0;-1:-1:-1;3012:17:120::1;2999:30;3043:10;:17;3064:1;3043:22:::0;3039:48:::1;;3074:13;;-1:-1:-1::0;;;3074:13:120::1;;;;;;;;;;;3039:48;3249:10;3243:17;3238:2;3226:10;3222:19;3215:46;2261:1;2820:457:::0;;;;:::o;3171:536:121:-;3416:6;2035:10:120;-1:-1:-1;;;;;2057:11:120;2035:34;;2031:63;;2078:16;;-1:-1:-1;;;2078:16:120;;;;;;;;;;;2031:63;3443:14:121::1;3460:42;3489:12;3460:28;:42::i;:::-;3520:11;::::0;;:53:::1;::::0;-1:-1:-1;;;3520:53:121;;-1:-1:-1;;;;;10509:15:124;;;3520:53:121::1;::::0;::::1;10491:34:124::0;10541:18;;;10534:43;;;;10593:18;;;10586:34;;;3443:59:121;;-1:-1:-1;3520:11:121::1;::::0;:24:::1;::::0;10426:18:124;;3520:53:121::1;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;3512:136;;;::::0;-1:-1:-1;;;3512:136:121;;11115:2:124;3512:136:121::1;::::0;::::1;11097:21:124::0;11154:2;11134:18;;;11127:30;11193:34;11173:18;;;11166:62;11264:34;11244:18;;;11237:62;-1:-1:-1;;;11315:19:124;;;11308:37;11362:19;;3512:136:121::1;;;;;;;;;-1:-1:-1::0;;;;3666:34:121;3171:536;-1:-1:-1;;;;;;;3171:536:121:o;1090:606::-;1227:452;;;;;;;;1160:6;1227:452;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1185:504;;:28;:504::i;:::-;1178:511;;1090:606;:::o;2463:535::-;2681:6;2035:10:120;-1:-1:-1;;;;;2057:11:120;2035:34;;2031:63;;2078:16;;-1:-1:-1;;;2078:16:120;;;;;;;;;;;2031:63;2708:14:121::1;2725:42;2745:6;:21;;;2725:19;:42::i;:::-;2857:11;::::0;:27:::1;::::0;-1:-1:-1;;;2857:27:121;;-1:-1:-1;;;;;3135:32:124;;;2857:27:121::1;::::0;::::1;3117:51:124::0;2708:59:121;;-1:-1:-1;2708:59:121;;2857:11;;::::1;::::0;:21:::1;::::0;3090:18:124;;2857:27:121::1;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:37;;2849:89;;;::::0;-1:-1:-1;;;2849:89:121;;11783:2:124;2849:89:121::1;::::0;::::1;11765:21:124::0;11822:2;11802:18;;;11795:30;11861:34;11841:18;;;11834:62;-1:-1:-1;;;11912:18:124;;;11905:37;11959:19;;2849:89:121::1;11581:403:124::0;2849:89:121::1;-1:-1:-1::0;;;;;;;2956:35:121;2463:535;-1:-1:-1;;;;;;2463:535:121:o;3819:279::-;3906:7;3925:15;3943:43;3963:22;:12;1336:3:76;1332:22;;1160:210;3963:22:121;3943:19;:43::i;:::-;3925:61;-1:-1:-1;3996:15:121;4014:43;4034:12;3943:19;:43::i;4014:::-;3996:61;-1:-1:-1;4074:17:121;3996:61;4074:7;:17;:::i;:::-;4067:24;3819:279;-1:-1:-1;;;;3819:279:121:o;5473:1095:120:-;5566:6;6504:11;:16;;;:46;;6549:1;6504:46;;;6523:23;6504:46;6423:11;:23;;;:60;;6482:1;6423:60;;;6449:30;6423:60;6340:11;:24;;;:62;;6401:1;6340:62;;;6367:31;6340:62;6263:11;:21;;;:56;;6318:1;6263:56;;;6287:28;6263:56;6184:11;:22;;;:58;;6241:1;6184:58;;;6209:29;6184:58;6084:11;:32;;;:79;;6162:1;6084:79;;;6119:40;6084:79;5982:11;:33;;;:81;;6062:1;5982:81;;;6018:41;5982:81;5888:11;:29;;;:73;;5960:1;5888:73;;;5920:37;5888:73;5792:11;:30;;;:75;;5866:1;5792:75;;;5825:38;5792:75;5703:11;:27;;;:68;;5770:1;5703:68;;;5733:34;5703:68;5612:28;;:70;;5681:1;5612:70;;;5643:1;5612:70;5611:161;:257;:351;:453;:553;:632;:709;:792;:873;:940;;5473:1095;-1:-1:-1;;5473:1095:120:o;4432:306:121:-;4497:7;4527:1;4519:5;:9;4516:216;;;4559:6;4560:5;4559:6;:::i;4516:216::-;-1:-1:-1;4679:5:121;4432:306::o;4104:322::-;4169:7;4199:1;4191:5;:9;;;4188:232;;;4239:5;4232:13;;4231:14;;;:::i;4188:232::-;-1:-1:-1;4359:13:121;;;4104:322::o;14:131:124:-;-1:-1:-1;;;;;89:31:124;;79:42;;69:70;;135:1;132;125:12;69:70;14:131;:::o;150:156::-;210:5;255:3;246:6;241:3;237:16;233:26;230:46;;;272:1;269;262:12;230:46;-1:-1:-1;294:6:124;150:156;-1:-1:-1;150:156:124:o;311:169::-;385:5;430:2;421:6;416:3;412:16;408:25;405:45;;;446:1;443;436:12;485:347;536:8;546:6;600:3;593:4;585:6;581:17;577:27;567:55;;618:1;615;608:12;567:55;-1:-1:-1;641:20:124;;684:18;673:30;;670:50;;;716:1;713;706:12;670:50;753:4;745:6;741:17;729:29;;805:3;798:4;789:6;781;777:19;773:30;770:39;767:59;;;822:1;819;812:12;767:59;485:347;;;;;:::o;837:932::-;1047:6;1055;1063;1071;1079;1087;1140:3;1128:9;1119:7;1115:23;1111:33;1108:53;;;1157:1;1154;1147:12;1108:53;1196:9;1183:23;1215:31;1240:5;1215:31;:::i;:::-;1265:5;-1:-1:-1;1289:63:124;1344:7;1339:2;1324:18;;1289:63;:::i;:::-;1279:73;;1371:78;1441:7;1435:3;1424:9;1420:19;1371:78;:::i;:::-;1361:88;;1496:3;1485:9;1481:19;1468:33;1458:43;;1552:3;1541:9;1537:19;1524:33;1580:18;1572:6;1569:30;1566:50;;;1612:1;1609;1602:12;1566:50;1651:58;1701:7;1692:6;1681:9;1677:22;1651:58;:::i;:::-;837:932;;;;-1:-1:-1;837:932:124;;-1:-1:-1;837:932:124;;1728:8;;837:932;-1:-1:-1;;;837:932:124:o;1981:985::-;2113:6;2121;2129;2137;2145;2153;2206:3;2194:9;2185:7;2181:23;2177:33;2174:53;;;2223:1;2220;2213:12;2174:53;2262:9;2249:23;2281:31;2306:5;2281:31;:::i;:::-;2331:5;-1:-1:-1;2355:63:124;2410:7;2405:2;2390:18;;2355:63;:::i;:::-;2345:73;;2470:3;2459:9;2455:19;2442:33;2484;2509:7;2484:33;:::i;:::-;2536:7;-1:-1:-1;2595:3:124;2580:19;;2567:33;2642:1;2631:22;;;2619:35;;2609:63;;2668:1;2665;2658:12;2609:63;2691:7;-1:-1:-1;2749:3:124;2734:19;;2721:33;2777:18;2766:30;;2763:50;;;2809:1;2806;2799:12;3409:811;3543:6;3551;3559;3567;3575;3583;3636:3;3624:9;3615:7;3611:23;3607:33;3604:53;;;3653:1;3650;3643:12;3604:53;3692:9;3679:23;3711:31;3736:5;3711:31;:::i;:::-;3761:5;-1:-1:-1;3785:63:124;3840:7;3835:2;3820:18;;3785:63;:::i;:::-;3775:73;;3895:3;3884:9;3880:19;3867:33;3857:43;;3947:3;3936:9;3932:19;3919:33;3909:43;;4003:3;3992:9;3988:19;3975:33;4031:18;4023:6;4020:30;4017:50;;;4063:1;4060;4053:12;5151:815;5276:6;5284;5292;5300;5308;5361:3;5349:9;5340:7;5336:23;5332:33;5329:53;;;5378:1;5375;5368:12;5329:53;5417:9;5404:23;5436:31;5461:5;5436:31;:::i;:::-;5486:5;-1:-1:-1;5510:63:124;5565:7;5560:2;5545:18;;5510:63;:::i;:::-;5500:73;;5625:3;5614:9;5610:19;5597:33;5639;5664:7;5639:33;:::i;:::-;5691:7;-1:-1:-1;5749:3:124;5734:19;;5721:33;5777:18;5766:30;;5763:50;;;5809:1;5806;5799:12;5763:50;5848:58;5898:7;5889:6;5878:9;5874:22;5848:58;:::i;:::-;5151:815;;;;-1:-1:-1;5151:815:124;;-1:-1:-1;5925:8:124;;5822:84;5151:815;-1:-1:-1;;;5151:815:124:o;6153:409::-;6223:6;6231;6284:2;6272:9;6263:7;6259:23;6255:32;6252:52;;;6300:1;6297;6290:12;6252:52;6340:9;6327:23;6373:18;6365:6;6362:30;6359:50;;;6405:1;6402;6395:12;6359:50;6444:58;6494:7;6485:6;6474:9;6470:22;6444:58;:::i;:::-;6521:8;;6418:84;;-1:-1:-1;6153:409:124;-1:-1:-1;;;;6153:409:124:o;6567:546::-;6677:4;6706:2;6735;6724:9;6717:21;6767:6;6761:13;6810:6;6805:2;6794:9;6790:18;6783:34;6835:1;6845:140;6859:6;6856:1;6853:13;6845:140;;;6954:14;;;6950:23;;6944:30;6920:17;;;6939:2;6916:26;6909:66;6874:10;;6845:140;;;6849:3;7034:1;7029:2;7020:6;7009:9;7005:22;7001:31;6994:42;7104:2;7097;7093:7;7088:2;7080:6;7076:15;7072:29;7061:9;7057:45;7053:54;7045:62;;;;6567:546;;;;:::o;7118:829::-;7285:6;7293;7301;7309;7317;7370:3;7358:9;7349:7;7345:23;7341:33;7338:53;;;7387:1;7384;7377:12;7338:53;7426:9;7413:23;7445:31;7470:5;7445:31;:::i;:::-;7495:5;-1:-1:-1;7519:63:124;7574:7;7569:2;7554:18;;7519:63;:::i;:::-;7509:73;;7601:78;7671:7;7665:3;7654:9;7650:19;7601:78;:::i;:::-;7591:88;;7730:3;7719:9;7715:19;7702:33;7758:18;7750:6;7747:30;7744:50;;;7790:1;7787;7780:12;9424:127;9485:10;9480:3;9476:20;9473:1;9466:31;9516:4;9513:1;9506:15;9540:4;9537:1;9530:15;9556:135;9595:3;9616:17;;;9613:43;;9636:18;;:::i;:::-;-1:-1:-1;9683:1:124;9672:13;;9556:135::o;9975:271::-;10158:6;10150;10145:3;10132:33;10114:3;10184:16;;10209:13;;;10184:16;9975:271;-1:-1:-1;9975:271:124:o;10631:277::-;10698:6;10751:2;10739:9;10730:7;10726:23;10722:32;10719:52;;;10767:1;10764;10757:12;10719:52;10799:9;10793:16;10852:5;10845:13;10838:21;10831:5;10828:32;10818:60;;10874:1;10871;10864:12;10818:60;10897:5;10631:277;-1:-1:-1;;;10631:277:124:o;11392:184::-;11462:6;11515:2;11503:9;11494:7;11490:23;11486:32;11483:52;;;11531:1;11528;11521:12;11483:52;-1:-1:-1;11554:16:124;;11392:184;-1:-1:-1;11392:184:124:o;11989:125::-;12054:9;;;12075:10;;;12072:36;;;12088:18;;:::i;12119:136::-;12154:3;-1:-1:-1;;;12175:22:124;;12172:48;;12200:18;;:::i;:::-;-1:-1:-1;12240:1:124;12236:13;;12119:136::o",
        linkReferences: {},
        immutableReferences: {
          "63375": [
            {
              start: 518,
              length: 32,
            },
            {
              start: 649,
              length: 32,
            },
            {
              start: 1129,
              length: 32,
            },
            {
              start: 1593,
              length: 32,
            },
          ],
          "63379": [
            {
              start: 584,
              length: 32,
            },
            {
              start: 898,
              length: 32,
            },
          ],
        },
      },
      methodIdentifiers: {
        "BURN_CONTRACT()": "26d55e3f",
        "afterAddLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),int256,bytes)":
          "1e3b7a83",
        "afterDonate(address,(address,address,address,address,uint24,bytes32),uint256,uint256,bytes)": "5304d44e",
        "afterInitialize(address,(address,address,address,address,uint24,bytes32),uint160,int24,bytes)": "1ffe6a58",
        "afterRemoveLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),int256,bytes)":
          "b23855d3",
        "afterSwap(address,(address,address,address,address,uint24,bytes32),(bool,int256,uint160),int256,bytes)":
          "6f6657cb",
        "beforeAddLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),bytes)":
          "c089fa7c",
        "beforeDonate(address,(address,address,address,address,uint24,bytes32),uint256,uint256,bytes)": "4b6a682d",
        "beforeInitialize(address,(address,address,address,address,uint24,bytes32),uint160,bytes)": "972e19a2",
        "beforeRemoveLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),bytes)":
          "ff9cc8e6",
        "beforeSwap(address,(address,address,address,address,uint24,bytes32),(bool,int256,uint160),bytes)": "e592dc93",
        "getHooksRegistrationBitmap()": "f961d1f4",
        "lockAcquired(bytes)": "ab6291fe",
        "mintPoints()": "9f772419",
        "poolManager()": "dc4c90d3",
        "stablepoint()": "42cb7d4b",
        "vault()": "fbfa77cf",
      },
      rawMetadata:
        '{"compiler":{"version":"0.8.24+commit.e11b9ed9"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"contract ICLPoolManager","name":"_poolManager","type":"address"},{"internalType":"address","name":"_stablepointAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"HookNotImplemented","type":"error"},{"inputs":[],"name":"InvalidPool","type":"error"},{"inputs":[],"name":"LockFailure","type":"error"},{"inputs":[],"name":"NotPoolManager","type":"error"},{"inputs":[],"name":"NotSelf","type":"error"},{"inputs":[],"name":"NotVault","type":"error"},{"inputs":[],"name":"BURN_CONTRACT","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"key","type":"tuple"},{"components":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"int256","name":"liquidityDelta","type":"int256"}],"internalType":"struct ICLPoolManager.ModifyLiquidityParams","name":"","type":"tuple"},{"internalType":"BalanceDelta","name":"balanceDelta","type":"int256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"afterAddLiquidity","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"","type":"tuple"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"afterDonate","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"","type":"tuple"},{"internalType":"uint160","name":"","type":"uint160"},{"internalType":"int24","name":"","type":"int24"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"afterInitialize","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"key","type":"tuple"},{"components":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"int256","name":"liquidityDelta","type":"int256"}],"internalType":"struct ICLPoolManager.ModifyLiquidityParams","name":"","type":"tuple"},{"internalType":"BalanceDelta","name":"balanceDelta","type":"int256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"afterRemoveLiquidity","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"","type":"tuple"},{"components":[{"internalType":"bool","name":"zeroForOne","type":"bool"},{"internalType":"int256","name":"amountSpecified","type":"int256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ICLPoolManager.SwapParams","name":"","type":"tuple"},{"internalType":"BalanceDelta","name":"","type":"int256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"afterSwap","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"","type":"tuple"},{"components":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"int256","name":"liquidityDelta","type":"int256"}],"internalType":"struct ICLPoolManager.ModifyLiquidityParams","name":"","type":"tuple"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"beforeAddLiquidity","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"","type":"tuple"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"beforeDonate","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"","type":"tuple"},{"internalType":"uint160","name":"","type":"uint160"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"beforeInitialize","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"},{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"key","type":"tuple"},{"components":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"int256","name":"liquidityDelta","type":"int256"}],"internalType":"struct ICLPoolManager.ModifyLiquidityParams","name":"params","type":"tuple"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"beforeRemoveLiquidity","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"","type":"tuple"},{"components":[{"internalType":"bool","name":"zeroForOne","type":"bool"},{"internalType":"int256","name":"amountSpecified","type":"int256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ICLPoolManager.SwapParams","name":"","type":"tuple"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"beforeSwap","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getHooksRegistrationBitmap","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"lockAcquired","outputs":[{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintPoints","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolManager","outputs":[{"internalType":"contract ICLPoolManager","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stablepoint","outputs":[{"internalType":"contract IStablepoint","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"contract IVault","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{"afterAddLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),int256,bytes)":{"details":"Mints tokens proportional to the added liquidity"},"afterRemoveLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),int256,bytes)":{"details":"Burns the equivalent amount of tokens by transferring them to the burn address "},"beforeRemoveLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),bytes)":{"details":"Checks if the user has enough tokens to remove the specified liquidity"},"lockAcquired(bytes)":{"details":"Helper function when the hook needs to get a lock from the vault. See      https://github.com/pancakeswap/pancake-v4-hooks oh hooks which perform vault.lock()"}},"version":1},"userdoc":{"kind":"user","methods":{"afterAddLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),int256,bytes)":{"notice":"Hook function that gets called after liquidity is added"},"afterRemoveLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),int256,bytes)":{"notice":"Hook function that gets called after liquidity is removed"},"beforeRemoveLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),bytes)":{"notice":"Hook function that gets called before liquidity is removed"},"poolManager()":{"notice":"The address of the pool manager"},"vault()":{"notice":"The address of the vault"}},"notice":"Based on CLCounterHook, this hook will mint lp tokens for stablecoin pools","version":1}},"settings":{"compilationTarget":{"src/pool-cl/MintPointsHook.sol":"MintPointsHook"},"evmVersion":"cancun","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@openzeppelin/=lib/openzeppelin-contracts/",":@pancakeswap/v4-core/=lib/pancake-v4-core/",":@pancakeswap/v4-periphery/=lib/pancake-v4-periphery/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-gas-snapshot/=lib/pancake-v4-core/lib/forge-gas-snapshot/src/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":openzeppelin/=lib/openzeppelin-contracts/contracts/",":pancake-v4-core/=lib/pancake-v4-core/",":pancake-v4-periphery/=lib/pancake-v4-periphery/",":solmate/=lib/solmate/src/"]},"sources":{"lib/openzeppelin-contracts/contracts/access/Ownable.sol":{"keccak256":"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218","license":"MIT","urls":["bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32","dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]},"lib/pancake-v4-core/src/Extsload.sol":{"keccak256":"0xd2196db77d9aeaffc33b1aaa209519afbe88a82172a9450c720dd8eada876cac","license":"GPL-2.0-or-later","urls":["bzz-raw://aa2de769ee93ff464ad4c45c100cea7872062171d8af85608aae592e56619c9e","dweb:/ipfs/QmPHLzfrtSapY1d9E7CNfLyy9QHcMGFNvLuqMARW9wp8t4"]},"lib/pancake-v4-core/src/Fees.sol":{"keccak256":"0x0a625102d1fc48d66d67b8f14142f51d281c20e6c40b39cc8fe7fc2a5d6bae9d","license":"GPL-2.0-or-later","urls":["bzz-raw://2ecec150483876382f22a1b90ee1c847572e0db27a72d7e1a8a1a6b28ee2105c","dweb:/ipfs/QmS2gGZtoH8VDngCrhMgq9djztnY7FUxmXkwdUQFaobaTG"]},"lib/pancake-v4-core/src/interfaces/IERC20Minimal.sol":{"keccak256":"0xd21325930292346a3d8ccd787a3c1f2e96da5af5b8b1871f3230ef40a2dfb080","license":"MIT","urls":["bzz-raw://adc2083a73040d486be24418b86bd46380aaac7a06923d8a3b1675d6a03d0f99","dweb:/ipfs/QmVE6sj6CBdR1tus2aYQoRTKFtjGaUufZN2C9QV88birgc"]},"lib/pancake-v4-core/src/interfaces/IExtsload.sol":{"keccak256":"0x78efad54e9dd5715909ae6179716a0181e8f3cbe57412a4cbfb1dc025ff62790","license":"MIT","urls":["bzz-raw://dea81efed1a024bf6fd70f233816bfa5b7e8eb4c9bb3d18fe5a8440f88744e8f","dweb:/ipfs/QmRdMBU11DRGPSUkJcf6Zcvva5GeGge66gj3QQYrBtjcFf"]},"lib/pancake-v4-core/src/interfaces/IFees.sol":{"keccak256":"0x9fc9f19409ea458c5ea3ef86bb40e730743ba08b00838617747587a964e4da41","license":"MIT","urls":["bzz-raw://ae94177946ad92c24542db75a7973acefd4cef893ff97f58bdb04e23444a43b1","dweb:/ipfs/QmQ5MKheHeb1yHi3BGbuqnygtDQJKXDS7YisK1oQsRBCSm"]},"lib/pancake-v4-core/src/interfaces/IHooks.sol":{"keccak256":"0x1a47a0c52d038f3f231de66c7d558fc6dfc663f4b24c6e95bef922423cfdc027","license":"MIT","urls":["bzz-raw://eb2792b93a6601ba00141245e8101bd35c91df2d7e13e8cc31966ed85fde291a","dweb:/ipfs/QmTihJz4NjA1G4217v58LaBYwLo5xaMXyLGUrbaFKXRLDd"]},"lib/pancake-v4-core/src/interfaces/IPoolManager.sol":{"keccak256":"0xfd7838e6d0fea2d6b54f9630565eb33c9faa93f22855aea4e8da28daa702a753","license":"MIT","urls":["bzz-raw://6d30982bdc29e3bf25d8777197415320c073e3ff6685e5650b96578cfecd0ae8","dweb:/ipfs/QmTJS36mqJfFFsBBTDDBxgjVtCmFHwwebyuufsoxtdnjiS"]},"lib/pancake-v4-core/src/interfaces/IProtocolFeeController.sol":{"keccak256":"0xdc87cf4a93fd3012a3ebc291a2191ef6b764261b80d0923524cb941ac92d8559","license":"MIT","urls":["bzz-raw://6ab876db31ea99e214e95ca2ca0e7ed9b2cb8917fa63e02b45d613c41774fda3","dweb:/ipfs/QmWdc6LZ4acTGWoiWkhkCWJyv3uBRXd4fjrzoCoZqwmokk"]},"lib/pancake-v4-core/src/interfaces/IVault.sol":{"keccak256":"0xd014af3287d3e97a53c9fdd29a349a050605f04a4ea62280389564e1d935faf0","license":"MIT","urls":["bzz-raw://327661e6aa0491f82996abcbb21f6d2489c36893f289706f37721894ad0aceba","dweb:/ipfs/QmYBmBHV6NPY8wHpqu2SZTdZ5KVDZ8912816DhB9H1Xj5L"]},"lib/pancake-v4-core/src/interfaces/IVaultToken.sol":{"keccak256":"0xd797ac4079da85c7a567113387e28c80e7500f4d86c8135db8de95abdf5c6e99","license":"MIT","urls":["bzz-raw://3aef9e38b91d5c8dae9f6c363e29cab77b761a69ceee9fbd24403154a03b8660","dweb:/ipfs/QmeiSkKB2M5knX5JB7rUiCNoVXAmxpm5VWumeStrDjBFDB"]},"lib/pancake-v4-core/src/libraries/FeeLibrary.sol":{"keccak256":"0xd3a6182978d4907ef5722b0469b9253846bec3d1da25dd0a7a631c25e026b78c","license":"GPL-2.0-or-later","urls":["bzz-raw://fc87807b1f4c8530daa0b4f2d562a276bcd2021ecd8a43bc46093f284aba4aaa","dweb:/ipfs/Qmawd4ppbkBSTsmY4rBkTyLVsKXcmVHQRvaXAxjpmU8EcA"]},"lib/pancake-v4-core/src/libraries/Hooks.sol":{"keccak256":"0xf731ed0b831d2d3259d75ae3c86a3f9693ca361b9c4d32990bc1f5ed968f871a","license":"GPL-2.0-or-later","urls":["bzz-raw://4749531b1ebf6179cb80595ca7ea305a3176892d8c6548f70466956f2e99fb80","dweb:/ipfs/QmNjtS6tnSNTpCuurq9zysJmfGLNnnhQgMrYjGC3y6WgyG"]},"lib/pancake-v4-core/src/libraries/SafeCast.sol":{"keccak256":"0x7e7f09dd3e83f8a46295959888b10c52b3a3a470479bed7f9297d9d84c945e55","license":"GPL-2.0-or-later","urls":["bzz-raw://ed5355d2b52d395beb9f6d961c9a46ea36dc261a34b7b4b1df44881eb73594db","dweb:/ipfs/QmeGihtbD6sgbJj5CRLxkyoXQbBGgJg2YL4HDXscNTjXSk"]},"lib/pancake-v4-core/src/libraries/math/Encoded.sol":{"keccak256":"0x59b6b27b72031b703e3fe0ef2b3d8f693153d4ed9012f308d255df662508668a","license":"GPL-2.0-or-later","urls":["bzz-raw://996ee8ad722665707ccbaeac8e7f6991932fbd8377971fa1e197d347f87fefda","dweb:/ipfs/QmYbimZuo2C7DFHgSbQ5egtoJP3D5RAKLrZoX52QE6E4vS"]},"lib/pancake-v4-core/src/libraries/math/ParametersHelper.sol":{"keccak256":"0x05449282a65b9a064ecfe21668d335ab700e3f6e6aec9c0e55d04490984926c2","license":"GPL-2.0-or-later","urls":["bzz-raw://8e69804d5020015cbeb835d3e8308f9999b7bf1677d0ecf294c45cf08649e740","dweb:/ipfs/QmWcu9Ph1AoqXiWWaKUaHPUr48jCkj2hueTeCgbgXHCDNS"]},"lib/pancake-v4-core/src/pool-cl/CLPoolManager.sol":{"keccak256":"0x2363ded9bb8c16f33cac76680002c70e10bad92a7908eb8963dcd797aa057ea5","license":"GPL-2.0-or-later","urls":["bzz-raw://98002539916b106228b6bb52f8052eaa29584801f2d03c1e6aa791a156729e65","dweb:/ipfs/QmX5aGGsKU7gi1ZenAYjZ4z9Q7PmupdeKpmziaWYozHJhK"]},"lib/pancake-v4-core/src/pool-cl/interfaces/ICLDynamicFeeManager.sol":{"keccak256":"0x2fa7f6ed7b76366549089ef7fd1b980196d0e301d5f4d901cbe90c47b75e677c","license":"MIT","urls":["bzz-raw://579b089623a48a2816280878be145ed7cde6bcdef8be0b5a024fbdc2a93107f0","dweb:/ipfs/QmRMcvd6vyuLCtvGuq3SpQsTMMaBn76DgPNWLZiCZEJECw"]},"lib/pancake-v4-core/src/pool-cl/interfaces/ICLHooks.sol":{"keccak256":"0x0456843a69042b94d37fecbdbad854a56e7ada37e0b6daca0b16a55ca8d7dfea","license":"MIT","urls":["bzz-raw://67cbdc923ccab6ba5efcc80a16581be21d24ef51c22b10ed49791e7e055d3090","dweb:/ipfs/Qmamkk33T8YuL4iPejNm7ocm6zfcfsYWNES1kAACceguPR"]},"lib/pancake-v4-core/src/pool-cl/interfaces/ICLLmPool.sol":{"keccak256":"0x3570603dcf8e8ad3edd24caab4377a906fce3d39f7819f870355148813b20e0f","license":"MIT","urls":["bzz-raw://dfc6e2700fd036ffbede4d9680d1f84c8555ed48abb8368d34a5e73f5666a2cc","dweb:/ipfs/QmcZ5ED7Eabn1GdKsbpCuiBGCD6FVsFEfP6g1adTdHPMWH"]},"lib/pancake-v4-core/src/pool-cl/interfaces/ICLPoolManager.sol":{"keccak256":"0x677842da926aea5808e27e1b73478f0b2774f961d9942faccb57796ee26b95de","license":"MIT","urls":["bzz-raw://34fbd5a54761336fbc26135fa1529287f6e80e8e09c2401e67303ffd92816f80","dweb:/ipfs/QmQLb7n563h7iVwRRCJHGx2n8V7bs5P9X2wwy9RbNjJQsT"]},"lib/pancake-v4-core/src/pool-cl/libraries/BitMath.sol":{"keccak256":"0x66c454a22a5ba6cd4b59192080a52ef97cca8806497f7712310e56757603604d","license":"GPL-2.0-or-later","urls":["bzz-raw://4f5d152c3179ef8bde19ebb82604a8cbec1260d2c13a41ce715d185298c5cc61","dweb:/ipfs/QmYTZa2PXxdqcqtk5X1jvg4VunogcMF6NSjLjurNEyav1x"]},"lib/pancake-v4-core/src/pool-cl/libraries/CLPool.sol":{"keccak256":"0x8f94dc579a6ff19f2fa963d2961704a279e2615fd1aec0f34ea66bd7a138c320","license":"GPL-2.0-or-later","urls":["bzz-raw://ce6bc06313edbdbd26c08fe915107a5b676a64cc7dbed8ebd39726e75df52ad2","dweb:/ipfs/QmU7jukhNuyD7bjM85TRy68YRKuBqbCTzgTdqGLmxtjbFR"]},"lib/pancake-v4-core/src/pool-cl/libraries/CLPoolParametersHelper.sol":{"keccak256":"0x69a2862f6d3b6618ed647a729dca82cd5b3018ec7f3e74a5477381125da05f0b","license":"GPL-2.0-or-later","urls":["bzz-raw://ab0ca249d487a34f3826db9aedb36d15546e7b7f48f3adaa730051932e5a24a4","dweb:/ipfs/QmRCcczRDGrEdERysoc1vTD7r5S8NYJe79EyjHHqsGCNJF"]},"lib/pancake-v4-core/src/pool-cl/libraries/CLPosition.sol":{"keccak256":"0x8412a5ff367a6aefc50111fa17787a29ae154b9955b5d07fc0f8658cf0fca21f","license":"GPL-2.0-or-later","urls":["bzz-raw://90ce40bf2cc0a4c7dfa73ec1b5405670ec73762448a9b3628faabbf4f61d0eff","dweb:/ipfs/QmdiDVcDkeN7FkpndjD8NzQnR8QfEzNfGnQrn3vApmdjBj"]},"lib/pancake-v4-core/src/pool-cl/libraries/FixedPoint128.sol":{"keccak256":"0x55d1efee27d9e43b3d94cea311c82aed7f9b1c6adfe67b7b7bf50211c8cd8186","license":"GPL-2.0-or-later","urls":["bzz-raw://f9d383cb4e7b54482d1dc5fe6e466432901552619250eaf4f25e0b33629586db","dweb:/ipfs/QmTpwkQBQPREn6gYBPaPcCo5JMkKWw8hiMEUNnTbe6x93v"]},"lib/pancake-v4-core/src/pool-cl/libraries/FixedPoint96.sol":{"keccak256":"0xe4e810eb2dbbc159ee558743bd68e99662ab4fcfc60d9f1c787b08e3a2992a3a","license":"GPL-2.0-or-later","urls":["bzz-raw://9e2f028c2518196aaa508a3b15b071a7617c1a9bbb22ef4a1571a5231e41a7f0","dweb:/ipfs/QmUqe3ZFxVpRvGxPyNsfsNLHLXaJQdurJBC8tRL3WhcXj6"]},"lib/pancake-v4-core/src/pool-cl/libraries/FullMath.sol":{"keccak256":"0x676ac68f43b2730b9ca16ea3cc60bd45c134fa0eadaff2120b040f87b421d327","license":"GPL-2.0-or-later","urls":["bzz-raw://1f879486760513b25fa9b12ca9621e5596abb7f33f1ea4686d3d5fc93555a6d2","dweb:/ipfs/QmdCqDpjFAkSWWR7xdxWLNebTV5rcgQFeHUNPvKVPdR9XD"]},"lib/pancake-v4-core/src/pool-cl/libraries/LiquidityMath.sol":{"keccak256":"0xa53a006aebd5c51da0467fc2c055c5f3f0cbdaeac00e0f3c983410fa91efd547","license":"GPL-2.0-or-later","urls":["bzz-raw://9bb55441832e6c0f3d628cdaf980e80b043ecb9edfdb4c72df00bdc17a7465c6","dweb:/ipfs/QmdJdrz5B9FpiBbqnMmxiSJnqmEN6hgrJY4D2yUvxrkDE6"]},"lib/pancake-v4-core/src/pool-cl/libraries/SqrtPriceMath.sol":{"keccak256":"0xe9fd591f58c195d77b948c38d9e6bb7bf87eddb5bfee9a1dc65a39daaecbf739","license":"GPL-2.0-or-later","urls":["bzz-raw://f8ea7e0e743166a81966eb3428068f4db29d91fb897d22eb03bcfcfb22206891","dweb:/ipfs/QmUSHKz3X851ommRLUWzNsP6iwjLzFiMc5RzepkRAwuK33"]},"lib/pancake-v4-core/src/pool-cl/libraries/SwapMath.sol":{"keccak256":"0x628aa76cec680364848bda1a5e73852832dd05a07fc664bbeeedb33cea8512dd","license":"GPL-2.0-or-later","urls":["bzz-raw://bed9aae0ab2c42086f26be1226aefe99fe815fabf1fb4a3d60115496de87a918","dweb:/ipfs/QmVnvWWRboNnskXnQJGEMQaJqdeUvMvzm6RooyA8tnfWu5"]},"lib/pancake-v4-core/src/pool-cl/libraries/Tick.sol":{"keccak256":"0x1fab9b99ed40df2e27d161d972d0bf12ae46365e212e74d273bd09a27209b489","license":"GPL-2.0-or-later","urls":["bzz-raw://c1b9a7f944f761df0d47dd55f91e8ad085a31c0f4dc0cef6d0d59d5ceb510fee","dweb:/ipfs/QmReVJCiPd58cpvSfZpabdz6B7VqQFbZg1eEsaTjtrNyAi"]},"lib/pancake-v4-core/src/pool-cl/libraries/TickBitmap.sol":{"keccak256":"0x3b4e72929c821b73cf5c3793468ea2a387ea42c1b4ff81e8538958b81fd2f019","license":"GPL-2.0-or-later","urls":["bzz-raw://cf892533dcf4f1d6569181a201e7862e7af7c6eecb61de2dab665c426d320d9f","dweb:/ipfs/Qmemf6qCRCyZVvukLaJjY3VsJdanPAhFzAWM7L65mn2iZk"]},"lib/pancake-v4-core/src/pool-cl/libraries/TickMath.sol":{"keccak256":"0xacefefd050e2726d6fe74d0310086183bdf7e839c2fa6277d537cca0862a8d6d","license":"GPL-2.0-or-later","urls":["bzz-raw://5d8299d40ffdfa53b555b92108d780b08a7d59a77009599713075e58e6440d6b","dweb:/ipfs/QmVaijnHv5aJfxwUiLk68wycUpSxUxJvs5fyJ4KU7mk35N"]},"lib/pancake-v4-core/src/pool-cl/libraries/UnsafeMath.sol":{"keccak256":"0x9a8916d66a1f7b8ff6bc35db674210edebf54e751eb58549727809c503f3d089","license":"GPL-2.0-or-later","urls":["bzz-raw://42bf96c1c9de03c23ccd8b92160f0d2e4ef3b2ec6c51704efd1c0a6259245f1a","dweb:/ipfs/QmUZqGdfgT6bW1r5reztUvpxhiM3uXHy6uwCgbk8DZZ94H"]},"lib/pancake-v4-core/src/types/BalanceDelta.sol":{"keccak256":"0x19cc7a26b782c7f0ac92daf7df3116be271864b869208b3eb8a4139fa46df998","license":"MIT","urls":["bzz-raw://4c6f33ccba6ad98848be2ccc20909eedfb0c0feae252869d6d08d121b31fc637","dweb:/ipfs/QmZ8f7NHB13S3d5fnEDz4MrVcZpDiHoTbuzEBwoCUYWXzT"]},"lib/pancake-v4-core/src/types/Currency.sol":{"keccak256":"0x81622643b14e180e32a644f7bc885b8ba754570c25cbe3af1a95cdb03b8bdf20","license":"MIT","urls":["bzz-raw://7bdb351264422ade9596a1fe79d2ea1e78f1edc013d7fd06a31cde725545b5a0","dweb:/ipfs/QmbyyiNJSaCwVRuaA5oxjMFzm3pDtUWzf22sWSjhEEVwgg"]},"lib/pancake-v4-core/src/types/PoolId.sol":{"keccak256":"0xfca58dcea1e9d77257f5a108b748c9439389b5f7ef48e37478720228c712f533","license":"MIT","urls":["bzz-raw://ab1dea325943064519a060d7f4322b5fe1f33868e6d96d0dd8699683a80f3ab4","dweb:/ipfs/QmV7V7fLUrEZ3XZ3jKCAWKwnoak3azJ44TXqNuCnugoTTp"]},"lib/pancake-v4-core/src/types/PoolKey.sol":{"keccak256":"0xb8aa7017794cd10fb711720ae2ea4f87e871b1c113b2e285960e63f4f52fc5c6","license":"MIT","urls":["bzz-raw://f19a1975d93d1ddec92d5512979b5c4f2aa38296c3eaacf97af47dbd64804be0","dweb:/ipfs/QmSZjYFnwdTYT3W6F3T3m4exrUKUP58P15Mt8VcYFh4UQo"]},"src/interfaces/IStablepoint.sol":{"keccak256":"0xcdb72c1d7292ce35e89a3af07d02e4573f7f2d912adbd574688b21f3b4dedfc2","license":"MIT","urls":["bzz-raw://324d836ce368075f786600788bf03d28645dc0a96ffa913e253c3eda1c808731","dweb:/ipfs/QmRZgqJGHgeqTKm9CJ72BezaX1qprm2j5ZRYnB5cMJRzSB"]},"src/pool-cl/CLBaseHook.sol":{"keccak256":"0xe85a302d378cbfcf3dd3fa574af1fdc5a2cc60a329b7e292c77e6cca8a4e1fa5","license":"MIT","urls":["bzz-raw://62508c3077c8784fb1869fa5dec397896a812f5a63a24ee9062ebb90736a0ac4","dweb:/ipfs/QmZX9R3JL4YRHWgfmdPymY8y5WnNCa3z47uYprEER1f1UX"]},"src/pool-cl/MintPointsHook.sol":{"keccak256":"0x6ef33dbada7d0878f30bc67809ab4e430cd0b2468752303939cb63582007911f","license":"MIT","urls":["bzz-raw://646537b28d50782f3805b2dd1507c14eaaf2579be0e85c2e7e74323860a749a4","dweb:/ipfs/Qmbu7sc7rpCdNMEuZPA89dZxg1sNzKiz5JjPdnhWi2Jjh4"]}},"version":1}',
      metadata: {
        compiler: {
          version: "0.8.24+commit.e11b9ed9",
        },
        language: "Solidity",
        output: {
          abi: [
            {
              inputs: [
                {
                  internalType: "contract ICLPoolManager",
                  name: "_poolManager",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "_stablepointAddress",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              type: "error",
              name: "HookNotImplemented",
            },
            {
              inputs: [],
              type: "error",
              name: "InvalidPool",
            },
            {
              inputs: [],
              type: "error",
              name: "LockFailure",
            },
            {
              inputs: [],
              type: "error",
              name: "NotPoolManager",
            },
            {
              inputs: [],
              type: "error",
              name: "NotSelf",
            },
            {
              inputs: [],
              type: "error",
              name: "NotVault",
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "BURN_CONTRACT",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "struct ICLPoolManager.ModifyLiquidityParams",
                  name: "",
                  type: "tuple",
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                },
                {
                  internalType: "BalanceDelta",
                  name: "balanceDelta",
                  type: "int256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "afterAddLiquidity",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "struct PoolKey",
                  name: "",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "afterDonate",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "struct PoolKey",
                  name: "",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "uint160",
                  name: "",
                  type: "uint160",
                },
                {
                  internalType: "int24",
                  name: "",
                  type: "int24",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "afterInitialize",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "struct ICLPoolManager.ModifyLiquidityParams",
                  name: "",
                  type: "tuple",
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                },
                {
                  internalType: "BalanceDelta",
                  name: "balanceDelta",
                  type: "int256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "afterRemoveLiquidity",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "struct PoolKey",
                  name: "",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "struct ICLPoolManager.SwapParams",
                  name: "",
                  type: "tuple",
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                },
                {
                  internalType: "BalanceDelta",
                  name: "",
                  type: "int256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "afterSwap",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "struct PoolKey",
                  name: "",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "struct ICLPoolManager.ModifyLiquidityParams",
                  name: "",
                  type: "tuple",
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "beforeAddLiquidity",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "struct PoolKey",
                  name: "",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "beforeDonate",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "struct PoolKey",
                  name: "",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "uint160",
                  name: "",
                  type: "uint160",
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "beforeInitialize",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "user",
                  type: "address",
                },
                {
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "struct ICLPoolManager.ModifyLiquidityParams",
                  name: "params",
                  type: "tuple",
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "beforeRemoveLiquidity",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "struct PoolKey",
                  name: "",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "struct ICLPoolManager.SwapParams",
                  name: "",
                  type: "tuple",
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                },
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "beforeSwap",
              outputs: [
                {
                  internalType: "bytes4",
                  name: "",
                  type: "bytes4",
                },
              ],
            },
            {
              inputs: [],
              stateMutability: "pure",
              type: "function",
              name: "getHooksRegistrationBitmap",
              outputs: [
                {
                  internalType: "uint16",
                  name: "",
                  type: "uint16",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "lockAcquired",
              outputs: [
                {
                  internalType: "bytes",
                  name: "",
                  type: "bytes",
                },
              ],
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "mintPoints",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "poolManager",
              outputs: [
                {
                  internalType: "contract ICLPoolManager",
                  name: "",
                  type: "address",
                },
              ],
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "stablepoint",
              outputs: [
                {
                  internalType: "contract IStablepoint",
                  name: "",
                  type: "address",
                },
              ],
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "vault",
              outputs: [
                {
                  internalType: "contract IVault",
                  name: "",
                  type: "address",
                },
              ],
            },
          ],
          devdoc: {
            kind: "dev",
            methods: {
              "afterAddLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),int256,bytes)":
                {
                  details: "Mints tokens proportional to the added liquidity",
                },
              "afterRemoveLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),int256,bytes)":
                {
                  details: "Burns the equivalent amount of tokens by transferring them to the burn address ",
                },
              "beforeRemoveLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),bytes)":
                {
                  details: "Checks if the user has enough tokens to remove the specified liquidity",
                },
              "lockAcquired(bytes)": {
                details:
                  "Helper function when the hook needs to get a lock from the vault. See      https://github.com/pancakeswap/pancake-v4-hooks oh hooks which perform vault.lock()",
              },
            },
            version: 1,
          },
          userdoc: {
            kind: "user",
            methods: {
              "afterAddLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),int256,bytes)":
                {
                  notice: "Hook function that gets called after liquidity is added",
                },
              "afterRemoveLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),int256,bytes)":
                {
                  notice: "Hook function that gets called after liquidity is removed",
                },
              "beforeRemoveLiquidity(address,(address,address,address,address,uint24,bytes32),(int24,int24,int256),bytes)":
                {
                  notice: "Hook function that gets called before liquidity is removed",
                },
              "poolManager()": {
                notice: "The address of the pool manager",
              },
              "vault()": {
                notice: "The address of the vault",
              },
            },
            version: 1,
          },
        },
        settings: {
          remappings: [
            "@openzeppelin/=lib/openzeppelin-contracts/",
            "@pancakeswap/v4-core/=lib/pancake-v4-core/",
            "@pancakeswap/v4-periphery/=lib/pancake-v4-periphery/",
            "ds-test/=lib/forge-std/lib/ds-test/src/",
            "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
            "forge-gas-snapshot/=lib/pancake-v4-core/lib/forge-gas-snapshot/src/",
            "forge-std/=lib/forge-std/src/",
            "openzeppelin-contracts/=lib/openzeppelin-contracts/",
            "openzeppelin/=lib/openzeppelin-contracts/contracts/",
            "pancake-v4-core/=lib/pancake-v4-core/",
            "pancake-v4-periphery/=lib/pancake-v4-periphery/",
            "solmate/=lib/solmate/src/",
          ],
          optimizer: {
            enabled: true,
            runs: 200,
          },
          metadata: {
            bytecodeHash: "ipfs",
          },
          compilationTarget: {
            "src/pool-cl/MintPointsHook.sol": "MintPointsHook",
          },
          evmVersion: "cancun",
          libraries: {},
        },
        sources: {
          "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
            keccak256: "0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218",
            urls: [
              "bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32",
              "dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz",
            ],
            license: "MIT",
          },
          "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
            keccak256: "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
            urls: [
              "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
              "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/Extsload.sol": {
            keccak256: "0xd2196db77d9aeaffc33b1aaa209519afbe88a82172a9450c720dd8eada876cac",
            urls: [
              "bzz-raw://aa2de769ee93ff464ad4c45c100cea7872062171d8af85608aae592e56619c9e",
              "dweb:/ipfs/QmPHLzfrtSapY1d9E7CNfLyy9QHcMGFNvLuqMARW9wp8t4",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/Fees.sol": {
            keccak256: "0x0a625102d1fc48d66d67b8f14142f51d281c20e6c40b39cc8fe7fc2a5d6bae9d",
            urls: [
              "bzz-raw://2ecec150483876382f22a1b90ee1c847572e0db27a72d7e1a8a1a6b28ee2105c",
              "dweb:/ipfs/QmS2gGZtoH8VDngCrhMgq9djztnY7FUxmXkwdUQFaobaTG",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/interfaces/IERC20Minimal.sol": {
            keccak256: "0xd21325930292346a3d8ccd787a3c1f2e96da5af5b8b1871f3230ef40a2dfb080",
            urls: [
              "bzz-raw://adc2083a73040d486be24418b86bd46380aaac7a06923d8a3b1675d6a03d0f99",
              "dweb:/ipfs/QmVE6sj6CBdR1tus2aYQoRTKFtjGaUufZN2C9QV88birgc",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IExtsload.sol": {
            keccak256: "0x78efad54e9dd5715909ae6179716a0181e8f3cbe57412a4cbfb1dc025ff62790",
            urls: [
              "bzz-raw://dea81efed1a024bf6fd70f233816bfa5b7e8eb4c9bb3d18fe5a8440f88744e8f",
              "dweb:/ipfs/QmRdMBU11DRGPSUkJcf6Zcvva5GeGge66gj3QQYrBtjcFf",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IFees.sol": {
            keccak256: "0x9fc9f19409ea458c5ea3ef86bb40e730743ba08b00838617747587a964e4da41",
            urls: [
              "bzz-raw://ae94177946ad92c24542db75a7973acefd4cef893ff97f58bdb04e23444a43b1",
              "dweb:/ipfs/QmQ5MKheHeb1yHi3BGbuqnygtDQJKXDS7YisK1oQsRBCSm",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IHooks.sol": {
            keccak256: "0x1a47a0c52d038f3f231de66c7d558fc6dfc663f4b24c6e95bef922423cfdc027",
            urls: [
              "bzz-raw://eb2792b93a6601ba00141245e8101bd35c91df2d7e13e8cc31966ed85fde291a",
              "dweb:/ipfs/QmTihJz4NjA1G4217v58LaBYwLo5xaMXyLGUrbaFKXRLDd",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IPoolManager.sol": {
            keccak256: "0xfd7838e6d0fea2d6b54f9630565eb33c9faa93f22855aea4e8da28daa702a753",
            urls: [
              "bzz-raw://6d30982bdc29e3bf25d8777197415320c073e3ff6685e5650b96578cfecd0ae8",
              "dweb:/ipfs/QmTJS36mqJfFFsBBTDDBxgjVtCmFHwwebyuufsoxtdnjiS",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IProtocolFeeController.sol": {
            keccak256: "0xdc87cf4a93fd3012a3ebc291a2191ef6b764261b80d0923524cb941ac92d8559",
            urls: [
              "bzz-raw://6ab876db31ea99e214e95ca2ca0e7ed9b2cb8917fa63e02b45d613c41774fda3",
              "dweb:/ipfs/QmWdc6LZ4acTGWoiWkhkCWJyv3uBRXd4fjrzoCoZqwmokk",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IVault.sol": {
            keccak256: "0xd014af3287d3e97a53c9fdd29a349a050605f04a4ea62280389564e1d935faf0",
            urls: [
              "bzz-raw://327661e6aa0491f82996abcbb21f6d2489c36893f289706f37721894ad0aceba",
              "dweb:/ipfs/QmYBmBHV6NPY8wHpqu2SZTdZ5KVDZ8912816DhB9H1Xj5L",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IVaultToken.sol": {
            keccak256: "0xd797ac4079da85c7a567113387e28c80e7500f4d86c8135db8de95abdf5c6e99",
            urls: [
              "bzz-raw://3aef9e38b91d5c8dae9f6c363e29cab77b761a69ceee9fbd24403154a03b8660",
              "dweb:/ipfs/QmeiSkKB2M5knX5JB7rUiCNoVXAmxpm5VWumeStrDjBFDB",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/libraries/FeeLibrary.sol": {
            keccak256: "0xd3a6182978d4907ef5722b0469b9253846bec3d1da25dd0a7a631c25e026b78c",
            urls: [
              "bzz-raw://fc87807b1f4c8530daa0b4f2d562a276bcd2021ecd8a43bc46093f284aba4aaa",
              "dweb:/ipfs/Qmawd4ppbkBSTsmY4rBkTyLVsKXcmVHQRvaXAxjpmU8EcA",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/libraries/Hooks.sol": {
            keccak256: "0xf731ed0b831d2d3259d75ae3c86a3f9693ca361b9c4d32990bc1f5ed968f871a",
            urls: [
              "bzz-raw://4749531b1ebf6179cb80595ca7ea305a3176892d8c6548f70466956f2e99fb80",
              "dweb:/ipfs/QmNjtS6tnSNTpCuurq9zysJmfGLNnnhQgMrYjGC3y6WgyG",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/libraries/SafeCast.sol": {
            keccak256: "0x7e7f09dd3e83f8a46295959888b10c52b3a3a470479bed7f9297d9d84c945e55",
            urls: [
              "bzz-raw://ed5355d2b52d395beb9f6d961c9a46ea36dc261a34b7b4b1df44881eb73594db",
              "dweb:/ipfs/QmeGihtbD6sgbJj5CRLxkyoXQbBGgJg2YL4HDXscNTjXSk",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/libraries/math/Encoded.sol": {
            keccak256: "0x59b6b27b72031b703e3fe0ef2b3d8f693153d4ed9012f308d255df662508668a",
            urls: [
              "bzz-raw://996ee8ad722665707ccbaeac8e7f6991932fbd8377971fa1e197d347f87fefda",
              "dweb:/ipfs/QmYbimZuo2C7DFHgSbQ5egtoJP3D5RAKLrZoX52QE6E4vS",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/libraries/math/ParametersHelper.sol": {
            keccak256: "0x05449282a65b9a064ecfe21668d335ab700e3f6e6aec9c0e55d04490984926c2",
            urls: [
              "bzz-raw://8e69804d5020015cbeb835d3e8308f9999b7bf1677d0ecf294c45cf08649e740",
              "dweb:/ipfs/QmWcu9Ph1AoqXiWWaKUaHPUr48jCkj2hueTeCgbgXHCDNS",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/CLPoolManager.sol": {
            keccak256: "0x2363ded9bb8c16f33cac76680002c70e10bad92a7908eb8963dcd797aa057ea5",
            urls: [
              "bzz-raw://98002539916b106228b6bb52f8052eaa29584801f2d03c1e6aa791a156729e65",
              "dweb:/ipfs/QmX5aGGsKU7gi1ZenAYjZ4z9Q7PmupdeKpmziaWYozHJhK",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/interfaces/ICLDynamicFeeManager.sol": {
            keccak256: "0x2fa7f6ed7b76366549089ef7fd1b980196d0e301d5f4d901cbe90c47b75e677c",
            urls: [
              "bzz-raw://579b089623a48a2816280878be145ed7cde6bcdef8be0b5a024fbdc2a93107f0",
              "dweb:/ipfs/QmRMcvd6vyuLCtvGuq3SpQsTMMaBn76DgPNWLZiCZEJECw",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/pool-cl/interfaces/ICLHooks.sol": {
            keccak256: "0x0456843a69042b94d37fecbdbad854a56e7ada37e0b6daca0b16a55ca8d7dfea",
            urls: [
              "bzz-raw://67cbdc923ccab6ba5efcc80a16581be21d24ef51c22b10ed49791e7e055d3090",
              "dweb:/ipfs/Qmamkk33T8YuL4iPejNm7ocm6zfcfsYWNES1kAACceguPR",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/pool-cl/interfaces/ICLLmPool.sol": {
            keccak256: "0x3570603dcf8e8ad3edd24caab4377a906fce3d39f7819f870355148813b20e0f",
            urls: [
              "bzz-raw://dfc6e2700fd036ffbede4d9680d1f84c8555ed48abb8368d34a5e73f5666a2cc",
              "dweb:/ipfs/QmcZ5ED7Eabn1GdKsbpCuiBGCD6FVsFEfP6g1adTdHPMWH",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/pool-cl/interfaces/ICLPoolManager.sol": {
            keccak256: "0x677842da926aea5808e27e1b73478f0b2774f961d9942faccb57796ee26b95de",
            urls: [
              "bzz-raw://34fbd5a54761336fbc26135fa1529287f6e80e8e09c2401e67303ffd92816f80",
              "dweb:/ipfs/QmQLb7n563h7iVwRRCJHGx2n8V7bs5P9X2wwy9RbNjJQsT",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/BitMath.sol": {
            keccak256: "0x66c454a22a5ba6cd4b59192080a52ef97cca8806497f7712310e56757603604d",
            urls: [
              "bzz-raw://4f5d152c3179ef8bde19ebb82604a8cbec1260d2c13a41ce715d185298c5cc61",
              "dweb:/ipfs/QmYTZa2PXxdqcqtk5X1jvg4VunogcMF6NSjLjurNEyav1x",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/CLPool.sol": {
            keccak256: "0x8f94dc579a6ff19f2fa963d2961704a279e2615fd1aec0f34ea66bd7a138c320",
            urls: [
              "bzz-raw://ce6bc06313edbdbd26c08fe915107a5b676a64cc7dbed8ebd39726e75df52ad2",
              "dweb:/ipfs/QmU7jukhNuyD7bjM85TRy68YRKuBqbCTzgTdqGLmxtjbFR",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/CLPoolParametersHelper.sol": {
            keccak256: "0x69a2862f6d3b6618ed647a729dca82cd5b3018ec7f3e74a5477381125da05f0b",
            urls: [
              "bzz-raw://ab0ca249d487a34f3826db9aedb36d15546e7b7f48f3adaa730051932e5a24a4",
              "dweb:/ipfs/QmRCcczRDGrEdERysoc1vTD7r5S8NYJe79EyjHHqsGCNJF",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/CLPosition.sol": {
            keccak256: "0x8412a5ff367a6aefc50111fa17787a29ae154b9955b5d07fc0f8658cf0fca21f",
            urls: [
              "bzz-raw://90ce40bf2cc0a4c7dfa73ec1b5405670ec73762448a9b3628faabbf4f61d0eff",
              "dweb:/ipfs/QmdiDVcDkeN7FkpndjD8NzQnR8QfEzNfGnQrn3vApmdjBj",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/FixedPoint128.sol": {
            keccak256: "0x55d1efee27d9e43b3d94cea311c82aed7f9b1c6adfe67b7b7bf50211c8cd8186",
            urls: [
              "bzz-raw://f9d383cb4e7b54482d1dc5fe6e466432901552619250eaf4f25e0b33629586db",
              "dweb:/ipfs/QmTpwkQBQPREn6gYBPaPcCo5JMkKWw8hiMEUNnTbe6x93v",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/FixedPoint96.sol": {
            keccak256: "0xe4e810eb2dbbc159ee558743bd68e99662ab4fcfc60d9f1c787b08e3a2992a3a",
            urls: [
              "bzz-raw://9e2f028c2518196aaa508a3b15b071a7617c1a9bbb22ef4a1571a5231e41a7f0",
              "dweb:/ipfs/QmUqe3ZFxVpRvGxPyNsfsNLHLXaJQdurJBC8tRL3WhcXj6",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/FullMath.sol": {
            keccak256: "0x676ac68f43b2730b9ca16ea3cc60bd45c134fa0eadaff2120b040f87b421d327",
            urls: [
              "bzz-raw://1f879486760513b25fa9b12ca9621e5596abb7f33f1ea4686d3d5fc93555a6d2",
              "dweb:/ipfs/QmdCqDpjFAkSWWR7xdxWLNebTV5rcgQFeHUNPvKVPdR9XD",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/LiquidityMath.sol": {
            keccak256: "0xa53a006aebd5c51da0467fc2c055c5f3f0cbdaeac00e0f3c983410fa91efd547",
            urls: [
              "bzz-raw://9bb55441832e6c0f3d628cdaf980e80b043ecb9edfdb4c72df00bdc17a7465c6",
              "dweb:/ipfs/QmdJdrz5B9FpiBbqnMmxiSJnqmEN6hgrJY4D2yUvxrkDE6",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/SqrtPriceMath.sol": {
            keccak256: "0xe9fd591f58c195d77b948c38d9e6bb7bf87eddb5bfee9a1dc65a39daaecbf739",
            urls: [
              "bzz-raw://f8ea7e0e743166a81966eb3428068f4db29d91fb897d22eb03bcfcfb22206891",
              "dweb:/ipfs/QmUSHKz3X851ommRLUWzNsP6iwjLzFiMc5RzepkRAwuK33",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/SwapMath.sol": {
            keccak256: "0x628aa76cec680364848bda1a5e73852832dd05a07fc664bbeeedb33cea8512dd",
            urls: [
              "bzz-raw://bed9aae0ab2c42086f26be1226aefe99fe815fabf1fb4a3d60115496de87a918",
              "dweb:/ipfs/QmVnvWWRboNnskXnQJGEMQaJqdeUvMvzm6RooyA8tnfWu5",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/Tick.sol": {
            keccak256: "0x1fab9b99ed40df2e27d161d972d0bf12ae46365e212e74d273bd09a27209b489",
            urls: [
              "bzz-raw://c1b9a7f944f761df0d47dd55f91e8ad085a31c0f4dc0cef6d0d59d5ceb510fee",
              "dweb:/ipfs/QmReVJCiPd58cpvSfZpabdz6B7VqQFbZg1eEsaTjtrNyAi",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/TickBitmap.sol": {
            keccak256: "0x3b4e72929c821b73cf5c3793468ea2a387ea42c1b4ff81e8538958b81fd2f019",
            urls: [
              "bzz-raw://cf892533dcf4f1d6569181a201e7862e7af7c6eecb61de2dab665c426d320d9f",
              "dweb:/ipfs/Qmemf6qCRCyZVvukLaJjY3VsJdanPAhFzAWM7L65mn2iZk",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/TickMath.sol": {
            keccak256: "0xacefefd050e2726d6fe74d0310086183bdf7e839c2fa6277d537cca0862a8d6d",
            urls: [
              "bzz-raw://5d8299d40ffdfa53b555b92108d780b08a7d59a77009599713075e58e6440d6b",
              "dweb:/ipfs/QmVaijnHv5aJfxwUiLk68wycUpSxUxJvs5fyJ4KU7mk35N",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/UnsafeMath.sol": {
            keccak256: "0x9a8916d66a1f7b8ff6bc35db674210edebf54e751eb58549727809c503f3d089",
            urls: [
              "bzz-raw://42bf96c1c9de03c23ccd8b92160f0d2e4ef3b2ec6c51704efd1c0a6259245f1a",
              "dweb:/ipfs/QmUZqGdfgT6bW1r5reztUvpxhiM3uXHy6uwCgbk8DZZ94H",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/types/BalanceDelta.sol": {
            keccak256: "0x19cc7a26b782c7f0ac92daf7df3116be271864b869208b3eb8a4139fa46df998",
            urls: [
              "bzz-raw://4c6f33ccba6ad98848be2ccc20909eedfb0c0feae252869d6d08d121b31fc637",
              "dweb:/ipfs/QmZ8f7NHB13S3d5fnEDz4MrVcZpDiHoTbuzEBwoCUYWXzT",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/types/Currency.sol": {
            keccak256: "0x81622643b14e180e32a644f7bc885b8ba754570c25cbe3af1a95cdb03b8bdf20",
            urls: [
              "bzz-raw://7bdb351264422ade9596a1fe79d2ea1e78f1edc013d7fd06a31cde725545b5a0",
              "dweb:/ipfs/QmbyyiNJSaCwVRuaA5oxjMFzm3pDtUWzf22sWSjhEEVwgg",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/types/PoolId.sol": {
            keccak256: "0xfca58dcea1e9d77257f5a108b748c9439389b5f7ef48e37478720228c712f533",
            urls: [
              "bzz-raw://ab1dea325943064519a060d7f4322b5fe1f33868e6d96d0dd8699683a80f3ab4",
              "dweb:/ipfs/QmV7V7fLUrEZ3XZ3jKCAWKwnoak3azJ44TXqNuCnugoTTp",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/types/PoolKey.sol": {
            keccak256: "0xb8aa7017794cd10fb711720ae2ea4f87e871b1c113b2e285960e63f4f52fc5c6",
            urls: [
              "bzz-raw://f19a1975d93d1ddec92d5512979b5c4f2aa38296c3eaacf97af47dbd64804be0",
              "dweb:/ipfs/QmSZjYFnwdTYT3W6F3T3m4exrUKUP58P15Mt8VcYFh4UQo",
            ],
            license: "MIT",
          },
          "src/interfaces/IStablepoint.sol": {
            keccak256: "0xcdb72c1d7292ce35e89a3af07d02e4573f7f2d912adbd574688b21f3b4dedfc2",
            urls: [
              "bzz-raw://324d836ce368075f786600788bf03d28645dc0a96ffa913e253c3eda1c808731",
              "dweb:/ipfs/QmRZgqJGHgeqTKm9CJ72BezaX1qprm2j5ZRYnB5cMJRzSB",
            ],
            license: "MIT",
          },
          "src/pool-cl/CLBaseHook.sol": {
            keccak256: "0xe85a302d378cbfcf3dd3fa574af1fdc5a2cc60a329b7e292c77e6cca8a4e1fa5",
            urls: [
              "bzz-raw://62508c3077c8784fb1869fa5dec397896a812f5a63a24ee9062ebb90736a0ac4",
              "dweb:/ipfs/QmZX9R3JL4YRHWgfmdPymY8y5WnNCa3z47uYprEER1f1UX",
            ],
            license: "MIT",
          },
          "src/pool-cl/MintPointsHook.sol": {
            keccak256: "0x6ef33dbada7d0878f30bc67809ab4e430cd0b2468752303939cb63582007911f",
            urls: [
              "bzz-raw://646537b28d50782f3805b2dd1507c14eaaf2579be0e85c2e7e74323860a749a4",
              "dweb:/ipfs/Qmbu7sc7rpCdNMEuZPA89dZxg1sNzKiz5JjPdnhWi2Jjh4",
            ],
            license: "MIT",
          },
        },
        version: 1,
      },
      id: 121,
    },
    TokenSale: {
      name: "TokenSale",
      address: "0x8d3521ddf3E96D061b001841FD5D05C3545bD343",
      abi: [
        {
          inputs: [
            {
              internalType: "uint256",
              name: "usdcAmount",
              type: "uint256",
            },
          ],
          name: "buyTokens",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "newRate",
              type: "uint256",
            },
          ],
          name: "setRate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_stablePoint",
              type: "address",
            },
            {
              internalType: "address",
              name: "_usdc",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "_rate",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "withdrawstablePoint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "withdrawUSDC",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "rate",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "stablePoint",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "usdc",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      filePath: "default_workspace/contracts/TokenSale.sol",
      pinnedAt: 1710598350960,
    },
    PoolManager: {
      address: "0x76B97C7Af48A715b3CE9Fc3F11e43903F90040d7",
      abi: [
        {
          type: "constructor",
          inputs: [
            {
              name: "_vault",
              type: "address",
              internalType: "contract IVault",
            },
            {
              name: "controllerGasLimit",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "MAX_TICK_SPACING",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "int24",
              internalType: "int24",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "MIN_PROTOCOL_FEE_DENOMINATOR",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint8",
              internalType: "uint8",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "MIN_TICK_SPACING",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "int24",
              internalType: "int24",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "collectProtocolFees",
          inputs: [
            {
              name: "recipient",
              type: "address",
              internalType: "address",
            },
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "amountCollected",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "donate",
          inputs: [
            {
              name: "key",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "amount0",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "amount1",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "hookData",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "delta",
              type: "int256",
              internalType: "BalanceDelta",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "extsload",
          inputs: [
            {
              name: "slot",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          outputs: [
            {
              name: "val",
              type: "bytes32",
              internalType: "bytes32",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "extsload",
          inputs: [
            {
              name: "slots",
              type: "bytes32[]",
              internalType: "bytes32[]",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bytes32[]",
              internalType: "bytes32[]",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getLiquidity",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              internalType: "PoolId",
            },
            {
              name: "_owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "tickLower",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "tickUpper",
              type: "int24",
              internalType: "int24",
            },
          ],
          outputs: [
            {
              name: "liquidity",
              type: "uint128",
              internalType: "uint128",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getLiquidity",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              internalType: "PoolId",
            },
          ],
          outputs: [
            {
              name: "liquidity",
              type: "uint128",
              internalType: "uint128",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getLmPool",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              internalType: "PoolId",
            },
          ],
          outputs: [
            {
              name: "lmPool",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getPosition",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              internalType: "PoolId",
            },
            {
              name: "owner",
              type: "address",
              internalType: "address",
            },
            {
              name: "tickLower",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "tickUpper",
              type: "int24",
              internalType: "int24",
            },
          ],
          outputs: [
            {
              name: "position",
              type: "tuple",
              internalType: "struct CLPosition.Info",
              components: [
                {
                  name: "liquidity",
                  type: "uint128",
                  internalType: "uint128",
                },
                {
                  name: "feeGrowthInside0LastX128",
                  type: "uint256",
                  internalType: "uint256",
                },
                {
                  name: "feeGrowthInside1LastX128",
                  type: "uint256",
                  internalType: "uint256",
                },
              ],
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getSlot0",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              internalType: "PoolId",
            },
          ],
          outputs: [
            {
              name: "sqrtPriceX96",
              type: "uint160",
              internalType: "uint160",
            },
            {
              name: "tick",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "protocolFee",
              type: "uint16",
              internalType: "uint16",
            },
            {
              name: "swapFee",
              type: "uint24",
              internalType: "uint24",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "initialize",
          inputs: [
            {
              name: "key",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "sqrtPriceX96",
              type: "uint160",
              internalType: "uint160",
            },
            {
              name: "hookData",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "tick",
              type: "int24",
              internalType: "int24",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "masterChef",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "modifyLiquidity",
          inputs: [
            {
              name: "key",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "params",
              type: "tuple",
              internalType: "struct ICLPoolManager.ModifyLiquidityParams",
              components: [
                {
                  name: "tickLower",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "tickUpper",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "liquidityDelta",
                  type: "int256",
                  internalType: "int256",
                },
              ],
            },
            {
              name: "hookData",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "delta",
              type: "int256",
              internalType: "BalanceDelta",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "pools",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              internalType: "PoolId",
            },
          ],
          outputs: [
            {
              name: "slot0",
              type: "tuple",
              internalType: "struct CLPool.Slot0",
              components: [
                {
                  name: "sqrtPriceX96",
                  type: "uint160",
                  internalType: "uint160",
                },
                {
                  name: "tick",
                  type: "int24",
                  internalType: "int24",
                },
                {
                  name: "protocolFee",
                  type: "uint16",
                  internalType: "uint16",
                },
                {
                  name: "swapFee",
                  type: "uint24",
                  internalType: "uint24",
                },
              ],
            },
            {
              name: "feeGrowthGlobal0X128",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "feeGrowthGlobal1X128",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "liquidity",
              type: "uint128",
              internalType: "uint128",
            },
            {
              name: "lmPool",
              type: "address",
              internalType: "contract ICLLmPool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "protocolFeeController",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IProtocolFeeController",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "protocolFeesAccrued",
          inputs: [
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setLmPool",
          inputs: [
            {
              name: "key",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "lmPool",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setMasterChef",
          inputs: [
            {
              name: "_masterChef",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setProtocolFee",
          inputs: [
            {
              name: "key",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "setProtocolFeeController",
          inputs: [
            {
              name: "controller",
              type: "address",
              internalType: "contract IProtocolFeeController",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "swap",
          inputs: [
            {
              name: "key",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "params",
              type: "tuple",
              internalType: "struct ICLPoolManager.SwapParams",
              components: [
                {
                  name: "zeroForOne",
                  type: "bool",
                  internalType: "bool",
                },
                {
                  name: "amountSpecified",
                  type: "int256",
                  internalType: "int256",
                },
                {
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                  internalType: "uint160",
                },
              ],
            },
            {
              name: "hookData",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "delta",
              type: "int256",
              internalType: "BalanceDelta",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "updateDynamicSwapFee",
          inputs: [
            {
              name: "key",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "vault",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "contract IVault",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "event",
          name: "Donate",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              indexed: true,
              internalType: "PoolId",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount0",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "amount1",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
            {
              name: "tick",
              type: "int24",
              indexed: false,
              internalType: "int24",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "DynamicSwapFeeUpdated",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              indexed: true,
              internalType: "PoolId",
            },
            {
              name: "dynamicSwapFee",
              type: "uint24",
              indexed: false,
              internalType: "uint24",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Initialize",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              indexed: true,
              internalType: "PoolId",
            },
            {
              name: "currency0",
              type: "address",
              indexed: true,
              internalType: "Currency",
            },
            {
              name: "currency1",
              type: "address",
              indexed: true,
              internalType: "Currency",
            },
            {
              name: "fee",
              type: "uint24",
              indexed: false,
              internalType: "uint24",
            },
            {
              name: "tickSpacing",
              type: "int24",
              indexed: false,
              internalType: "int24",
            },
            {
              name: "hooks",
              type: "address",
              indexed: false,
              internalType: "contract ICLHooks",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ModifyLiquidity",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              indexed: true,
              internalType: "PoolId",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "tickLower",
              type: "int24",
              indexed: false,
              internalType: "int24",
            },
            {
              name: "tickUpper",
              type: "int24",
              indexed: false,
              internalType: "int24",
            },
            {
              name: "liquidityDelta",
              type: "int256",
              indexed: false,
              internalType: "int256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ProtocolFeeControllerUpdated",
          inputs: [
            {
              name: "protocolFeeController",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "ProtocolFeeUpdated",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              indexed: true,
              internalType: "PoolId",
            },
            {
              name: "protocolFee",
              type: "uint16",
              indexed: false,
              internalType: "uint16",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "SetLmPool",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              indexed: true,
              internalType: "PoolId",
            },
            {
              name: "lmPool",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "SetMasterChef",
          inputs: [
            {
              name: "masterChef",
              type: "address",
              indexed: false,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Swap",
          inputs: [
            {
              name: "id",
              type: "bytes32",
              indexed: true,
              internalType: "PoolId",
            },
            {
              name: "sender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "amount0",
              type: "int128",
              indexed: false,
              internalType: "int128",
            },
            {
              name: "amount1",
              type: "int128",
              indexed: false,
              internalType: "int128",
            },
            {
              name: "sqrtPriceX96",
              type: "uint160",
              indexed: false,
              internalType: "uint160",
            },
            {
              name: "liquidity",
              type: "uint128",
              indexed: false,
              internalType: "uint128",
            },
            {
              name: "tick",
              type: "int24",
              indexed: false,
              internalType: "int24",
            },
            {
              name: "fee",
              type: "uint24",
              indexed: false,
              internalType: "uint24",
            },
            {
              name: "protocolFee",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "CannotUpdateEmptyPosition",
          inputs: [],
        },
        {
          type: "error",
          name: "CurrenciesInitializedOutOfOrder",
          inputs: [],
        },
        {
          type: "error",
          name: "FeeNotDynamic",
          inputs: [],
        },
        {
          type: "error",
          name: "FeeTooLarge",
          inputs: [],
        },
        {
          type: "error",
          name: "HookConfigValidationError",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidHookResponse",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidPrice",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidPriceOrLiquidity",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidProtocolFeeCollector",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidSqrtPriceLimit",
          inputs: [
            {
              name: "sqrtPriceCurrentX96",
              type: "uint160",
              internalType: "uint160",
            },
            {
              name: "sqrtPriceLimitX96",
              type: "uint160",
              internalType: "uint160",
            },
          ],
        },
        {
          type: "error",
          name: "InvalidSqrtRatio",
          inputs: [],
        },
        {
          type: "error",
          name: "InvalidTick",
          inputs: [],
        },
        {
          type: "error",
          name: "NoLiquidityToReceiveFees",
          inputs: [],
        },
        {
          type: "error",
          name: "NoOpHookMissingBeforeCall",
          inputs: [],
        },
        {
          type: "error",
          name: "NotEnoughLiquidity",
          inputs: [],
        },
        {
          type: "error",
          name: "PoolAlreadyInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "PoolManagerMismatch",
          inputs: [],
        },
        {
          type: "error",
          name: "PoolNotInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "PoolNotInitialized",
          inputs: [],
        },
        {
          type: "error",
          name: "PriceOverflow",
          inputs: [],
        },
        {
          type: "error",
          name: "ProtocolFeeCannotBeFetched",
          inputs: [],
        },
        {
          type: "error",
          name: "ProtocolFeeControllerCallFailedOrInvalidResult",
          inputs: [],
        },
        {
          type: "error",
          name: "SafeCastOverflow",
          inputs: [],
        },
        {
          type: "error",
          name: "SwapAmountCannotBeZero",
          inputs: [],
        },
        {
          type: "error",
          name: "TickLiquidityOverflow",
          inputs: [
            {
              name: "tick",
              type: "int24",
              internalType: "int24",
            },
          ],
        },
        {
          type: "error",
          name: "TickLowerOutOfBounds",
          inputs: [
            {
              name: "tickLower",
              type: "int24",
              internalType: "int24",
            },
          ],
        },
        {
          type: "error",
          name: "TickMisaligned",
          inputs: [
            {
              name: "tick",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "tickSpacing",
              type: "int24",
              internalType: "int24",
            },
          ],
        },
        {
          type: "error",
          name: "TickSpacingTooLarge",
          inputs: [],
        },
        {
          type: "error",
          name: "TickSpacingTooSmall",
          inputs: [],
        },
        {
          type: "error",
          name: "TickUpperOutOfBounds",
          inputs: [
            {
              name: "tickUpper",
              type: "int24",
              internalType: "int24",
            },
          ],
        },
        {
          type: "error",
          name: "TicksMisordered",
          inputs: [
            {
              name: "tickLower",
              type: "int24",
              internalType: "int24",
            },
            {
              name: "tickUpper",
              type: "int24",
              internalType: "int24",
            },
          ],
        },
        {
          type: "error",
          name: "UnauthorizedCaller",
          inputs: [],
        },
      ],
      bytecode: {
        object:
          "0x60c060405234801562000010575f80fd5b5060405162005114380380620051148339810160408190526200003391620000a9565b818162000040336200005a565b6001600160a01b0390911660805260a05250620000e29050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f8060408385031215620000bb575f80fd5b82516001600160a01b0381168114620000d2575f80fd5b6020939093015192949293505050565b60805160a051614fed620001275f395f8181611c710152611cc801525f818161061a01528181610e89015281816111ba0152818161142701526117ed0152614fed5ff3fe608060405234801561000f575f80fd5b50600436106101bb575f3560e01c80638da5cb5b116100f3578063ee68111411610093578063f2fde38b1161006e578063f2fde38b146105c3578063f427ddba146105d6578063fa6793d5146105e9578063fbfa77cf14610615575f80fd5b8063ee6811141461058a578063f02de3b21461059d578063f15b275f146105b0575f80fd5b8063b5217bb4116100ce578063b5217bb4146103a8578063c815641c146104aa578063cd0cc1ce14610557578063dbd035ff1461056a575f80fd5b80638da5cb5b1461036657806397e8cd4e14610376578063a2d9f4dc14610395575f80fd5b8063575a86b21161015e57806360460f061161013957806360460f0614610328578063715018a6146103315780638161b8741461033957806384e41c5e1461034c575f80fd5b8063575a86b2146102d75780635afdef74146103025780635c3379f914610315575f80fd5b8063222bb36b11610199578063222bb36b1461023d57806323a8c31f146102505780632d7713891461026557806333aa955b14610278575f80fd5b8063048d9c70146101bf57806307eff0dd146102025780631e2eaeaf1461021d575b5f80fd5b6101d26101cd3660046144a9565b61063c565b6040805182516001600160801b031681526020808401519082015291810151908201526060015b60405180910390f35b61020a600181565b60405160029190910b81526020016101f9565b61022f61022b3660046144f5565b5490565b6040519081526020016101f9565b61020a61024b366004614672565b6106c8565b61026361025e3660046146d3565b610a30565b005b610263610273366004614709565b610adb565b6102bf6102863660046144a9565b5f93845260036020818152604080872060069490945293909152928452601a600c2084526007019091529020546001600160801b031690565b6040516001600160801b0390911681526020016101f9565b6004546102ea906001600160a01b031681565b6040516001600160a01b0390911681526020016101f9565b610263610310366004614724565b610b38565b61022f61032336600461473e565b610bc8565b61020a617fff81565b6102636110df565b61022f6103473660046147bf565b6110f2565b610354600481565b60405160ff90911681526020016101f9565b5f546001600160a01b03166102ea565b61022f610384366004614709565b60016020525f908152604090205481565b6102636103a3366004614709565b611218565b61043c6103b63660046144f5565b600360208181525f928352604092839020835160808101855281546001600160a01b038082168352600160a01b8204600290810b95840195909552600160b81b820461ffff1696830196909652600160c81b900462ffffff1660608201526001820154928201549382015460049092015490949293926001600160801b03909216911685565b6040805186516001600160a01b03908116825260208089015160020b908301528783015161ffff169282019290925260609687015162ffffff1696810196909652608086019490945260a08501929092526001600160801b031660c08401521660e0820152610100016101f9565b61051c6104b83660046144f5565b5f90815260036020908152604091829020825160808101845290546001600160a01b038116808352600160a01b820460020b938301849052600160b81b820461ffff16948301859052600160c81b90910462ffffff16606090920182905293919291565b604080516001600160a01b03909516855260029390930b602085015261ffff9091169183019190915262ffffff1660608201526080016101f9565b61022f6105653660046147fd565b61126e565b61057d610578366004614886565b611640565b6040516101f99190614927565b6102ea6105983660046144f5565b61166e565b6002546102ea906001600160a01b031681565b61022f6105be36600461496a565b61168a565b6102636105d1366004614709565b61195d565b6102636105e4366004614724565b6119db565b6102bf6105f73660046144f5565b5f90815260036020819052604090912001546001600160801b031690565b6102ea7f000000000000000000000000000000000000000000000000000000000000000081565b61066660405180606001604052805f6001600160801b031681526020015f81526020015f81525090565b5f858152600360208181526040808420600687905292879052878452601a600c2084526007909201905290206040805160608101825282546001600160801b03168152600183015460208201526002909201549082015290505b949350505050565b60608401515f90306001600160a01b038216146106f8576040516341bcf19160e11b815260040160405180910390fd5b6080860151620f4240620fffff9091161061072657604051637e2df70960e11b815260040160405180910390fd5b5f6107348760a00151611a88565b9050617fff600282900b131561075d57604051635815aee160e11b815260040160405180910390fd5b6001600282900b121561078357604051630b7f3b4b60e11b815260040160405180910390fd5b865160208801516001600160a01b039081169116106107b5576040516305a25e7160e11b815260040160405180910390fd5b60408701516107c388611a98565b6107cc88611b85565b60a08801516107db905f611c14565b1561087e57604051634b970cd160e11b808252906001600160a01b0383169063972e19a2906108169033908d908d908d908d90600401614a46565b6020604051808303815f875af1158015610832573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108569190614a82565b6001600160e01b0319161461087e57604051631e048e1d60e01b815260040160405180910390fd5b5f61088889611c2b565b90505f6108948a611c5a565b60808c01519092505f915062800000166108b75760808b0151620fffff166108c0565b6108c08b611dd9565b5f8481526003602052604090209091506108dc908b8484611e7a565b96508a602001516001600160a01b03168b5f01516001600160a01b0316847f3fd553db44f207b1f41348cfc4d251860814af9eadc470e8e7895e4d120511f48e6080015189896040516109559392919062ffffff93909316835260029190910b60208301526001600160a01b0316604082015260600190565b60405180910390a460a08b015161096d906001611c14565b15610a2257631ffe6a5860e01b6001600160e01b031916846001600160a01b0316631ffe6a58338e8e8c8f8f6040518763ffffffff1660e01b81526004016109ba96959493929190614aa9565b6020604051808303815f875af11580156109d6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109fa9190614a82565b6001600160e01b03191614610a2257604051631e048e1d60e01b815260040160405180910390fd5b505050505050949350505050565b6004546001600160a01b03163314801590610a5557505f546001600160a01b03163314155b15610a7357604051635c427cd960e01b815260040160405180910390fd5b5f610a7d83611c2b565b5f818152600360205260409020909150610a979083611f40565b6040516001600160a01b038316815281907f3243472b273ee2a43e46423bab8bbd85d5710efee41e4a46c681d6e94c0adae6906020015b60405180910390a2505050565b610ae3611f8d565b600280546001600160a01b0319166001600160a01b0383169081179091556040519081527fb4bd8ef53df690b9943d3318996006dbb82a25f54719d8c8035b516a2a5b8acc906020015b60405180910390a150565b5f80610b4383611c5a565b9150915081610b655760405163e7ca185f60e01b815260040160405180910390fd5b5f610b6f84611c2b565b5f818152600360205260409020909150610b899083611fe6565b60405161ffff8316815281907f9f9496a7bce5dc5951d2db4c6bac380c9bcbcc9a4e9c18eafbcc231d06de481a9060200160405180910390a250505050565b60608401515f90306001600160a01b03821614610bf8576040516341bcf19160e11b815260040160405180910390fd5b5f610c0287611c2b565b9050610c0d8161202b565b604080880151908701515f128015610c30575060a0880151610c30906002611c14565b15610d07576040516330227e9f60e21b81525f906001600160a01b0383169063c089fa7c90610c6b9033908d908d908d908d90600401614af0565b6020604051808303815f875af1158015610c87573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cab9190614a82565b60a08a0151909150610cbf90600a8361205f565b15610cd0575f1994505050506110d6565b6001600160e01b031981166330227e9f60e21b14610d0157604051631e048e1d60e01b815260040160405180910390fd5b50610dff565b5f876040015113158015610d26575060a0880151610d26906004611c14565b15610dff57604051600162319b8d60e11b031981525f906001600160a01b0383169063ff9cc8e690610d649033908d908d908d908d90600401614af0565b6020604051808303815f875af1158015610d80573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610da49190614a82565b60a08a0151909150610db890600a8361205f565b15610dc9575f1994505050506110d6565b6001600160e01b03198116600162319b8d60e11b031914610dfd57604051631e048e1d60e01b815260040160405180910390fd5b505b610e6f6040518060a00160405280336001600160a01b03168152602001895f015160020b8152602001896020015160020b8152602001610e428a604001516120b8565b600f0b8152602001610e578b60a00151611a88565b60020b90525f848152600360205260409020906120dd565b604051630c05145560e21b81529094506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633014515490610ec2908b9088903390600401614b46565b5f604051808303815f87803b158015610ed9575f80fd5b505af1158015610eeb573d5f803e3d5ffd5b505088516020808b01516040808d01518151600295860b81529290940b9282019290925280820192909252513393508592507f541c041c2cce48e614b3de043c9280f06b6164c0a1741649e2de3c3d375f79749181900360600190a35f8760400151138015610f65575060a0880151610f65906003611c14565b1561100f57604051631e3b7a8360e01b808252906001600160a01b03831690631e3b7a8390610fa29033908d908d908b908e908e90600401614b74565b6020604051808303815f875af1158015610fbe573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fe29190614a82565b6001600160e01b0319161461100a57604051631e048e1d60e01b815260040160405180910390fd5b6110d3565b5f87604001511315801561102e575060a088015161102e906005611c14565b156110d35760405163b23855d360e01b808252906001600160a01b0383169063b23855d39061106b9033908d908d908b908e908e90600401614b74565b6020604051808303815f875af1158015611087573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110ab9190614a82565b6001600160e01b031916146110d357604051631e048e1d60e01b815260040160405180910390fd5b50505b50949350505050565b6110e7611f8d565b6110f05f6122c0565b565b5f80546001600160a01b0316331480159061111857506002546001600160a01b03163314155b1561113657604051635b5c395f60e01b815260040160405180910390fd5b8115611142578161115b565b6001600160a01b0383165f908152600160205260409020545b6001600160a01b0384165f90815260016020526040812080549293508392909190611187908490614be5565b909155505060405163eb78b43560e01b81526001600160a01b0384811660048301526024820183905285811660448301527f0000000000000000000000000000000000000000000000000000000000000000169063eb78b435906064015f604051808303815f87803b1580156111fb575f80fd5b505af115801561120d573d5f803e3d5ffd5b505050509392505050565b611220611f8d565b600480546001600160a01b0319166001600160a01b0383169081179091556040519081527fd552c738541d32420dc50532aa4d09df4032b4739ce4025e688382694313871c90602001610b2d565b60608401515f90306001600160a01b0382161461129e576040516341bcf19160e11b815260040160405180910390fd5b5f6112a887611c2b565b90506112b38161202b565b604087015160a08801516112c8906006611c14565b1561139b5760405163e592dc9360e01b81525f906001600160a01b0383169063e592dc93906113039033908d908d908d908d90600401614bf8565b6020604051808303815f875af115801561131f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113439190614a82565b60a08a015190915061135790600a8361205f565b15611368575f1994505050506110d6565b6001600160e01b0319811663e592dc9360e01b1461139957604051631e048e1d60e01b815260040160405180910390fd5b505b6113a361442d565b61140b60405180608001604052806113be8c60a00151611a88565b60020b81526020018a5f0151151581526020018a6020015181526020018a604001516001600160a01b031681525060035f8681526020019081526020015f2061230f90919063ffffffff16565b604051630c05145560e21b815291965091506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633014515490611460908c9089903390600401614b46565b5f604051808303815f87803b158015611477575f80fd5b505af1158015611489573d5f803e3d5ffd5b5050505060c0810151156114d4578060c0015160015f8a5f01516114b1578b602001516114b4565b8b515b6001600160a01b0316815260208101919091526040015f20805490910190555b33837fc5dfe1011e80c9b7f892c298cc5733a4b7148919058624a5a4d6f7f66cc3e4506115018860801c90565b8860408087015160e0880151606089015160808a015160c08b0151945161157797969590600f97880b81529590960b60208601526001600160a01b039390931660408501526001600160801b0391909116606084015260020b608083015262ffffff1660a082015260c081019190915260e00190565b60405180910390a360a089015161158f906007611c14565b1561163457604051636f6657cb60e01b808252906001600160a01b03841690636f6657cb906115cc9033908e908e908c908f908f90600401614c42565b6020604051808303815f875af11580156115e8573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061160c9190614a82565b6001600160e01b0319161461163457604051631e048e1d60e01b815260040160405180910390fd5b50505050949350505050565b606060208251028201602001602083015b81811015611666578051548152602001611651565b509192915050565b5f81815260036020526040812061168490612b58565b92915050565b60608501515f90306001600160a01b038216146116ba576040516341bcf19160e11b815260040160405180910390fd5b5f6116c488611c2b565b90506116cf8161202b565b604088015160a08901516116e4906008611c14565b156117b957604051634b6a682d60e01b81525f906001600160a01b03831690634b6a682d906117219033908e908e908e908e908e90600401614c8c565b6020604051808303815f875af115801561173d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117619190614a82565b60a08b015190915061177590600a8361205f565b15611786575f199450505050611953565b6001600160e01b03198116634b6a682d60e01b146117b757604051631e048e1d60e01b815260040160405180910390fd5b505b5f8281526003602052604081206117d1908a8a612b9a565b604051630c05145560e21b815291965091506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633014515490611826908d9089903390600401614b46565b5f604051808303815f87803b15801561183d575f80fd5b505af115801561184f573d5f803e3d5ffd5b5050604080518c8152602081018c9052600285900b8183015290513393508692507fbe708911656ae186ac3fc26a794e5f1319609ce340a14c63524f985fee4bc8419181900360600190a360a08a01516118aa906009611c14565b1561194f576040516329826a2760e11b808252906001600160a01b03841690635304d44e906118e79033908f908f908f908f908f90600401614c8c565b6020604051808303815f875af1158015611903573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119279190614a82565b6001600160e01b0319161461194f57604051631e048e1d60e01b815260040160405180910390fd5b5050505b5095945050505050565b611965611f8d565b6001600160a01b0381166119cf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6119d8816122c0565b50565b6080810151628000001615611a51575f6119f482611dd9565b90505f611a0083611c2b565b5f818152600360205260409020909150611a1a9083612c51565b60405162ffffff8316815281907fdda45bdfb4c4d89a045919c537cb189db3745c4b1977d65f1d7cf60b585e7b7290602001610ace565b604051636807896960e11b815260040160405180910390fd5b6006526003525f908152601a600c2081526020919091526040902090565b5f6116848260101c62ffffff1690565b5f611aa68260a00151612c98565b60408301519091506001600160a01b0316611af65761ffff8116158015611ad4575060808201516280000016155b15611add575050565b604051631fdd41b760e21b815260040160405180910390fd5b8061ffff1682604001516001600160a01b031663f961d1f46040518163ffffffff1660e01b8152600401602060405180830381865afa158015611b3b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b5f9190614cca565b61ffff1614611b8157604051631fdd41b760e21b815260040160405180910390fd5b5050565b60a0810151611b9590600a611c14565b156119d85760a0810151611baa906002611c14565b158015611bc4575060a0810151611bc2906004611c14565b155b8015611bdd575060a0810151611bdb906006611c14565b155b8015611bf6575060a0810151611bf4906008611c14565b155b156119d857604051630e808b3760e31b815260040160405180910390fd5b5f611c248360ff84161c60011690565b9392505050565b5f81604051602001611c3d9190614ceb565b604051602081830303815290604052805190602001209050919050565b6002545f9081906001600160a01b031615611dd4577f00000000000000000000000000000000000000000000000000000000000000005a1015611cb057604051630f724b8160e11b815260040160405180910390fd5b6002546040515f9182916001600160a01b03909116907f00000000000000000000000000000000000000000000000000000000000000009063118d587360e21b90611cff908990602401614ceb565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611d3d9190614cf9565b5f604051808303815f8787f1925050503d805f8114611d77576040519150601f19603f3d011682016040523d82523d5f602084013e611d7c565b606091505b5091509150811580611d8f575060208151115b15611da057505f9485945092505050565b602081015161ffff811681148015611dbc5750611dbc81612ca3565b611dc7575f80611dcb565b6001815b90955093505050505b915091565b5f81604001516001600160a01b03166399c46d9933846040518363ffffffff1660e01b8152600401611e0c929190614d25565b602060405180830381865afa158015611e27573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e4b9190614d42565b9050620f424062ffffff821610611e7557604051637e2df70960e11b815260040160405180910390fd5b919050565b83545f906001600160a01b031615611ea557604051637983c05160e01b815260040160405180910390fd5b611eae84612d12565b604080516080810182526001600160a01b0396909616808752600283900b602088015261ffff9590951690860181905262ffffff938416606090960186905286546001600160b81b031916909417600160a01b938216939093029290921764ffffffffff60b81b1916600160b81b90930262ffffff60c81b191692909217600160c81b90930292909217909255919050565b81546001600160a01b0316611f685760405163486aa30760e01b815260040160405180910390fd5b60049190910180546001600160a01b0319166001600160a01b03909216919091179055565b5f546001600160a01b031633146110f05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016119c6565b81546001600160a01b031661200e5760405163486aa30760e01b815260040160405180910390fd5b815461ffff909116600160b81b0261ffff60b81b19909116179055565b5f818152600360205260409020546001600160a01b03166119d85760405163486aa30760e01b815260040160405180910390fd5b5f61206a8484611c14565b80156106c057506040516304e6f4f760e41b6020820152602401604051602081830303815290604052805190602001206001600160e01b031916826001600160e01b03191614949350505050565b80600f81900b8114611e75576040516393dafdf160e01b815260040160405180910390fd5b6040805160808101825283546001600160a01b0381168252600160a01b810460020b602080840191909152600160b81b820461ffff1683850152600160c81b90910462ffffff166060830152830151918301515f9261213b91613017565b5f8061214c868685602001516130b3565b915091508460600151600f0b5f14612285575f80866020015160020b856020015160020b12156121ac576121a56121a061218989602001516132b9565b6121968a604001516132b9565b8a606001516135d4565b6120b8565b9150612270565b866040015160020b856020015160020b1215612243576121d96121a0865f01516121968a604001516132b9565b91506121fa6121a06121ee89602001516132b9565b875160608b015161360f565b6003890154606089015191925061221c916001600160801b039091169061363b565b6003890180546001600160801b0319166001600160801b0392909216919091179055612270565b61226d6121a061225689602001516132b9565b6122638a604001516132b9565b8a6060015161360f565b90505b6001600160801b038116608083901b17955050505b6122b6846122b16122958561366b565b61229e8561366b565b6001600160801b031660809190911b1790565b613698565b9695505050505050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f61231861442d565b82604001515f0361233c5760405163be8b850760e01b815260040160405180910390fd5b6040805160808101825285546001600160a01b0381168252600160a01b810460020b602080840191909152600160b81b820461ffff1693830193909352600160c81b900462ffffff166060820152908401516123e957805f01516001600160a01b031684606001516001600160a01b03161115806123e4575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b031684606001516001600160a01b031610155b61242c565b805f01516001600160a01b031684606001516001600160a01b031610158061242c57506401000276a36001600160a01b031684606001516001600160a01b031611155b156124645780516060850151604051635ae20f7f60e11b81526001600160a01b039283166004820152911660248201526044016119c6565b6040805180820190915260038601546001600160801b031681526020858101515f92918201906124a0576008846040015161ffff16901c6124b2565b61010084604001516124b29190614d71565b60ff16905260048701549091506001600160a01b03168015612529576040516310a537f160e11b815263ffffffff421660048201526001600160a01b0382169063214a6fe2906024015f604051808303815f87803b158015612512575f80fd5b505af1158015612524573d5f803e3d5ffd5b505050505b5f808760400151139050604051806101000160405280886040015181526020015f8152602001855f01516001600160a01b03168152602001856020015160020b8152602001856060015162ffffff1681526020018860200151612590578960020154612596565b89600101545b81525f602080830182905286516001600160801b0316604093840152825160e081018452828152908101829052918201819052606082018190526080820181905260a0820181905260c08201529095505b855115801590612611575087606001516001600160a01b031686604001516001600160a01b031614155b156129ff5760408601516001600160a01b031681526060860151885160208a01516126429260068d019290916136c4565b1515604083015260020b60208201819052620d89e719131561266d57620d89e71960208201526126a1565b61267a620d89e719614d91565b60020b816020015160020b13156126a157612698620d89e719614d91565b60020b60208201525b6126ae81602001516132b9565b6001600160a01b031660608201526040860151602089015161273491906126f15789606001516001600160a01b031683606001516001600160a01b03161161270f565b89606001516001600160a01b031683606001516001600160a01b0316105b61271d578260600151612723565b89606001515b60e0890151895160808b01516137fe565b60c085015260a084015260808301526001600160a01b0316604087015281156127965761276a8160c001518260800151016139e6565b865103865260a081015161277d906139e6565b866020015161278c9190614db1565b60208701526127d9565b6127a38160a001516139e6565b865101865260c081015160808201516127c4916127bf91614dd7565b6139e6565b86602001516127d39190614dea565b60208701525b602084015160ff1615612815575f846020015160ff168260c001516127fe9190614e11565b60c080840180518390039052880180519091019052505b60e08601516001600160801b031615612854576128488160c00151600160801b8860e001516001600160801b0316613a0f565b60a08701805190910190525b80606001516001600160a01b031686604001516001600160a01b0316036129cd578060400151156129a4576001600160a01b038316156128f9576020818101519089015160405163a498463360e01b815260029290920b6004830152151560248201526001600160a01b0384169063a4984633906044015f604051808303815f87803b1580156128e2575f80fd5b505af11580156128f4573d5f803e3d5ffd5b505050505b5f61296d82602001518a60200151612915578b6001015461291b565b8860a001515b8b6020015161292e578960a00151612934565b8c600201545b600292830b5f90815260058f0160205260409020600181018054909303909255918101805490920390915554600160801b9004600f0b90565b905088602001511561297c575f035b60e0870151612994906001600160801b03168261363b565b6001600160801b031660e0880152505b87602001516129b75780602001516129c0565b60018160200151035b60020b60608701526125e7565b805f01516001600160a01b031686604001516001600160a01b0316146129fa576129c08660400151612d12565b6125e7565b846020015160020b866060015160020b14612a5857604086015160608701518a546001600160b81b031916600160a01b62ffffff909216919091026001600160a01b031916176001600160a01b03909116178955612a78565b604086015189546001600160a01b0319166001600160a01b039091161789555b8560e001516001600160801b0316845f01516001600160801b031614612abf5760e086015160038a0180546001600160801b0319166001600160801b039092169190911790555b876020015115612ad85760a086015160018a0155612ae3565b60a086015160028a01555b5f808315158a60200151151514612b1857612b0188602001516120b8565b612b13895f01518c60400151036120b8565b612b37565b612b2a885f01518b60400151036120b8565b612b3789602001516120b8565b6001600160801b031660809190911b179b979a509698505050505050505050565b5f612b6b82546001600160a01b03161590565b15612b895760405163486aa30760e01b815260040160405180910390fd5b50600401546001600160a01b031690565b60038301545f9081906001600160801b03168103612bcb5760405163a74f97ab60e01b815260040160405180910390fd5b612bd76122958561366b565b91508315612c0a576003850154612bfe908590600160801b906001600160801b0316613a0f565b60018601805490910190555b8215612c3b576003850154612c2f908490600160801b906001600160801b0316613a0f565b60028601805490910190555b5092549293600160a01b90930460020b92915050565b81546001600160a01b0316612c795760405163486aa30760e01b815260040160405180910390fd5b815462ffffff909116600160c81b0262ffffff60c81b19909116179055565b5f61ffff8216611684565b5f61ffff821615612d0a575f612cbb61010084614d71565b905060ff600884901c1661ffff821615801590612cdc5750600461ffff8316105b80612cf9575061ffff811615801590612cf95750600461ffff8216105b15612d0757505f9392505050565b50505b506001919050565b5f6401000276a36001600160a01b0383161080612d4c575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b03831610155b15612d6a5760405163015680db60e11b815260040160405180910390fd5b640100000000600160c01b03602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c97908811961790941790921717909117171760808110612dfe57607f810383901c9150612e08565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b1461300857886001600160a01b0316612fed826132b9565b6001600160a01b03161115613002578161300a565b8061300a565b815b9998505050505050505050565b8060020b8260020b1261304b5760405163c4433ed560e01b8152600283810b600483015282900b60248201526044016119c6565b620d89e719600283900b121561307a5760405163d5e2f7ab60e01b8152600283900b60048201526024016119c6565b613087620d89e719614d91565b60020b8160020b1315611b815760405163035aeeff60e31b8152600282900b60048201526024016119c6565b600183015460028401546040805160e0810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c081018290529092839290916060870151600f0b156131ba576131148760800151613aab565b6001600160801b031660c08201819052602088015160608901516131459260058c0192918a91889088905f90613b30565b151581526040870151606088015160c08301516131729260058c019290918a919088908890600190613b30565b1515602082015280511561319857602087015160808801516131989160068b0191613c0b565b8060200151156131ba57604087015160808801516131ba9160068b0191613c0b565b602087015160408801516131d59160058b0191898787613ca8565b82604001836060018281525082815250505061322687606001518260400151836060015161321e8b5f01518c602001518d604001518f600701611a6a909392919063ffffffff16565b929190613d4d565b60a0830152608082015260608701515f600f9190910b12156132a05780511561327057602087810151600290810b5f90815260058b01909252604082208281556001810183905501555b8060200151156132a057604087810151600290810b5f90815260058b016020529182208281556001810183905501555b80608001518160a0015194509450505050935093915050565b5f805f8360020b126132ce578260020b6132d5565b8260020b5f035b9050620d89e88111156132fb576040516333a3bdff60e21b815260040160405180910390fd5b5f816001165f0361331057600160801b613322565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615613356576ffff97272373d413259a46990580e213a0260801c5b6004821615613375576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615613394576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156133b3576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156133d2576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156133f1576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615613410576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615613430576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615613450576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615613470576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615613490576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156134b0576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156134d0576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156134f0576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615613510576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615613531576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615613551576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615613570576d2216e584f5fa1ea926041bedfe980260801c5b6208000082161561358d576b048a170391f7dc42444e8fa20260801c5b5f8460020b13156135ac57805f19816135a8576135a8614d5d565b0490505b6401000000008106156135c05760016135c2565b5f5b60ff16602082901c0192505050919050565b5f8082600f0b126135f4576135ef6127bf8585856001613e4b565b6106c0565b6136056127bf8585855f035f613e4b565b5f03949350505050565b5f8082600f0b1261362a576135ef6127bf8585856001613f16565b6136056127bf8585855f035f613f16565b5f8082600f0b12156136615761365082614e24565b61365a9084614e40565b9050611684565b611c248284614e60565b5f60016001607f1b03821115613694576040516393dafdf160e01b815260040160405180910390fd5b5090565b5f611c246136a68360801c90565b6136b08560801c90565b6136ba9190614e80565b61229e8486614e80565b5f805f8460020b8660020b816136dc576136dc614d5d565b0590505f8660020b12801561370857508460020b8660020b8161370157613701614d5d565b0760020b15155b15613711575f19015b831561378357600281900b600881901d600181810b5f90815260208b9052604090205461010090930760ff81169190911b80015f19019283168015159550919290918561376557888360ff16860302613778565b8861376f82613f93565b840360ff168603025b9650505050506137f4565b600181810160020b600881901d80830b5f90815260208b9052604090205461010090920760ff81169390931b5f190119918216801515955090929190856137d757888360ff0360ff168660010101026137ed565b88836137e283614031565b0360ff168660010101025b9650505050505b5094509492505050565b5f8080806001600160a01b03808916908a161015818712801590613881575f6138358989620f42400362ffffff16620f4240613a0f565b90508261384e576138498c8c8c6001613f16565b61385b565b61385b8b8d8c6001613e4b565b955085811061386c578a965061387b565b6138788c8b8386614118565b96505b506138c7565b81613897576138928b8b8b5f613e4b565b6138a3565b6138a38a8c8b5f613f16565b935083885f03106138b6578995506138c7565b6138c48b8a8a5f0385614173565b95505b6001600160a01b038a8116908716148215613929578080156138e65750815b6138fc576138f7878d8c6001613e4b565b6138fe565b855b955080801561390b575081155b6139205761391b878d8c5f613f16565b613922565b845b9450613972565b8080156139335750815b613949576139448c888c6001613f16565b61394b565b855b9550808015613958575081155b61396d576139688c888c5f613e4b565b61396f565b845b94505b811580156139815750885f0385115b1561398c57885f0394505b8180156139ab57508a6001600160a01b0316876001600160a01b031614155b156139ba5785890393506139d7565b6139d4868962ffffff168a620f42400362ffffff166141cc565b93505b50505095509550955095915050565b5f6001600160ff1b03821115613694576040516393dafdf160e01b815260040160405180910390fd5b5f838302815f1985870982811083820303915050808411613a2e575f80fd5b805f03613a4057508290049050611c24565b5f848688095f868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b5f8082613abc81620d89e719614ead565b613ac69190614ee5565b90505f8380613ad8620d89e719614d91565b613ae29190614ead565b613aec9190614ee5565b90505f84613afa8484614f04565b613b049190614ead565b613b0f906001614f29565b9050613b2762ffffff82166001600160801b03614f45565b95945050505050565b600287900b5f90815260208990526040812080546001600160801b0381169060801c83613b5d838b61363b565b9050856001600160801b0316816001600160801b03161115613b985760405163b8e3c38560e01b815260028d900b60048201526024016119c6565b6001600160801b03818116159084168015919091141595505f03613bd2578a60020b8c60020b13613bd25760018401899055600284018890555b5f87613be757613be28b84614f6a565b613bf1565b613bf18b84614e80565b60801b9190911790935550919a9950505050505050505050565b8060020b8260020b81613c2057613c20614d5d565b0760020b15613c5057604051636a6c79f360e11b8152600283810b600483015282900b60248201526044016119c6565b5f80613c7d8360020b8560020b81613c6a57613c6a614d5d565b0560020b600881901d9161010090910790565b600191820b5f9081526020979097526040909620805460ff9097169190911b90951890945550505050565b600285810b5f8181526020899052604080822088850b83529082209193849391929184918291908a900b12613ce857505060018201546002830154613cfb565b8360010154880391508360020154870390505b5f808b60020b8b60020b1215613d1c57505060018301546002840154613d2f565b84600101548a0391508460020154890390505b92909803979097039b96909503949094039850939650505050505050565b6040805160608101825285546001600160801b03168152600186015460208201526002860154918101919091525f90819081600f87900b8103613dbc5781516001600160801b03165f03613db457604051632bbfae4960e21b815260040160405180910390fd5b508051613dcb565b8151613dc8908861363b565b90505b613dec82602001518703835f01516001600160801b0316600160801b613a0f565b9350613e0f82604001518603835f01516001600160801b0316600160801b613a0f565b925086600f0b5f14613e355787546001600160801b0319166001600160801b0382161788555b5050600186019390935560029094015591929050565b5f836001600160a01b0316856001600160a01b03161115613e6a579293925b600160601b600160e01b03606084901b166001600160a01b0386860381169087165f03613ea95760405162bfc92160e01b815260040160405180910390fd5b83613edf57866001600160a01b0316613ecc8383896001600160a01b0316613a0f565b81613ed957613ed9614d5d565b04613f0b565b613f0b613ef68383896001600160a01b03166141cc565b886001600160a01b0316808204910615150190565b979650505050505050565b5f836001600160a01b0316856001600160a01b03161115613f35579293925b81613f6957613f646001600160801b038416613f518787614f97565b6001600160a01b0316600160601b613a0f565b613b27565b613b276001600160801b038416613f808787614f97565b6001600160a01b0316600160601b6141cc565b5f808211613f9f575f80fd5b600160801b8210613fb257608091821c91015b680100000000000000008210613fca57604091821c91015b6401000000008210613fde57602091821c91015b620100008210613ff057601091821c91015b610100821061400157600891821c91015b6010821061401157600491821c91015b6004821061402157600291821c91015b60028210611e7557600101919050565b5f80821161403d575f80fd5b5060ff6001600160801b0382161561405857607f1901614060565b608082901c91505b67ffffffffffffffff82161561407957603f1901614081565b604082901c91505b63ffffffff82161561409657601f190161409e565b602082901c91505b61ffff8216156140b157600f19016140b9565b601082901c91505b60ff8216156140cb57600719016140d3565b600882901c91505b600f8216156140e557600319016140ed565b600482901c91505b60038216156140ff5760011901614107565b600282901c91505b6001821615611e75575f1901919050565b5f6001600160a01b038516158061413657506001600160801b038416155b15614154576040516309e48c3760e31b815260040160405180910390fd5b8161416657613f648585856001614208565b613b2785858560016142ff565b5f6001600160a01b038516158061419157506001600160801b038416155b156141af576040516309e48c3760e31b815260040160405180910390fd5b816141c057613f648585855f6142ff565b613b278585855f614208565b5f6141d8848484613a0f565b90505f82806141e9576141e9614d5d565b8486091115611c24575f1981106141fe575f80fd5b6001019392505050565b5f8115614278575f6001600160a01b0384111561423c5761423784600160601b876001600160801b0316613a0f565b614253565b6142536001600160801b038616606086901b614e11565b905061427061426b826001600160a01b038916614dd7565b614403565b9150506106c0565b5f6001600160a01b038411156142a5576142a084600160601b876001600160801b03166141cc565b6142c2565b6142c2606085901b6001600160801b038716808204910615150190565b905080866001600160a01b0316116142ed57604051634323a55560e01b815260040160405180910390fd5b6001600160a01b0386160390506106c0565b5f825f0361430e5750836106c0565b600160601b600160e01b03606085901b1682156143a0576001600160a01b0386168481029085828161434257614342614d5d565b0403614372578181018281106143705761436683896001600160a01b0316836141cc565b93505050506106c0565b505b50614270818561438b6001600160a01b038a1683614e11565b6143959190614dd7565b808204910615150190565b6001600160a01b038616848102908582816143bd576143bd614d5d565b041415806143cb5750808211155b156143e95760405163f5c787f160e01b815260040160405180910390fd5b80820361436661426b846001600160a01b038b16846141cc565b806001600160a01b0381168114611e75576040516393dafdf160e01b815260040160405180910390fd5b6040518061010001604052805f81526020015f81526020015f6001600160a01b031681526020015f60020b81526020015f62ffffff1681526020015f81526020015f81526020015f6001600160801b031681525090565b6001600160a01b03811681146119d8575f80fd5b8035600281900b8114611e75575f80fd5b5f805f80608085870312156144bc575f80fd5b8435935060208501356144ce81614484565b92506144dc60408601614498565b91506144ea60608601614498565b905092959194509250565b5f60208284031215614505575f80fd5b5035919050565b634e487b7160e01b5f52604160045260245ffd5b6040516060810167ffffffffffffffff811182821017156145435761454361450c565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156145725761457261450c565b604052919050565b62ffffff811681146119d8575f80fd5b5f60c0828403121561459a575f80fd5b60405160c0810181811067ffffffffffffffff821117156145bd576145bd61450c565b60405290508082356145ce81614484565b815260208301356145de81614484565b602082015260408301356145f181614484565b6040820152606083013561460481614484565b606082015260808301356146178161457a565b608082015260a092830135920191909152919050565b5f8083601f84011261463d575f80fd5b50813567ffffffffffffffff811115614654575f80fd5b60208301915083602082850101111561466b575f80fd5b9250929050565b5f805f806101008587031215614686575f80fd5b614690868661458a565b935060c08501356146a081614484565b925060e085013567ffffffffffffffff8111156146bb575f80fd5b6146c78782880161462d565b95989497509550505050565b5f8060e083850312156146e4575f80fd5b6146ee848461458a565b915060c08301356146fe81614484565b809150509250929050565b5f60208284031215614719575f80fd5b8135611c2481614484565b5f60c08284031215614734575f80fd5b611c24838361458a565b5f805f80848603610140811215614753575f80fd5b61475d878761458a565b9450606060bf1982011215614770575f80fd5b50614779614520565b61478560c08701614498565b815261479360e08701614498565b60208201526101008601356040820152925061012085013567ffffffffffffffff8111156146bb575f80fd5b5f805f606084860312156147d1575f80fd5b83356147dc81614484565b925060208401356147ec81614484565b929592945050506040919091013590565b5f805f80848603610140811215614812575f80fd5b61481c878761458a565b9450606060bf198201121561482f575f80fd5b50614838614520565b60c0860135801515811461484a575f80fd5b815260e0860135602082015261010086013561486581614484565b6040820152925061012085013567ffffffffffffffff8111156146bb575f80fd5b5f6020808385031215614897575f80fd5b823567ffffffffffffffff808211156148ae575f80fd5b818501915085601f8301126148c1575f80fd5b8135818111156148d3576148d361450c565b8060051b91506148e4848301614549565b81815291830184019184810190888411156148fd575f80fd5b938501935b8385101561491b57843582529385019390850190614902565b98975050505050505050565b602080825282518282018190525f9190848201906040850190845b8181101561495e57835183529284019291840191600101614942565b50909695505050505050565b5f805f805f610120868803121561497f575f80fd5b614989878761458a565b945060c0860135935060e0860135925061010086013567ffffffffffffffff8111156149b3575f80fd5b6149bf8882890161462d565b969995985093965092949392505050565b80516001600160a01b0390811683526020808301518216908401526040808301518216908401526060808301519091169083015260808082015162ffffff169083015260a090810151910152565b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b6001600160a01b0386811682525f9061012090614a6660208501896149d0565b861660e0840152610100830181905261491b8184018587614a1e565b5f60208284031215614a92575f80fd5b81516001600160e01b031981168114611c24575f80fd5b6001600160a01b0387811682525f9061014090614ac9602085018a6149d0565b80881660e0850152508560020b6101008401528061012084015261300a8184018587614a1e565b6001600160a01b03861681525f610160614b0d60208401886149d0565b8551600290810b60e08501526020870151900b61010084015260408601516101208401525b8061014084015261491b8184018587614a1e565b6101008101614b5582866149d0565b60c08201939093526001600160a01b039190911660e090910152919050565b6001600160a01b03871681525f610180614b9160208401896149d0565b8651600290810b60e08501526020880151900b61010084015260408701516101208401525b856101408401528061016084015261300a8184018587614a1e565b634e487b7160e01b5f52601160045260245ffd5b8181038181111561168457611684614bd1565b6001600160a01b03861681525f610160614c1560208401886149d0565b8551151560e0840152602086015161010084015260408601516001600160a01b0316610120840152614b32565b6001600160a01b03871681525f610180614c5f60208401896149d0565b8651151560e0840152602087015161010084015260408701516001600160a01b0316610120840152614bb6565b6001600160a01b03871681525f610140614ca960208401896149d0565b8660e0840152856101008401528061012084015261300a8184018587614a1e565b5f60208284031215614cda575f80fd5b815161ffff81168114611c24575f80fd5b60c0810161168482846149d0565b5f82515f5b81811015614d185760208186018101518583015201614cfe565b505f920191825250919050565b6001600160a01b038316815260e08101611c2460208301846149d0565b5f60208284031215614d52575f80fd5b8151611c248161457a565b634e487b7160e01b5f52601260045260245ffd5b5f61ffff80841680614d8557614d85614d5d565b92169190910692915050565b5f8160020b627fffff198103614da957614da9614bd1565b5f0392915050565b8181035f831280158383131683831282161715614dd057614dd0614bd1565b5092915050565b8082018082111561168457611684614bd1565b8082018281125f831280158216821582161715614e0957614e09614bd1565b505092915050565b5f82614e1f57614e1f614d5d565b500490565b5f81600f0b60016001607f1b03198103614da957614da9614bd1565b6001600160801b03828116828216039080821115614dd057614dd0614bd1565b6001600160801b03818116838216019080821115614dd057614dd0614bd1565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561168457611684614bd1565b5f8160020b8360020b80614ec357614ec3614d5d565b627fffff1982145f1982141615614edc57614edc614bd1565b90059392505050565b5f8260020b8260020b028060020b9150808214614dd057614dd0614bd1565b600282810b9082900b03627fffff198112627fffff8213171561168457611684614bd1565b62ffffff818116838216019080821115614dd057614dd0614bd1565b5f6001600160801b0380841680614f5e57614f5e614d5d565b92169190910492915050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561168457611684614bd1565b6001600160a01b03828116828216039080821115614dd057614dd0614bd156fea26469706673582212206e25b1fc6d732704f798960218bb10721e54dee9451f66e194c427b29e51feb864736f6c63430008180033",
        sourceMap:
          "1044:13311:76:-:0;;;1700:90;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;1760:6;1768:18;936:32:21;719:10:32;936:18:21;:32::i;:::-;-1:-1:-1;;;;;830:14:39;;;;;854:40;;-1:-1:-1;1044:13311:76;;-1:-1:-1;1044:13311:76;2426:187:21;2499:16;2518:6;;-1:-1:-1;;;;;2534:17:21;;;-1:-1:-1;;;;;;2534:17:21;;;;;;2566:40;;2518:6;;;;;;;2566:40;;2499:16;2566:40;2489:124;2426:187;:::o;14:367:154:-;109:6;117;170:2;158:9;149:7;145:23;141:32;138:52;;;186:1;183;176:12;138:52;212:16;;-1:-1:-1;;;;;257:31:154;;247:42;;237:70;;303:1;300;293:12;237:70;371:2;356:18;;;;350:25;326:5;;350:25;;-1:-1:-1;;;14:367:154:o;:::-;1044:13311:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;",
        linkReferences: {},
      },
      deployedBytecode: {
        object:
          "0x608060405234801561000f575f80fd5b50600436106101bb575f3560e01c80638da5cb5b116100f3578063ee68111411610093578063f2fde38b1161006e578063f2fde38b146105c3578063f427ddba146105d6578063fa6793d5146105e9578063fbfa77cf14610615575f80fd5b8063ee6811141461058a578063f02de3b21461059d578063f15b275f146105b0575f80fd5b8063b5217bb4116100ce578063b5217bb4146103a8578063c815641c146104aa578063cd0cc1ce14610557578063dbd035ff1461056a575f80fd5b80638da5cb5b1461036657806397e8cd4e14610376578063a2d9f4dc14610395575f80fd5b8063575a86b21161015e57806360460f061161013957806360460f0614610328578063715018a6146103315780638161b8741461033957806384e41c5e1461034c575f80fd5b8063575a86b2146102d75780635afdef74146103025780635c3379f914610315575f80fd5b8063222bb36b11610199578063222bb36b1461023d57806323a8c31f146102505780632d7713891461026557806333aa955b14610278575f80fd5b8063048d9c70146101bf57806307eff0dd146102025780631e2eaeaf1461021d575b5f80fd5b6101d26101cd3660046144a9565b61063c565b6040805182516001600160801b031681526020808401519082015291810151908201526060015b60405180910390f35b61020a600181565b60405160029190910b81526020016101f9565b61022f61022b3660046144f5565b5490565b6040519081526020016101f9565b61020a61024b366004614672565b6106c8565b61026361025e3660046146d3565b610a30565b005b610263610273366004614709565b610adb565b6102bf6102863660046144a9565b5f93845260036020818152604080872060069490945293909152928452601a600c2084526007019091529020546001600160801b031690565b6040516001600160801b0390911681526020016101f9565b6004546102ea906001600160a01b031681565b6040516001600160a01b0390911681526020016101f9565b610263610310366004614724565b610b38565b61022f61032336600461473e565b610bc8565b61020a617fff81565b6102636110df565b61022f6103473660046147bf565b6110f2565b610354600481565b60405160ff90911681526020016101f9565b5f546001600160a01b03166102ea565b61022f610384366004614709565b60016020525f908152604090205481565b6102636103a3366004614709565b611218565b61043c6103b63660046144f5565b600360208181525f928352604092839020835160808101855281546001600160a01b038082168352600160a01b8204600290810b95840195909552600160b81b820461ffff1696830196909652600160c81b900462ffffff1660608201526001820154928201549382015460049092015490949293926001600160801b03909216911685565b6040805186516001600160a01b03908116825260208089015160020b908301528783015161ffff169282019290925260609687015162ffffff1696810196909652608086019490945260a08501929092526001600160801b031660c08401521660e0820152610100016101f9565b61051c6104b83660046144f5565b5f90815260036020908152604091829020825160808101845290546001600160a01b038116808352600160a01b820460020b938301849052600160b81b820461ffff16948301859052600160c81b90910462ffffff16606090920182905293919291565b604080516001600160a01b03909516855260029390930b602085015261ffff9091169183019190915262ffffff1660608201526080016101f9565b61022f6105653660046147fd565b61126e565b61057d610578366004614886565b611640565b6040516101f99190614927565b6102ea6105983660046144f5565b61166e565b6002546102ea906001600160a01b031681565b61022f6105be36600461496a565b61168a565b6102636105d1366004614709565b61195d565b6102636105e4366004614724565b6119db565b6102bf6105f73660046144f5565b5f90815260036020819052604090912001546001600160801b031690565b6102ea7f000000000000000000000000000000000000000000000000000000000000000081565b61066660405180606001604052805f6001600160801b031681526020015f81526020015f81525090565b5f858152600360208181526040808420600687905292879052878452601a600c2084526007909201905290206040805160608101825282546001600160801b03168152600183015460208201526002909201549082015290505b949350505050565b60608401515f90306001600160a01b038216146106f8576040516341bcf19160e11b815260040160405180910390fd5b6080860151620f4240620fffff9091161061072657604051637e2df70960e11b815260040160405180910390fd5b5f6107348760a00151611a88565b9050617fff600282900b131561075d57604051635815aee160e11b815260040160405180910390fd5b6001600282900b121561078357604051630b7f3b4b60e11b815260040160405180910390fd5b865160208801516001600160a01b039081169116106107b5576040516305a25e7160e11b815260040160405180910390fd5b60408701516107c388611a98565b6107cc88611b85565b60a08801516107db905f611c14565b1561087e57604051634b970cd160e11b808252906001600160a01b0383169063972e19a2906108169033908d908d908d908d90600401614a46565b6020604051808303815f875af1158015610832573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906108569190614a82565b6001600160e01b0319161461087e57604051631e048e1d60e01b815260040160405180910390fd5b5f61088889611c2b565b90505f6108948a611c5a565b60808c01519092505f915062800000166108b75760808b0151620fffff166108c0565b6108c08b611dd9565b5f8481526003602052604090209091506108dc908b8484611e7a565b96508a602001516001600160a01b03168b5f01516001600160a01b0316847f3fd553db44f207b1f41348cfc4d251860814af9eadc470e8e7895e4d120511f48e6080015189896040516109559392919062ffffff93909316835260029190910b60208301526001600160a01b0316604082015260600190565b60405180910390a460a08b015161096d906001611c14565b15610a2257631ffe6a5860e01b6001600160e01b031916846001600160a01b0316631ffe6a58338e8e8c8f8f6040518763ffffffff1660e01b81526004016109ba96959493929190614aa9565b6020604051808303815f875af11580156109d6573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906109fa9190614a82565b6001600160e01b03191614610a2257604051631e048e1d60e01b815260040160405180910390fd5b505050505050949350505050565b6004546001600160a01b03163314801590610a5557505f546001600160a01b03163314155b15610a7357604051635c427cd960e01b815260040160405180910390fd5b5f610a7d83611c2b565b5f818152600360205260409020909150610a979083611f40565b6040516001600160a01b038316815281907f3243472b273ee2a43e46423bab8bbd85d5710efee41e4a46c681d6e94c0adae6906020015b60405180910390a2505050565b610ae3611f8d565b600280546001600160a01b0319166001600160a01b0383169081179091556040519081527fb4bd8ef53df690b9943d3318996006dbb82a25f54719d8c8035b516a2a5b8acc906020015b60405180910390a150565b5f80610b4383611c5a565b9150915081610b655760405163e7ca185f60e01b815260040160405180910390fd5b5f610b6f84611c2b565b5f818152600360205260409020909150610b899083611fe6565b60405161ffff8316815281907f9f9496a7bce5dc5951d2db4c6bac380c9bcbcc9a4e9c18eafbcc231d06de481a9060200160405180910390a250505050565b60608401515f90306001600160a01b03821614610bf8576040516341bcf19160e11b815260040160405180910390fd5b5f610c0287611c2b565b9050610c0d8161202b565b604080880151908701515f128015610c30575060a0880151610c30906002611c14565b15610d07576040516330227e9f60e21b81525f906001600160a01b0383169063c089fa7c90610c6b9033908d908d908d908d90600401614af0565b6020604051808303815f875af1158015610c87573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610cab9190614a82565b60a08a0151909150610cbf90600a8361205f565b15610cd0575f1994505050506110d6565b6001600160e01b031981166330227e9f60e21b14610d0157604051631e048e1d60e01b815260040160405180910390fd5b50610dff565b5f876040015113158015610d26575060a0880151610d26906004611c14565b15610dff57604051600162319b8d60e11b031981525f906001600160a01b0383169063ff9cc8e690610d649033908d908d908d908d90600401614af0565b6020604051808303815f875af1158015610d80573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610da49190614a82565b60a08a0151909150610db890600a8361205f565b15610dc9575f1994505050506110d6565b6001600160e01b03198116600162319b8d60e11b031914610dfd57604051631e048e1d60e01b815260040160405180910390fd5b505b610e6f6040518060a00160405280336001600160a01b03168152602001895f015160020b8152602001896020015160020b8152602001610e428a604001516120b8565b600f0b8152602001610e578b60a00151611a88565b60020b90525f848152600360205260409020906120dd565b604051630c05145560e21b81529094506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633014515490610ec2908b9088903390600401614b46565b5f604051808303815f87803b158015610ed9575f80fd5b505af1158015610eeb573d5f803e3d5ffd5b505088516020808b01516040808d01518151600295860b81529290940b9282019290925280820192909252513393508592507f541c041c2cce48e614b3de043c9280f06b6164c0a1741649e2de3c3d375f79749181900360600190a35f8760400151138015610f65575060a0880151610f65906003611c14565b1561100f57604051631e3b7a8360e01b808252906001600160a01b03831690631e3b7a8390610fa29033908d908d908b908e908e90600401614b74565b6020604051808303815f875af1158015610fbe573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190610fe29190614a82565b6001600160e01b0319161461100a57604051631e048e1d60e01b815260040160405180910390fd5b6110d3565b5f87604001511315801561102e575060a088015161102e906005611c14565b156110d35760405163b23855d360e01b808252906001600160a01b0383169063b23855d39061106b9033908d908d908b908e908e90600401614b74565b6020604051808303815f875af1158015611087573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906110ab9190614a82565b6001600160e01b031916146110d357604051631e048e1d60e01b815260040160405180910390fd5b50505b50949350505050565b6110e7611f8d565b6110f05f6122c0565b565b5f80546001600160a01b0316331480159061111857506002546001600160a01b03163314155b1561113657604051635b5c395f60e01b815260040160405180910390fd5b8115611142578161115b565b6001600160a01b0383165f908152600160205260409020545b6001600160a01b0384165f90815260016020526040812080549293508392909190611187908490614be5565b909155505060405163eb78b43560e01b81526001600160a01b0384811660048301526024820183905285811660448301527f0000000000000000000000000000000000000000000000000000000000000000169063eb78b435906064015f604051808303815f87803b1580156111fb575f80fd5b505af115801561120d573d5f803e3d5ffd5b505050509392505050565b611220611f8d565b600480546001600160a01b0319166001600160a01b0383169081179091556040519081527fd552c738541d32420dc50532aa4d09df4032b4739ce4025e688382694313871c90602001610b2d565b60608401515f90306001600160a01b0382161461129e576040516341bcf19160e11b815260040160405180910390fd5b5f6112a887611c2b565b90506112b38161202b565b604087015160a08801516112c8906006611c14565b1561139b5760405163e592dc9360e01b81525f906001600160a01b0383169063e592dc93906113039033908d908d908d908d90600401614bf8565b6020604051808303815f875af115801561131f573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906113439190614a82565b60a08a015190915061135790600a8361205f565b15611368575f1994505050506110d6565b6001600160e01b0319811663e592dc9360e01b1461139957604051631e048e1d60e01b815260040160405180910390fd5b505b6113a361442d565b61140b60405180608001604052806113be8c60a00151611a88565b60020b81526020018a5f0151151581526020018a6020015181526020018a604001516001600160a01b031681525060035f8681526020019081526020015f2061230f90919063ffffffff16565b604051630c05145560e21b815291965091506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633014515490611460908c9089903390600401614b46565b5f604051808303815f87803b158015611477575f80fd5b505af1158015611489573d5f803e3d5ffd5b5050505060c0810151156114d4578060c0015160015f8a5f01516114b1578b602001516114b4565b8b515b6001600160a01b0316815260208101919091526040015f20805490910190555b33837fc5dfe1011e80c9b7f892c298cc5733a4b7148919058624a5a4d6f7f66cc3e4506115018860801c90565b8860408087015160e0880151606089015160808a015160c08b0151945161157797969590600f97880b81529590960b60208601526001600160a01b039390931660408501526001600160801b0391909116606084015260020b608083015262ffffff1660a082015260c081019190915260e00190565b60405180910390a360a089015161158f906007611c14565b1561163457604051636f6657cb60e01b808252906001600160a01b03841690636f6657cb906115cc9033908e908e908c908f908f90600401614c42565b6020604051808303815f875af11580156115e8573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061160c9190614a82565b6001600160e01b0319161461163457604051631e048e1d60e01b815260040160405180910390fd5b50505050949350505050565b606060208251028201602001602083015b81811015611666578051548152602001611651565b509192915050565b5f81815260036020526040812061168490612b58565b92915050565b60608501515f90306001600160a01b038216146116ba576040516341bcf19160e11b815260040160405180910390fd5b5f6116c488611c2b565b90506116cf8161202b565b604088015160a08901516116e4906008611c14565b156117b957604051634b6a682d60e01b81525f906001600160a01b03831690634b6a682d906117219033908e908e908e908e908e90600401614c8c565b6020604051808303815f875af115801561173d573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906117619190614a82565b60a08b015190915061177590600a8361205f565b15611786575f199450505050611953565b6001600160e01b03198116634b6a682d60e01b146117b757604051631e048e1d60e01b815260040160405180910390fd5b505b5f8281526003602052604081206117d1908a8a612b9a565b604051630c05145560e21b815291965091506001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690633014515490611826908d9089903390600401614b46565b5f604051808303815f87803b15801561183d575f80fd5b505af115801561184f573d5f803e3d5ffd5b5050604080518c8152602081018c9052600285900b8183015290513393508692507fbe708911656ae186ac3fc26a794e5f1319609ce340a14c63524f985fee4bc8419181900360600190a360a08a01516118aa906009611c14565b1561194f576040516329826a2760e11b808252906001600160a01b03841690635304d44e906118e79033908f908f908f908f908f90600401614c8c565b6020604051808303815f875af1158015611903573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906119279190614a82565b6001600160e01b0319161461194f57604051631e048e1d60e01b815260040160405180910390fd5b5050505b5095945050505050565b611965611f8d565b6001600160a01b0381166119cf5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b6119d8816122c0565b50565b6080810151628000001615611a51575f6119f482611dd9565b90505f611a0083611c2b565b5f818152600360205260409020909150611a1a9083612c51565b60405162ffffff8316815281907fdda45bdfb4c4d89a045919c537cb189db3745c4b1977d65f1d7cf60b585e7b7290602001610ace565b604051636807896960e11b815260040160405180910390fd5b6006526003525f908152601a600c2081526020919091526040902090565b5f6116848260101c62ffffff1690565b5f611aa68260a00151612c98565b60408301519091506001600160a01b0316611af65761ffff8116158015611ad4575060808201516280000016155b15611add575050565b604051631fdd41b760e21b815260040160405180910390fd5b8061ffff1682604001516001600160a01b031663f961d1f46040518163ffffffff1660e01b8152600401602060405180830381865afa158015611b3b573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611b5f9190614cca565b61ffff1614611b8157604051631fdd41b760e21b815260040160405180910390fd5b5050565b60a0810151611b9590600a611c14565b156119d85760a0810151611baa906002611c14565b158015611bc4575060a0810151611bc2906004611c14565b155b8015611bdd575060a0810151611bdb906006611c14565b155b8015611bf6575060a0810151611bf4906008611c14565b155b156119d857604051630e808b3760e31b815260040160405180910390fd5b5f611c248360ff84161c60011690565b9392505050565b5f81604051602001611c3d9190614ceb565b604051602081830303815290604052805190602001209050919050565b6002545f9081906001600160a01b031615611dd4577f00000000000000000000000000000000000000000000000000000000000000005a1015611cb057604051630f724b8160e11b815260040160405180910390fd5b6002546040515f9182916001600160a01b03909116907f00000000000000000000000000000000000000000000000000000000000000009063118d587360e21b90611cff908990602401614ceb565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051611d3d9190614cf9565b5f604051808303815f8787f1925050503d805f8114611d77576040519150601f19603f3d011682016040523d82523d5f602084013e611d7c565b606091505b5091509150811580611d8f575060208151115b15611da057505f9485945092505050565b602081015161ffff811681148015611dbc5750611dbc81612ca3565b611dc7575f80611dcb565b6001815b90955093505050505b915091565b5f81604001516001600160a01b03166399c46d9933846040518363ffffffff1660e01b8152600401611e0c929190614d25565b602060405180830381865afa158015611e27573d5f803e3d5ffd5b505050506040513d601f19601f82011682018060405250810190611e4b9190614d42565b9050620f424062ffffff821610611e7557604051637e2df70960e11b815260040160405180910390fd5b919050565b83545f906001600160a01b031615611ea557604051637983c05160e01b815260040160405180910390fd5b611eae84612d12565b604080516080810182526001600160a01b0396909616808752600283900b602088015261ffff9590951690860181905262ffffff938416606090960186905286546001600160b81b031916909417600160a01b938216939093029290921764ffffffffff60b81b1916600160b81b90930262ffffff60c81b191692909217600160c81b90930292909217909255919050565b81546001600160a01b0316611f685760405163486aa30760e01b815260040160405180910390fd5b60049190910180546001600160a01b0319166001600160a01b03909216919091179055565b5f546001600160a01b031633146110f05760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016119c6565b81546001600160a01b031661200e5760405163486aa30760e01b815260040160405180910390fd5b815461ffff909116600160b81b0261ffff60b81b19909116179055565b5f818152600360205260409020546001600160a01b03166119d85760405163486aa30760e01b815260040160405180910390fd5b5f61206a8484611c14565b80156106c057506040516304e6f4f760e41b6020820152602401604051602081830303815290604052805190602001206001600160e01b031916826001600160e01b03191614949350505050565b80600f81900b8114611e75576040516393dafdf160e01b815260040160405180910390fd5b6040805160808101825283546001600160a01b0381168252600160a01b810460020b602080840191909152600160b81b820461ffff1683850152600160c81b90910462ffffff166060830152830151918301515f9261213b91613017565b5f8061214c868685602001516130b3565b915091508460600151600f0b5f14612285575f80866020015160020b856020015160020b12156121ac576121a56121a061218989602001516132b9565b6121968a604001516132b9565b8a606001516135d4565b6120b8565b9150612270565b866040015160020b856020015160020b1215612243576121d96121a0865f01516121968a604001516132b9565b91506121fa6121a06121ee89602001516132b9565b875160608b015161360f565b6003890154606089015191925061221c916001600160801b039091169061363b565b6003890180546001600160801b0319166001600160801b0392909216919091179055612270565b61226d6121a061225689602001516132b9565b6122638a604001516132b9565b8a6060015161360f565b90505b6001600160801b038116608083901b17955050505b6122b6846122b16122958561366b565b61229e8561366b565b6001600160801b031660809190911b1790565b613698565b9695505050505050565b5f80546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b5f61231861442d565b82604001515f0361233c5760405163be8b850760e01b815260040160405180910390fd5b6040805160808101825285546001600160a01b0381168252600160a01b810460020b602080840191909152600160b81b820461ffff1693830193909352600160c81b900462ffffff166060820152908401516123e957805f01516001600160a01b031684606001516001600160a01b03161115806123e4575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b031684606001516001600160a01b031610155b61242c565b805f01516001600160a01b031684606001516001600160a01b031610158061242c57506401000276a36001600160a01b031684606001516001600160a01b031611155b156124645780516060850151604051635ae20f7f60e11b81526001600160a01b039283166004820152911660248201526044016119c6565b6040805180820190915260038601546001600160801b031681526020858101515f92918201906124a0576008846040015161ffff16901c6124b2565b61010084604001516124b29190614d71565b60ff16905260048701549091506001600160a01b03168015612529576040516310a537f160e11b815263ffffffff421660048201526001600160a01b0382169063214a6fe2906024015f604051808303815f87803b158015612512575f80fd5b505af1158015612524573d5f803e3d5ffd5b505050505b5f808760400151139050604051806101000160405280886040015181526020015f8152602001855f01516001600160a01b03168152602001856020015160020b8152602001856060015162ffffff1681526020018860200151612590578960020154612596565b89600101545b81525f602080830182905286516001600160801b0316604093840152825160e081018452828152908101829052918201819052606082018190526080820181905260a0820181905260c08201529095505b855115801590612611575087606001516001600160a01b031686604001516001600160a01b031614155b156129ff5760408601516001600160a01b031681526060860151885160208a01516126429260068d019290916136c4565b1515604083015260020b60208201819052620d89e719131561266d57620d89e71960208201526126a1565b61267a620d89e719614d91565b60020b816020015160020b13156126a157612698620d89e719614d91565b60020b60208201525b6126ae81602001516132b9565b6001600160a01b031660608201526040860151602089015161273491906126f15789606001516001600160a01b031683606001516001600160a01b03161161270f565b89606001516001600160a01b031683606001516001600160a01b0316105b61271d578260600151612723565b89606001515b60e0890151895160808b01516137fe565b60c085015260a084015260808301526001600160a01b0316604087015281156127965761276a8160c001518260800151016139e6565b865103865260a081015161277d906139e6565b866020015161278c9190614db1565b60208701526127d9565b6127a38160a001516139e6565b865101865260c081015160808201516127c4916127bf91614dd7565b6139e6565b86602001516127d39190614dea565b60208701525b602084015160ff1615612815575f846020015160ff168260c001516127fe9190614e11565b60c080840180518390039052880180519091019052505b60e08601516001600160801b031615612854576128488160c00151600160801b8860e001516001600160801b0316613a0f565b60a08701805190910190525b80606001516001600160a01b031686604001516001600160a01b0316036129cd578060400151156129a4576001600160a01b038316156128f9576020818101519089015160405163a498463360e01b815260029290920b6004830152151560248201526001600160a01b0384169063a4984633906044015f604051808303815f87803b1580156128e2575f80fd5b505af11580156128f4573d5f803e3d5ffd5b505050505b5f61296d82602001518a60200151612915578b6001015461291b565b8860a001515b8b6020015161292e578960a00151612934565b8c600201545b600292830b5f90815260058f0160205260409020600181018054909303909255918101805490920390915554600160801b9004600f0b90565b905088602001511561297c575f035b60e0870151612994906001600160801b03168261363b565b6001600160801b031660e0880152505b87602001516129b75780602001516129c0565b60018160200151035b60020b60608701526125e7565b805f01516001600160a01b031686604001516001600160a01b0316146129fa576129c08660400151612d12565b6125e7565b846020015160020b866060015160020b14612a5857604086015160608701518a546001600160b81b031916600160a01b62ffffff909216919091026001600160a01b031916176001600160a01b03909116178955612a78565b604086015189546001600160a01b0319166001600160a01b039091161789555b8560e001516001600160801b0316845f01516001600160801b031614612abf5760e086015160038a0180546001600160801b0319166001600160801b039092169190911790555b876020015115612ad85760a086015160018a0155612ae3565b60a086015160028a01555b5f808315158a60200151151514612b1857612b0188602001516120b8565b612b13895f01518c60400151036120b8565b612b37565b612b2a885f01518b60400151036120b8565b612b3789602001516120b8565b6001600160801b031660809190911b179b979a509698505050505050505050565b5f612b6b82546001600160a01b03161590565b15612b895760405163486aa30760e01b815260040160405180910390fd5b50600401546001600160a01b031690565b60038301545f9081906001600160801b03168103612bcb5760405163a74f97ab60e01b815260040160405180910390fd5b612bd76122958561366b565b91508315612c0a576003850154612bfe908590600160801b906001600160801b0316613a0f565b60018601805490910190555b8215612c3b576003850154612c2f908490600160801b906001600160801b0316613a0f565b60028601805490910190555b5092549293600160a01b90930460020b92915050565b81546001600160a01b0316612c795760405163486aa30760e01b815260040160405180910390fd5b815462ffffff909116600160c81b0262ffffff60c81b19909116179055565b5f61ffff8216611684565b5f61ffff821615612d0a575f612cbb61010084614d71565b905060ff600884901c1661ffff821615801590612cdc5750600461ffff8316105b80612cf9575061ffff811615801590612cf95750600461ffff8216105b15612d0757505f9392505050565b50505b506001919050565b5f6401000276a36001600160a01b0383161080612d4c575073fffd8963efd1fc6a506488495d951d5263988d266001600160a01b03831610155b15612d6a5760405163015680db60e11b815260040160405180910390fd5b640100000000600160c01b03602083901b166001600160801b03811160071b81811c67ffffffffffffffff811160061b90811c63ffffffff811160051b90811c61ffff811160041b90811c60ff8111600390811b91821c600f811160021b90811c918211600190811b92831c97908811961790941790921717909117171760808110612dfe57607f810383901c9150612e08565b80607f0383901b91505b908002607f81811c60ff83811c9190911c800280831c81831c1c800280841c81841c1c800280851c81851c1c800280861c81861c1c800280871c81871c1c800280881c81881c1c800280891c81891c1c8002808a1c818a1c1c8002808b1c818b1c1c8002808c1c818c1c1c8002808d1c818d1c1c8002808e1c9c81901c9c909c1c80029c8d901c9e9d607f198f0160401b60c09190911c678000000000000000161760c19b909b1c674000000000000000169a909a1760c29990991c672000000000000000169890981760c39790971c671000000000000000169690961760c49590951c670800000000000000169490941760c59390931c670400000000000000169290921760c69190911c670200000000000000161760c79190911c670100000000000000161760c89190911c6680000000000000161760c99190911c6640000000000000161760ca9190911c6620000000000000161760cb9190911c6610000000000000161760cc9190911c6608000000000000161760cd9190911c66040000000000001617693627a301d71055774c8581026f028f6481ab7f045a5af012a19d003aa9198101608090811d906fdb2df09e81959a81455e260799a0632f8301901d600281810b9083900b1461300857886001600160a01b0316612fed826132b9565b6001600160a01b03161115613002578161300a565b8061300a565b815b9998505050505050505050565b8060020b8260020b1261304b5760405163c4433ed560e01b8152600283810b600483015282900b60248201526044016119c6565b620d89e719600283900b121561307a5760405163d5e2f7ab60e01b8152600283900b60048201526024016119c6565b613087620d89e719614d91565b60020b8160020b1315611b815760405163035aeeff60e31b8152600282900b60048201526024016119c6565b600183015460028401546040805160e0810182525f80825260208201819052918101829052606081018290526080810182905260a0810182905260c081018290529092839290916060870151600f0b156131ba576131148760800151613aab565b6001600160801b031660c08201819052602088015160608901516131459260058c0192918a91889088905f90613b30565b151581526040870151606088015160c08301516131729260058c019290918a919088908890600190613b30565b1515602082015280511561319857602087015160808801516131989160068b0191613c0b565b8060200151156131ba57604087015160808801516131ba9160068b0191613c0b565b602087015160408801516131d59160058b0191898787613ca8565b82604001836060018281525082815250505061322687606001518260400151836060015161321e8b5f01518c602001518d604001518f600701611a6a909392919063ffffffff16565b929190613d4d565b60a0830152608082015260608701515f600f9190910b12156132a05780511561327057602087810151600290810b5f90815260058b01909252604082208281556001810183905501555b8060200151156132a057604087810151600290810b5f90815260058b016020529182208281556001810183905501555b80608001518160a0015194509450505050935093915050565b5f805f8360020b126132ce578260020b6132d5565b8260020b5f035b9050620d89e88111156132fb576040516333a3bdff60e21b815260040160405180910390fd5b5f816001165f0361331057600160801b613322565b6ffffcb933bd6fad37aa2d162d1a5940015b70ffffffffffffffffffffffffffffffffff1690506002821615613356576ffff97272373d413259a46990580e213a0260801c5b6004821615613375576ffff2e50f5f656932ef12357cf3c7fdcc0260801c5b6008821615613394576fffe5caca7e10e4e61c3624eaa0941cd00260801c5b60108216156133b3576fffcb9843d60f6159c9db58835c9266440260801c5b60208216156133d2576fff973b41fa98c081472e6896dfb254c00260801c5b60408216156133f1576fff2ea16466c96a3843ec78b326b528610260801c5b6080821615613410576ffe5dee046a99a2a811c461f1969c30530260801c5b610100821615613430576ffcbe86c7900a88aedcffc83b479aa3a40260801c5b610200821615613450576ff987a7253ac413176f2b074cf7815e540260801c5b610400821615613470576ff3392b0822b70005940c7a398e4b70f30260801c5b610800821615613490576fe7159475a2c29b7443b29c7fa6e889d90260801c5b6110008216156134b0576fd097f3bdfd2022b8845ad8f792aa58250260801c5b6120008216156134d0576fa9f746462d870fdf8a65dc1f90e061e50260801c5b6140008216156134f0576f70d869a156d2a1b890bb3df62baf32f70260801c5b618000821615613510576f31be135f97d08fd981231505542fcfa60260801c5b62010000821615613531576f09aa508b5b7a84e1c677de54f3e99bc90260801c5b62020000821615613551576e5d6af8dedb81196699c329225ee6040260801c5b62040000821615613570576d2216e584f5fa1ea926041bedfe980260801c5b6208000082161561358d576b048a170391f7dc42444e8fa20260801c5b5f8460020b13156135ac57805f19816135a8576135a8614d5d565b0490505b6401000000008106156135c05760016135c2565b5f5b60ff16602082901c0192505050919050565b5f8082600f0b126135f4576135ef6127bf8585856001613e4b565b6106c0565b6136056127bf8585855f035f613e4b565b5f03949350505050565b5f8082600f0b1261362a576135ef6127bf8585856001613f16565b6136056127bf8585855f035f613f16565b5f8082600f0b12156136615761365082614e24565b61365a9084614e40565b9050611684565b611c248284614e60565b5f60016001607f1b03821115613694576040516393dafdf160e01b815260040160405180910390fd5b5090565b5f611c246136a68360801c90565b6136b08560801c90565b6136ba9190614e80565b61229e8486614e80565b5f805f8460020b8660020b816136dc576136dc614d5d565b0590505f8660020b12801561370857508460020b8660020b8161370157613701614d5d565b0760020b15155b15613711575f19015b831561378357600281900b600881901d600181810b5f90815260208b9052604090205461010090930760ff81169190911b80015f19019283168015159550919290918561376557888360ff16860302613778565b8861376f82613f93565b840360ff168603025b9650505050506137f4565b600181810160020b600881901d80830b5f90815260208b9052604090205461010090920760ff81169390931b5f190119918216801515955090929190856137d757888360ff0360ff168660010101026137ed565b88836137e283614031565b0360ff168660010101025b9650505050505b5094509492505050565b5f8080806001600160a01b03808916908a161015818712801590613881575f6138358989620f42400362ffffff16620f4240613a0f565b90508261384e576138498c8c8c6001613f16565b61385b565b61385b8b8d8c6001613e4b565b955085811061386c578a965061387b565b6138788c8b8386614118565b96505b506138c7565b81613897576138928b8b8b5f613e4b565b6138a3565b6138a38a8c8b5f613f16565b935083885f03106138b6578995506138c7565b6138c48b8a8a5f0385614173565b95505b6001600160a01b038a8116908716148215613929578080156138e65750815b6138fc576138f7878d8c6001613e4b565b6138fe565b855b955080801561390b575081155b6139205761391b878d8c5f613f16565b613922565b845b9450613972565b8080156139335750815b613949576139448c888c6001613f16565b61394b565b855b9550808015613958575081155b61396d576139688c888c5f613e4b565b61396f565b845b94505b811580156139815750885f0385115b1561398c57885f0394505b8180156139ab57508a6001600160a01b0316876001600160a01b031614155b156139ba5785890393506139d7565b6139d4868962ffffff168a620f42400362ffffff166141cc565b93505b50505095509550955095915050565b5f6001600160ff1b03821115613694576040516393dafdf160e01b815260040160405180910390fd5b5f838302815f1985870982811083820303915050808411613a2e575f80fd5b805f03613a4057508290049050611c24565b5f848688095f868103871696879004966002600389028118808a02820302808a02820302808a02820302808a02820302808a02820302808a02909103029181900381900460010186841190950394909402919094039290920491909117919091029150509392505050565b5f8082613abc81620d89e719614ead565b613ac69190614ee5565b90505f8380613ad8620d89e719614d91565b613ae29190614ead565b613aec9190614ee5565b90505f84613afa8484614f04565b613b049190614ead565b613b0f906001614f29565b9050613b2762ffffff82166001600160801b03614f45565b95945050505050565b600287900b5f90815260208990526040812080546001600160801b0381169060801c83613b5d838b61363b565b9050856001600160801b0316816001600160801b03161115613b985760405163b8e3c38560e01b815260028d900b60048201526024016119c6565b6001600160801b03818116159084168015919091141595505f03613bd2578a60020b8c60020b13613bd25760018401899055600284018890555b5f87613be757613be28b84614f6a565b613bf1565b613bf18b84614e80565b60801b9190911790935550919a9950505050505050505050565b8060020b8260020b81613c2057613c20614d5d565b0760020b15613c5057604051636a6c79f360e11b8152600283810b600483015282900b60248201526044016119c6565b5f80613c7d8360020b8560020b81613c6a57613c6a614d5d565b0560020b600881901d9161010090910790565b600191820b5f9081526020979097526040909620805460ff9097169190911b90951890945550505050565b600285810b5f8181526020899052604080822088850b83529082209193849391929184918291908a900b12613ce857505060018201546002830154613cfb565b8360010154880391508360020154870390505b5f808b60020b8b60020b1215613d1c57505060018301546002840154613d2f565b84600101548a0391508460020154890390505b92909803979097039b96909503949094039850939650505050505050565b6040805160608101825285546001600160801b03168152600186015460208201526002860154918101919091525f90819081600f87900b8103613dbc5781516001600160801b03165f03613db457604051632bbfae4960e21b815260040160405180910390fd5b508051613dcb565b8151613dc8908861363b565b90505b613dec82602001518703835f01516001600160801b0316600160801b613a0f565b9350613e0f82604001518603835f01516001600160801b0316600160801b613a0f565b925086600f0b5f14613e355787546001600160801b0319166001600160801b0382161788555b5050600186019390935560029094015591929050565b5f836001600160a01b0316856001600160a01b03161115613e6a579293925b600160601b600160e01b03606084901b166001600160a01b0386860381169087165f03613ea95760405162bfc92160e01b815260040160405180910390fd5b83613edf57866001600160a01b0316613ecc8383896001600160a01b0316613a0f565b81613ed957613ed9614d5d565b04613f0b565b613f0b613ef68383896001600160a01b03166141cc565b886001600160a01b0316808204910615150190565b979650505050505050565b5f836001600160a01b0316856001600160a01b03161115613f35579293925b81613f6957613f646001600160801b038416613f518787614f97565b6001600160a01b0316600160601b613a0f565b613b27565b613b276001600160801b038416613f808787614f97565b6001600160a01b0316600160601b6141cc565b5f808211613f9f575f80fd5b600160801b8210613fb257608091821c91015b680100000000000000008210613fca57604091821c91015b6401000000008210613fde57602091821c91015b620100008210613ff057601091821c91015b610100821061400157600891821c91015b6010821061401157600491821c91015b6004821061402157600291821c91015b60028210611e7557600101919050565b5f80821161403d575f80fd5b5060ff6001600160801b0382161561405857607f1901614060565b608082901c91505b67ffffffffffffffff82161561407957603f1901614081565b604082901c91505b63ffffffff82161561409657601f190161409e565b602082901c91505b61ffff8216156140b157600f19016140b9565b601082901c91505b60ff8216156140cb57600719016140d3565b600882901c91505b600f8216156140e557600319016140ed565b600482901c91505b60038216156140ff5760011901614107565b600282901c91505b6001821615611e75575f1901919050565b5f6001600160a01b038516158061413657506001600160801b038416155b15614154576040516309e48c3760e31b815260040160405180910390fd5b8161416657613f648585856001614208565b613b2785858560016142ff565b5f6001600160a01b038516158061419157506001600160801b038416155b156141af576040516309e48c3760e31b815260040160405180910390fd5b816141c057613f648585855f6142ff565b613b278585855f614208565b5f6141d8848484613a0f565b90505f82806141e9576141e9614d5d565b8486091115611c24575f1981106141fe575f80fd5b6001019392505050565b5f8115614278575f6001600160a01b0384111561423c5761423784600160601b876001600160801b0316613a0f565b614253565b6142536001600160801b038616606086901b614e11565b905061427061426b826001600160a01b038916614dd7565b614403565b9150506106c0565b5f6001600160a01b038411156142a5576142a084600160601b876001600160801b03166141cc565b6142c2565b6142c2606085901b6001600160801b038716808204910615150190565b905080866001600160a01b0316116142ed57604051634323a55560e01b815260040160405180910390fd5b6001600160a01b0386160390506106c0565b5f825f0361430e5750836106c0565b600160601b600160e01b03606085901b1682156143a0576001600160a01b0386168481029085828161434257614342614d5d565b0403614372578181018281106143705761436683896001600160a01b0316836141cc565b93505050506106c0565b505b50614270818561438b6001600160a01b038a1683614e11565b6143959190614dd7565b808204910615150190565b6001600160a01b038616848102908582816143bd576143bd614d5d565b041415806143cb5750808211155b156143e95760405163f5c787f160e01b815260040160405180910390fd5b80820361436661426b846001600160a01b038b16846141cc565b806001600160a01b0381168114611e75576040516393dafdf160e01b815260040160405180910390fd5b6040518061010001604052805f81526020015f81526020015f6001600160a01b031681526020015f60020b81526020015f62ffffff1681526020015f81526020015f81526020015f6001600160801b031681525090565b6001600160a01b03811681146119d8575f80fd5b8035600281900b8114611e75575f80fd5b5f805f80608085870312156144bc575f80fd5b8435935060208501356144ce81614484565b92506144dc60408601614498565b91506144ea60608601614498565b905092959194509250565b5f60208284031215614505575f80fd5b5035919050565b634e487b7160e01b5f52604160045260245ffd5b6040516060810167ffffffffffffffff811182821017156145435761454361450c565b60405290565b604051601f8201601f1916810167ffffffffffffffff811182821017156145725761457261450c565b604052919050565b62ffffff811681146119d8575f80fd5b5f60c0828403121561459a575f80fd5b60405160c0810181811067ffffffffffffffff821117156145bd576145bd61450c565b60405290508082356145ce81614484565b815260208301356145de81614484565b602082015260408301356145f181614484565b6040820152606083013561460481614484565b606082015260808301356146178161457a565b608082015260a092830135920191909152919050565b5f8083601f84011261463d575f80fd5b50813567ffffffffffffffff811115614654575f80fd5b60208301915083602082850101111561466b575f80fd5b9250929050565b5f805f806101008587031215614686575f80fd5b614690868661458a565b935060c08501356146a081614484565b925060e085013567ffffffffffffffff8111156146bb575f80fd5b6146c78782880161462d565b95989497509550505050565b5f8060e083850312156146e4575f80fd5b6146ee848461458a565b915060c08301356146fe81614484565b809150509250929050565b5f60208284031215614719575f80fd5b8135611c2481614484565b5f60c08284031215614734575f80fd5b611c24838361458a565b5f805f80848603610140811215614753575f80fd5b61475d878761458a565b9450606060bf1982011215614770575f80fd5b50614779614520565b61478560c08701614498565b815261479360e08701614498565b60208201526101008601356040820152925061012085013567ffffffffffffffff8111156146bb575f80fd5b5f805f606084860312156147d1575f80fd5b83356147dc81614484565b925060208401356147ec81614484565b929592945050506040919091013590565b5f805f80848603610140811215614812575f80fd5b61481c878761458a565b9450606060bf198201121561482f575f80fd5b50614838614520565b60c0860135801515811461484a575f80fd5b815260e0860135602082015261010086013561486581614484565b6040820152925061012085013567ffffffffffffffff8111156146bb575f80fd5b5f6020808385031215614897575f80fd5b823567ffffffffffffffff808211156148ae575f80fd5b818501915085601f8301126148c1575f80fd5b8135818111156148d3576148d361450c565b8060051b91506148e4848301614549565b81815291830184019184810190888411156148fd575f80fd5b938501935b8385101561491b57843582529385019390850190614902565b98975050505050505050565b602080825282518282018190525f9190848201906040850190845b8181101561495e57835183529284019291840191600101614942565b50909695505050505050565b5f805f805f610120868803121561497f575f80fd5b614989878761458a565b945060c0860135935060e0860135925061010086013567ffffffffffffffff8111156149b3575f80fd5b6149bf8882890161462d565b969995985093965092949392505050565b80516001600160a01b0390811683526020808301518216908401526040808301518216908401526060808301519091169083015260808082015162ffffff169083015260a090810151910152565b81835281816020850137505f828201602090810191909152601f909101601f19169091010190565b6001600160a01b0386811682525f9061012090614a6660208501896149d0565b861660e0840152610100830181905261491b8184018587614a1e565b5f60208284031215614a92575f80fd5b81516001600160e01b031981168114611c24575f80fd5b6001600160a01b0387811682525f9061014090614ac9602085018a6149d0565b80881660e0850152508560020b6101008401528061012084015261300a8184018587614a1e565b6001600160a01b03861681525f610160614b0d60208401886149d0565b8551600290810b60e08501526020870151900b61010084015260408601516101208401525b8061014084015261491b8184018587614a1e565b6101008101614b5582866149d0565b60c08201939093526001600160a01b039190911660e090910152919050565b6001600160a01b03871681525f610180614b9160208401896149d0565b8651600290810b60e08501526020880151900b61010084015260408701516101208401525b856101408401528061016084015261300a8184018587614a1e565b634e487b7160e01b5f52601160045260245ffd5b8181038181111561168457611684614bd1565b6001600160a01b03861681525f610160614c1560208401886149d0565b8551151560e0840152602086015161010084015260408601516001600160a01b0316610120840152614b32565b6001600160a01b03871681525f610180614c5f60208401896149d0565b8651151560e0840152602087015161010084015260408701516001600160a01b0316610120840152614bb6565b6001600160a01b03871681525f610140614ca960208401896149d0565b8660e0840152856101008401528061012084015261300a8184018587614a1e565b5f60208284031215614cda575f80fd5b815161ffff81168114611c24575f80fd5b60c0810161168482846149d0565b5f82515f5b81811015614d185760208186018101518583015201614cfe565b505f920191825250919050565b6001600160a01b038316815260e08101611c2460208301846149d0565b5f60208284031215614d52575f80fd5b8151611c248161457a565b634e487b7160e01b5f52601260045260245ffd5b5f61ffff80841680614d8557614d85614d5d565b92169190910692915050565b5f8160020b627fffff198103614da957614da9614bd1565b5f0392915050565b8181035f831280158383131683831282161715614dd057614dd0614bd1565b5092915050565b8082018082111561168457611684614bd1565b8082018281125f831280158216821582161715614e0957614e09614bd1565b505092915050565b5f82614e1f57614e1f614d5d565b500490565b5f81600f0b60016001607f1b03198103614da957614da9614bd1565b6001600160801b03828116828216039080821115614dd057614dd0614bd1565b6001600160801b03818116838216019080821115614dd057614dd0614bd1565b600f82810b9082900b0360016001607f1b0319811260016001607f1b038213171561168457611684614bd1565b5f8160020b8360020b80614ec357614ec3614d5d565b627fffff1982145f1982141615614edc57614edc614bd1565b90059392505050565b5f8260020b8260020b028060020b9150808214614dd057614dd0614bd1565b600282810b9082900b03627fffff198112627fffff8213171561168457611684614bd1565b62ffffff818116838216019080821115614dd057614dd0614bd1565b5f6001600160801b0380841680614f5e57614f5e614d5d565b92169190910492915050565b600f81810b9083900b0160016001607f1b03811360016001607f1b03198212171561168457611684614bd1565b6001600160a01b03828116828216039080821115614dd057614dd0614bd156fea26469706673582212206e25b1fc6d732704f798960218bb10721e54dee9451f66e194c427b29e51feb864736f6c63430008180033",
        sourceMap:
          "1044:13311:76:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2874:258;;;;;;:::i;:::-;;:::i;:::-;;;;1018:13:154;;-1:-1:-1;;;;;1014:54:154;996:73;;1125:4;1113:17;;;1107:24;1085:20;;;1078:54;1176:17;;;1170:24;1148:20;;;1141:54;984:2;969:18;2874:258:76;;;;;;;;1512:51;;1562:1;1512:51;;;;;1377:1:154;1366:21;;;;1348:40;;1336:2;1321:18;1512:51:76;1206:188:154;480:135:38;;;;;;:::i;:::-;588:11;;480:135;;;;1730:25:154;;;1718:2;1703:18;480:135:38;1584:177:154;3339:1808:76;;;;;;:::i;:::-;;:::i;12070:278::-;;;;;;:::i;:::-;;:::i;:::-;;3213:203:39;;;;;;:::i;:::-;;:::i;2576:257:76:-;;;;;;:::i;:::-;2723:17;2763:9;;;:5;:9;;;;;;;;1695:4:84;1688:23;;;;1724;;;;1760:19;;;-1:-1:-1;1809:4:84;1799:21;1850:9;;2763:19:76;;1850:9:84;;;;;2763:63:76;-1:-1:-1;;;;;2763:63:76;;2576:257;;;;-1:-1:-1;;;;;5507:47:154;;;5489:66;;5477:2;5462:18;2576:257:76;5343:218:154;1659:34:76;;;;;-1:-1:-1;;;;;1659:34:76;;;;;;-1:-1:-1;;;;;5730:32:154;;;5712:51;;5700:2;5685:18;1659:34:76;5566:203:154;12387:346:76;;;;;;:::i;:::-;;:::i;5188:2864::-;;;;;;:::i;:::-;;:::i;1405:65::-;;1455:15;1405:65;;1824:101:21;;;:::i;3422:496:39:-;;;;;;:::i;:::-;;:::i;488:54::-;;541:1;488:54;;;;;8000:4:154;7988:17;;;7970:36;;7958:2;7943:18;488:54:39;7828:184:154;1201:85:21;1247:7;1273:6;-1:-1:-1;;;;;1273:6:21;1201:85;;549:64:39;;;;;;:::i;:::-;;;;;;;;;;;;;;11875:154:76;;;;;;:::i;:::-;;:::i;1570:47::-;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1570:47:76;;;;;-1:-1:-1;;;1570:47:76;;;;;;;;;;;;;-1:-1:-1;;;1570:47:76;;;;;;;;;;;-1:-1:-1;;;1570:47:76;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;;;;1570:47:76;;;;;;;;;;;9150:13:154;;-1:-1:-1;;;;;9146:22:154;;;9128:41;;9239:4;9227:17;;;9221:24;9218:1;9207:39;9185:20;;;9178:69;9295:17;;;9289:24;9315:6;9285:37;9263:20;;;9256:67;;;;9383:4;9371:17;;;9365:24;9391:8;9361:39;9339:20;;;9332:69;;;;9432:3;9417:19;;9410:35;;;;9108:3;9461:19;;9454:35;;;;-1:-1:-1;;;;;9526:47:154;9520:3;9505:19;;9498:76;9611:15;9605:3;9590:19;;9583:44;9077:3;9062:19;1570:47:76;8764:869:154;2057:310:76;;;;;;:::i;:::-;2150:20;2262:9;;;:5;:9;;;;;;;;;2234:43;;;;;;;;;-1:-1:-1;;;;;2234:43:76;;;;;-1:-1:-1;;;2234:43:76;;;;;;;;;;-1:-1:-1;;;2234:43:76;;;;;;;;;;-1:-1:-1;;;2234:43:76;;;;;;;;;;;;;;;;2057:310;;;;;-1:-1:-1;;;;;9879:32:154;;;9861:51;;9959:1;9948:21;;;;9943:2;9928:18;;9921:49;10018:6;10006:19;;;9986:18;;;9979:47;;;;10074:8;10062:21;10057:2;10042:18;;10035:49;9848:3;9833:19;2057:310:76;9638:452:154;8093:2232:76;;;;;;:::i;:::-;;:::i;621:434:38:-;;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;3173:125:76:-;;;;;;:::i;:::-;;:::i;620:51:39:-;;;;;-1:-1:-1;;;;;620:51:39;;;10366:1468:76;;;;;;:::i;:::-;;:::i;2074:198:21:-;;;;;;:::i;:::-;;:::i;12772:394:76:-;;;;;;:::i;:::-;;:::i;2408:127::-;;;;;;:::i;:::-;2473:17;2509:9;;;:5;:9;;;;;;;;:19;;-1:-1:-1;;;;;2509:19:76;;2408:127;677:29:39;;;;;2874:258:76;3019:31;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3019:31:76;3073:9;;;;:5;:9;;;;;;;;1695:4:84;1688:23;;;1724;;;;1760:19;;;-1:-1:-1;1809:4:84;1799:21;1850:9;;3073:19:76;;;;1850:9:84;;;;3066:59:76;;;;;;;;;;-1:-1:-1;;;;;3066:59:76;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;2874:258:76;;;;;;;:::o;3339:1808::-;3493:15;;;;3528:10;;1948:4;-1:-1:-1;;;;;1940:28:76;;;1936:62;;1977:21;;-1:-1:-1;;;1977:21:76;;;;;;;;;;;1936:62;3558:7:::1;::::0;::::1;::::0;1079:9:51::1;870:8:::0;1397:22;;;:32;3554:89:76::1;;3630:13;;-1:-1:-1::0;;;3630:13:76::1;;;;;;;;;;;3554:89;3654:17;3674:31;:3;:14;;;:29;:31::i;:::-;3654:51:::0;-1:-1:-1;1455:15:76::1;3719:30;::::0;;::::1;;3715:64;;;3758:21;;-1:-1:-1::0;;;3758:21:76::1;;;;;;;;;;;3715:64;1562:1;3793:30;::::0;;::::1;;3789:64;;;3832:21;;-1:-1:-1::0;;;3832:21:76::1;;;;;;;;;;;3789:64;3867:13:::0;;3884::::1;::::0;::::1;::::0;-1:-1:-1;;;;;775:51:96;;;;;;3863:76:76::1;;3906:33;;-1:-1:-1::0;;;3906:33:76::1;;;;;;;;;;;3863:76;3984:9;::::0;::::1;::::0;4005:29:::1;3984:3:::0;4005:24:::1;:29::i;:::-;4044:22;4062:3;4044:17;:22::i;:::-;4081:14;::::0;::::1;::::0;:57:::1;::::0;399:1:78::1;4081:25:76;:57::i;:::-;4077:261;;;4158:63;::::0;-1:-1:-1;;;4158:63:76;;;4225:34;-1:-1:-1;;;;;4158:22:76;::::1;::::0;4225:34:::1;::::0;4158:63:::1;::::0;4181:10:::1;::::0;4193:3;;4198:12;;4212:8;;;;4158:63:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;;4158:101:76::1;;4154:174;;4286:27;;-1:-1:-1::0;;;4286:27:76::1;;;;;;;;;;;4154:174;4348:9;4360:10;:3;:8;:10::i;:::-;4348:22;;4383:18;4405:22;4423:3;4405:17;:22::i;:::-;4454:7;::::0;::::1;::::0;4380:47;;-1:-1:-1;4437:14:76::1;::::0;-1:-1:-1;926:8:51;1253:23;4454:75:76::1;;4507:7;::::0;::::1;::::0;870:8:51;1525:22;4454:75:76::1;;;4479:25;4500:3;4479:20;:25::i;:::-;4546:9;::::0;;;:5:::1;:9;::::0;;;;4437:92;;-1:-1:-1;4546:56:76::1;::::0;4567:12;4581:11;4437:92;4546:20:::1;:56::i;:::-;4539:63;;4773:3;:13;;;-1:-1:-1::0;;;;;4743:73:76::1;4758:3;:13;;;-1:-1:-1::0;;;;;4743:73:76::1;4754:2;4743:73;4788:3;:7;;;4797:11;4810:5;4743:73;;;;;;;15796:8:154::0;15784:21;;;;15766:40;;15853:1;15842:21;;;;15837:2;15822:18;;15815:49;-1:-1:-1;;;;;15900:32:154;15895:2;15880:18;;15873:60;15754:2;15739:18;;15552:387;4743:73:76::1;;;;;;;;4831:14;::::0;::::1;::::0;:56:::1;::::0;449:1:78::1;4831:25:76;:56::i;:::-;4827:314;;;5016:33;;;-1:-1:-1::0;;;;;4924:125:76::1;;:5;-1:-1:-1::0;;;;;4924:21:76::1;;4946:10;4958:3;4963:12;4977:4;4983:8;;4924:68;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;;4924:125:76::1;;4903:228;;5089:27;;-1:-1:-1::0;;;5089:27:76::1;;;;;;;;;;;4903:228;3544:1603;;;;;3339:1808:::0;;;;;;;:::o;12070:278::-;12171:10;;-1:-1:-1;;;;;12171:10:76;12157;:24;;;;:49;;-1:-1:-1;1247:7:21;1273:6;-1:-1:-1;;;;;1273:6:21;12185:10:76;:21;;12157:49;12153:82;;;12215:20;;-1:-1:-1;;;12215:20:76;;;;;;;;;;;12153:82;12246:9;12258:10;:3;:8;:10::i;:::-;12278:9;;;;:5;:9;;;;;12246:22;;-1:-1:-1;12278:27:76;;12298:6;12278:19;:27::i;:::-;12320:21;;-1:-1:-1;;;;;5730:32:154;;5712:51;;12330:2:76;;12320:21;;5700:2:154;5685:18;12320:21:76;;;;;;;;12143:205;12070:278;;:::o;3213:203:39:-;1094:13:21;:11;:13::i;:::-;3311:21:39::1;:34:::0;;-1:-1:-1;;;;;;3311:34:39::1;-1:-1:-1::0;;;;;3311:34:39;::::1;::::0;;::::1;::::0;;;3360:49:::1;::::0;5712:51:154;;;3360:49:39::1;::::0;5700:2:154;5685:18;3360:49:39::1;;;;;;;;3213:203:::0;:::o;12387:346:76:-;12451:12;12465:21;12490:22;12508:3;12490:17;:22::i;:::-;12450:62;;;;12527:7;12522:69;;12543:48;;-1:-1:-1;;;12543:48:76;;;;;;;;;;;12522:69;12601:9;12613:10;:3;:8;:10::i;:::-;12633:9;;;;:5;:9;;;;;12601:22;;-1:-1:-1;12633:40:76;;12658:14;12633:24;:40::i;:::-;12688:38;;16814:6:154;16802:19;;16784:38;;12707:2:76;;12688:38;;16772:2:154;16757:18;12688:38:76;;;;;;;12440:293;;;12387:346;:::o;5188:2864::-;5383:15;;;;5410:18;;1948:4;-1:-1:-1;;;;;1940:28:76;;;1936:62;;1977:21;;-1:-1:-1;;;1977:21:76;;;;;;;;;;;1936:62;5440:9:::1;5452:10;:3;:8;:10::i;:::-;5440:22;;5472:25;5494:2;5472:21;:25::i;:::-;5542:9;::::0;;::::1;::::0;5568:21;;::::1;::::0;5508:14:::1;-1:-1:-1::0;5568:89:76;::::1;;;-1:-1:-1::0;5597:14:76::1;::::0;::::1;::::0;:60:::1;::::0;503:1:78::1;5597:25:76;:60::i;:::-;5564:1126;;;5691:59;::::0;-1:-1:-1;;;5691:59:76;;5673:15:::1;::::0;-1:-1:-1;;;;;5691:24:76;::::1;::::0;::::1;::::0;:59:::1;::::0;5716:10:::1;::::0;5728:3;;5733:6;;5741:8;;;;5691:59:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;5768:14;::::0;::::1;::::0;5673:77;;-1:-1:-1;5768:60:76::1;::::0;890:2:78::1;5673:77:76::0;5768:30:::1;:60::i;:::-;5764:345;;;-1:-1:-1::0;;5927:40:76::1;;;;;;;5764:345;-1:-1:-1::0;;;;;;5992:48:76;::::1;-1:-1:-1::0;;;5992:48:76::1;5988:121;;6067:27;;-1:-1:-1::0;;;6067:27:76::1;;;;;;;;;;;5988:121;5659:460;5564:1126;;;6154:1;6129:6;:21;;;:26;;:93;;;;-1:-1:-1::0;6159:14:76::1;::::0;::::1;::::0;:63:::1;::::0;613:1:78::1;6159:25:76;:63::i;:::-;6125:565;;;6256:62;::::0;-1:-1:-1;;;;;;6256:62:76;;6238:15:::1;::::0;-1:-1:-1;;;;;6256:27:76;::::1;::::0;::::1;::::0;:62:::1;::::0;6284:10:::1;::::0;6296:3;;6301:6;;6309:8;;;;6256:62:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;6336:14;::::0;::::1;::::0;6238:80;;-1:-1:-1;6336:60:76::1;::::0;890:2:78::1;6238:80:76::0;6336:30:::1;:60::i;:::-;6332:348;;;-1:-1:-1::0;;6495:40:76::1;;;;;;;6332:348;-1:-1:-1::0;;;;;;6560:51:76;::::1;-1:-1:-1::0;;;;;;6560:51:76::1;6556:124;;6638:27;;-1:-1:-1::0;;;6638:27:76::1;;;;;;;;;;;6556:124;6224:466;6125:565;6708:346;6747:297;;;;;;;;6801:10;-1:-1:-1::0;;;;;6747:297:76::1;;;;;6840:6;:16;;;6747:297;;;;;;6885:6;:16;;;6747:297;;;;;;6935:32;:6;:21;;;:30;:32::i;:::-;6747:297;;;;;;6998:31;:3;:14;;;:29;:31::i;:::-;6747:297;;::::0;;6708:9:::1;::::0;;;:5:::1;:9;::::0;;;;;:25:::1;:346::i;:::-;7065:53;::::0;-1:-1:-1;;;7065:53:76;;6700:354;;-1:-1:-1;;;;;;7065:5:76::1;:29;::::0;::::1;::::0;:53:::1;::::0;7095:3;;6700:354;;7107:10:::1;::::0;7065:53:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;;7291:16:76;;7309::::1;::::0;;::::1;::::0;7327:21:::1;::::0;;::::1;::::0;7259:90;;18460:1:154;18449:21;;;18431:40;;18507:21;;;;18487:18;;;18480:49;;;;18545:18;;;18538:34;;;;7259:90:76;7279:10:::1;::::0;-1:-1:-1;7275:2:76;;-1:-1:-1;7259:90:76::1;::::0;;;;18419:2:154;7259:90:76;;::::1;7388:1;7364:6;:21;;;:25;:88;;;;-1:-1:-1::0;7393:14:76::1;::::0;::::1;::::0;:59:::1;::::0;556:1:78::1;7393:25:76;:59::i;:::-;7360:686;;;7489:65;::::0;-1:-1:-1;;;7489:65:76;;;7558:35;-1:-1:-1;;;;;7489:23:76;::::1;::::0;7558:35:::1;::::0;7489:65:::1;::::0;7513:10:::1;::::0;7525:3;;7530:6;;7538:5;;7545:8;;;;7489:65:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;;7489:104:76::1;;7468:207;;7633:27;;-1:-1:-1::0;;;7633:27:76::1;;;;;;;;;;;7468:207;7360:686;;;7720:1;7695:6;:21;;;:26;;:92;;;;-1:-1:-1::0;7725:14:76::1;::::0;::::1;::::0;:62:::1;::::0;669:1:78::1;7725:25:76;:62::i;:::-;7691:355;;;7824:68;::::0;-1:-1:-1;;;7824:68:76;;;7916:38;-1:-1:-1;;;;;7824:26:76;::::1;::::0;7916:38:::1;::::0;7824:68:::1;::::0;7851:10:::1;::::0;7863:3;;7868:6;;7876:5;;7883:8;;;;7824:68:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;;7824:130:76::1;;7803:233;;7994:27;;-1:-1:-1::0;;;7994:27:76::1;;;;;;;;;;;7803:233;5430:2622;;2008:1;5188:2864:::0;;;;;;;:::o;1824:101:21:-;1094:13;:11;:13::i;:::-;1888:30:::1;1915:1;1888:18;:30::i;:::-;1824:101::o:0;3422:496:39:-;3556:23;1273:6:21;;-1:-1:-1;;;;;1273:6:21;3599:10:39;:21;;;;:69;;-1:-1:-1;3646:21:39;;-1:-1:-1;;;;;3646:21:39;3624:10;:44;;3599:69;3595:111;;;3677:29;;-1:-1:-1;;;3677:29:39;;;;;;;;;;;3595:111;3736:11;;3735:54;;3783:6;3735:54;;;-1:-1:-1;;;;;3751:29:39;;;;;;:19;:29;;;;;;3735:54;-1:-1:-1;;;;;3799:29:39;;;;;;:19;:29;;;;;:48;;3717:72;;-1:-1:-1;3717:72:39;;3799:29;;;:48;;3717:72;;3799:48;:::i;:::-;;;;-1:-1:-1;;3857:54:39;;-1:-1:-1;;;3857:54:39;;-1:-1:-1;;;;;19937:15:154;;;3857:54:39;;;19919:34:154;19969:18;;;19962:34;;;20032:15;;;20012:18;;;20005:43;3857:5:39;:16;;;;19854:18:154;;3857:54:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3422:496;;;;;:::o;11875:154:76:-;1094:13:21;:11;:13::i;:::-;11957:10:76::1;:24:::0;;-1:-1:-1;;;;;;11957:24:76::1;-1:-1:-1::0;;;;;11957:24:76;::::1;::::0;;::::1;::::0;;;11996:26:::1;::::0;5712:51:154;;;11996:26:76::1;::::0;5700:2:154;5685:18;11996:26:76::1;5566:203:154::0;8093:2232:76;8260:15;;;;8295:18;;1948:4;-1:-1:-1;;;;;1940:28:76;;;1936:62;;1977:21;;-1:-1:-1;;;1977:21:76;;;;;;;;;;;1936:62;8329:9:::1;8341:10;:3;:8;:10::i;:::-;8329:22;;8361:25;8383:2;8361:21;:25::i;:::-;8431:9;::::0;::::1;::::0;8457:14:::1;::::0;::::1;::::0;:51:::1;::::0;714:1:78::1;8457:25:76;:51::i;:::-;8453:501;;;8542:51;::::0;-1:-1:-1;;;8542:51:76;;8524:15:::1;::::0;-1:-1:-1;;;;;8542:16:76;::::1;::::0;::::1;::::0;:51:::1;::::0;8559:10:::1;::::0;8571:3;;8576:6;;8584:8;;;;8542:51:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;8611:14;::::0;::::1;::::0;8524:69;;-1:-1:-1;8611:60:76::1;::::0;890:2:78::1;8524:69:76::0;8611:30:::1;:60::i;:::-;8607:337;;;-1:-1:-1::0;;8770:40:76::1;;;;;;;8607:337;-1:-1:-1::0;;;;;;8835:40:76;::::1;-1:-1:-1::0;;;8835:40:76::1;8831:113;;8902:27;;-1:-1:-1::0;;;8902:27:76::1;;;;;;;;;;;8831:113;8510:444;8453:501;8964:29;;:::i;:::-;9020:298;9048:260;;;;;;;;9097:31;:3;:14;;;:29;:31::i;:::-;9048:260;;;;;;9158:6;:17;;;9048:260;;;;;;9210:6;:22;;;9048:260;;;;9269:6;:24;;;-1:-1:-1::0;;;;;9048:260:76::1;;;::::0;9020:5:::1;:9;9026:2;9020:9;;;;;;;;;;;:14;;:298;;;;:::i;:::-;9423:53;::::0;-1:-1:-1;;;9423:53:76;;9003:315;;-1:-1:-1;9003:315:76;-1:-1:-1;;;;;;9423:5:76::1;:29;::::0;::::1;::::0;:53:::1;::::0;9453:3;;9003:315;;9465:10:::1;::::0;9423:53:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;;;;9515:17:76::1;::::0;::::1;::::0;:21;9511:151:::1;;9630:5;:17;;;9556:19;:70;9576:6;:17;;;:49;;9612:3;:13;;;9576:49;;;9596:13:::0;;9576:49:::1;-1:-1:-1::0;;;;;9556:70:76::1;::::0;;::::1;::::0;::::1;::::0;;;;;;-1:-1:-1;9556:70:76;:91;;;;::::1;::::0;;9511:151:::1;9846:10;9830:2:::0;9812:255:::1;9870:15;:5:::0;1336:3:95;1332:22;;1160:210;9870:15:76::1;9899:5:::0;9928:18:::1;::::0;;::::1;::::0;9960:15:::1;::::0;::::1;::::0;9989:10:::1;::::0;::::1;::::0;10013:13:::1;::::0;::::1;::::0;10040:17:::1;::::0;::::1;::::0;9812:255;;::::1;::::0;;;10040:17;21310:2:154;21299:22;;;21281:41;;21358:22;;;;21353:2;21338:18;;21331:50;-1:-1:-1;;;;;21417:32:154;;;;21412:2;21397:18;;21390:60;-1:-1:-1;;;;;21486:47:154;;;;21481:2;21466:18;;21459:75;21582:1;21571:21;21565:3;21550:19;;21543:50;21642:8;21630:21;21437:3;21609:19;;21602:50;21683:3;21668:19;;21661:35;;;;21268:3;21253:19;;20976:726;9812:255:76::1;;;;;;;;10082:14;::::0;::::1;::::0;:50:::1;::::0;758:1:78::1;10082:25:76;:50::i;:::-;10078:241;;;10152:57;::::0;-1:-1:-1;;;10152:57:76;;;10213:27;-1:-1:-1;;;;;10152:15:76;::::1;::::0;10213:27:::1;::::0;10152:57:::1;::::0;10168:10:::1;::::0;10180:3;;10185:6;;10193:5;;10200:8;;;;10152:57:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;;10152:88:76::1;;10148:161;;10267:27;;-1:-1:-1::0;;;10267:27:76::1;;;;;;;;;;;10148:161;8319:2006;;;8093:2232:::0;;;;;;;:::o;621:434:38:-;686:16;787:4;779:5;773:12;769:23;762:5;758:35;752:4;748:46;839:2;832:5;828:14;807:209;857:3;848:7;845:16;807:209;;;902:14;;896:21;934:22;;997:4;984:18;807:209;;;-1:-1:-1;1043:5:38;;621:434;-1:-1:-1;;621:434:38:o;3173:125:76:-;3235:14;3270:9;;;:5;:9;;;;;:21;;:19;:21::i;:::-;3261:30;3173:125;-1:-1:-1;;3173:125:76:o;10366:1468::-;10528:15;;;;10563:18;;1948:4;-1:-1:-1;;;;;1940:28:76;;;1936:62;;1977:21;;-1:-1:-1;;;1977:21:76;;;;;;;;;;;1936:62;10597:9:::1;10609:10;:3;:8;:10::i;:::-;10597:22;;10629:25;10651:2;10629:21;:25::i;:::-;10699:9;::::0;::::1;::::0;10724:14:::1;::::0;::::1;::::0;:53:::1;::::0;805:1:78::1;10724:25:76;:53::i;:::-;10720:517;;;10811:63;::::0;-1:-1:-1;;;10811:63:76;;10793:15:::1;::::0;-1:-1:-1;;;;;10811:18:76;::::1;::::0;::::1;::::0;:63:::1;::::0;10830:10:::1;::::0;10842:3;;10847:7;;10856;;10865:8;;;;10811:63:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;10892:14;::::0;::::1;::::0;10793:81;;-1:-1:-1;10892:60:76::1;::::0;890:2:78::1;10793:81:76::0;10892:30:::1;:60::i;:::-;10888:339;;;-1:-1:-1::0;;11051:40:76::1;;;;;;;10888:339;-1:-1:-1::0;;;;;;11116:42:76;::::1;-1:-1:-1::0;;;11116:42:76::1;11112:115;;11185:27;;-1:-1:-1::0;;;11185:27:76::1;;;;;;;;;;;11112:115;10779:458;10720:517;11247:10;11283:9:::0;;;:5:::1;:9;::::0;;;;:34:::1;::::0;11300:7;11309;11283:16:::1;:34::i;:::-;11327:53;::::0;-1:-1:-1;;;11327:53:76;;11267:50;;-1:-1:-1;11267:50:76;-1:-1:-1;;;;;;11327:5:76::1;:29;::::0;::::1;::::0;:53:::1;::::0;11357:3;;11267:50;;11369:10:::1;::::0;11327:53:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;::::0;::::1;;;;;-1:-1:-1::0;;11521:46:76::1;::::0;;23328:25:154;;;23384:2;23369:18;;23362:34;;;23443:1;23432:21;;;23412:18;;;23405:49;11521:46:76;;11532:10:::1;::::0;-1:-1:-1;11528:2:76;;-1:-1:-1;11521:46:76::1;::::0;;;;23316:2:154;11521:46:76;;::::1;11582:14;::::0;::::1;::::0;:52:::1;::::0;851:1:78::1;11582:25:76;:52::i;:::-;11578:250;;;11654:62;::::0;-1:-1:-1;;;11654:62:76;;;11720:29;-1:-1:-1;;;;;11654:17:76;::::1;::::0;11720:29:::1;::::0;11654:62:::1;::::0;11672:10:::1;::::0;11684:3;;11689:7;;11698;;11707:8;;;;11654:62:::1;;;:::i;:::-;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;-1:-1:-1::0;;;;;;11654:95:76::1;;11650:168;;11776:27;;-1:-1:-1::0;;;11776:27:76::1;;;;;;;;;;;11650:168;10587:1247;;;2008:1;10366:1468:::0;;;;;;;;:::o;2074:198:21:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2162:22:21;::::1;2154:73;;;::::0;-1:-1:-1;;;2154:73:21;;23667:2:154;2154:73:21::1;::::0;::::1;23649:21:154::0;23706:2;23686:18;;;23679:30;23745:34;23725:18;;;23718:62;-1:-1:-1;;;23796:18:154;;;23789:36;23842:19;;2154:73:21::1;;;;;;;;;2237:28;2256:8;2237:18;:28::i;:::-;2074:198:::0;:::o;12772:394:76:-;12854:7;;;;926:8:51;1253:23;:28;12850:310:76;;12892:24;12919:25;12940:3;12919:20;:25::i;:::-;12892:52;;12958:9;12970:10;:3;:8;:10::i;:::-;12994:9;;;;:5;:9;;;;;12958:22;;-1:-1:-1;12994:39:76;;13015:17;12994:20;:39::i;:::-;13052:44;;24046:8:154;24034:21;;24016:40;;13074:2:76;;13052:44;;24004:2:154;23989:18;13052:44:76;23872:190:154;12850:310:76;13134:15;;-1:-1:-1;;;13134:15:76;;;;;;;;;;;1327:539:84;1695:4;1688:23;1731:4;1724:23;1475:21;1760:19;;;1815:4;1809;1799:21;1850:9;;;;;;;;;;;1327:539::o;892:160:83:-;955:17;1004:40;:6;581:2;3349:20:55;3371:11;3345:38;;3211:188;1108:674:52;1184:25;1212:47;:7;:18;;;:45;:47::i;:::-;1281:13;;;;1184:75;;-1:-1:-1;;;;;;1273:36:52;1269:368;;1484:23;;;;:54;;;;-1:-1:-1;1512:11:52;;;;926:8:51;1253:23;:28;1484:54:52;1480:99;;;1558:7;1108:674;:::o;1480:99::-;1599:27;;-1:-1:-1;;;1599:27:52;;;;;;;;;;;1269:368;1697:18;1651:64;;:7;:13;;;-1:-1:-1;;;;;1651:40:52;;:42;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;:64;;;1647:129;;1738:27;;-1:-1:-1;;;1738:27:52;;;;;;;;;;;1647:129;1174:608;1108:674;:::o;13600:644:76:-;13755:14;;;;:45;;890:2:78;13755:25:76;:45::i;:::-;13751:487;;;13838:14;;;;:60;;503:1:78;13838:25:76;:60::i;:::-;13837:61;:149;;;;-1:-1:-1;13923:14:76;;;;:63;;613:1:78;13923:25:76;:63::i;:::-;13922:64;13837:149;:225;;;;-1:-1:-1;14011:14:76;;;;:51;;714:1:78;14011:25:76;:51::i;:::-;14010:52;13837:225;:303;;;;-1:-1:-1;14087:14:76;;;;:53;;805:1:78;14087:25:76;:53::i;:::-;14086:54;13837:303;13816:412;;;14180:33;;-1:-1:-1;;;14180:33:76;;;;;;;;;;;1788:136:52;1865:4;1888:29;:10;:29;;;2450:20:55;2472:10;2446:37;;2312:187;1888:29:52;1881:36;1788:136;-1:-1:-1;;;1788:136:52:o;201::97:-;262:6;320:7;309:19;;;;;;;;:::i;:::-;;;;;;;;;;;;;299:30;;;;;;280:50;;201:136;;;:::o;1344:1260:39:-;1465:21;;1409:12;;;;-1:-1:-1;;;;;1465:21:39;1457:44;1453:1145;;1759:18;1747:9;:30;1743:71;;;1786:28;;-1:-1:-1;;;1786:28:39;;;;;;;;;;;1743:71;1875:21;;1945:79;;1830:13;;;;-1:-1:-1;;;;;1875:21:39;;;;1908:18;;-1:-1:-1;;;1968:50:39;1945:79;;2020:3;;1945:79;;;:::i;:::-;;;;-1:-1:-1;;1945:79:39;;;;;;;;;;;;;;-1:-1:-1;;;;;1945:79:39;-1:-1:-1;;;;;;1945:79:39;;;;;;;;;;1867:171;;;;1945:79;1867:171;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1829:209;;;;2119:8;2118:9;:30;;;;2146:2;2131:5;:12;:17;2118:30;2114:53;;;-1:-1:-1;2158:5:39;;;;-1:-1:-1;1344:1260:39;-1:-1:-1;;;1344:1260:39:o;2114:53::-;2272:4;2261:16;;2255:23;2439:32;;;;;:74;;;;;2475:38;2501:10;2475:18;:38::i;:::-;2439:148;;2578:5;2585:1;2439:148;;;2533:4;2546:10;2439:148;2414:173;;-1:-1:-1;2414:173:39;-1:-1:-1;;;;1453:1145:39;1344:1260;;;:::o;13172:282:76:-;13245:21;13324:3;:9;;;-1:-1:-1;;;;;13295:47:76;;13343:10;13355:3;13295:64;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;13278:81;-1:-1:-1;1079:9:51;13373:52:76;;;;13369:78;;13434:13;;-1:-1:-1;;;13434:13:76;;;;;;;;;;;13369:78;13172:282;;;:::o;3236:404:82:-;3398:23;;3368:10;;-1:-1:-1;;;;;3398:23:82;:28;3394:65;;3435:24;;-1:-1:-1;;;3435:24:82;;;;;;;;;;;3394:65;3477:41;3505:12;3477:27;:41::i;:::-;3542:91;;;;;;;;-1:-1:-1;;;;;3542:91:82;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3529:104;;-1:-1:-1;;;;;;3529:104:82;;;;-1:-1:-1;;;3529:104:82;;;;;;;;;;;-1:-1:-1;;;;3529:104:82;-1:-1:-1;;;3529:104:82;;;-1:-1:-1;;;;3529:104:82;;;;;-1:-1:-1;;;3529:104:82;;;;;;;;;;3542:91;3470:48;-1:-1:-1;3236:404:82:o;19465:178::-;20375:23;;-1:-1:-1;;;;;20375:23:82;19539:56;;19575:20;;-1:-1:-1;;;19575:20:82;;;;;;;;;;;19539:56;19605:11;;;;;:31;;-1:-1:-1;;;;;;19605:31:82;-1:-1:-1;;;;;19605:31:82;;;;;;;;;19465:178::o;1359:130:21:-;1247:7;1273:6;-1:-1:-1;;;;;1273:6:21;719:10:32;1422:23:21;1414:68;;;;-1:-1:-1;;;1414:68:21;;25826:2:154;1414:68:21;;;25808:21:154;;;25845:18;;;25838:30;25904:34;25884:18;;;25877:62;25956:18;;1414:68:21;25624:356:154;19837:193:82;20375:23;;-1:-1:-1;;;;;20375:23:82;19920:56;;19956:20;;-1:-1:-1;;;19956:20:82;;;;;;;;;;;19920:56;19987:36;;;;;;-1:-1:-1;;;19987:36:82;-1:-1:-1;;;;19987:36:82;;;;;;19837:193::o;13460:134:76:-;13530:9;;;;:5;:9;;;;;20375:23:82;-1:-1:-1;;;;;20375:23:82;13526:61:76;;13567:20;;-1:-1:-1;;;13567:20:76;;;;;;;;;;;2102:197:52;2205:4;2228:34;2239:10;2251;2228;:34::i;:::-;:64;;;;-1:-1:-1;527:24:52;;-1:-1:-1;;;527:24:52;;;26187:19:154;26222:11;;527:24:52;;;;;;;;;;;;517:35;;;;;;-1:-1:-1;;;;;2266:26:52;;:8;-1:-1:-1;;;;;2266:26:52;;;2221:71;2102:197;-1:-1:-1;;;;2102:197:52:o;748:138:53:-;830:1;846:6;;;;;;842:37;;861:18;;-1:-1:-1;;;861:18:53;;;;;;;;;;;4221:2420:82;4371:32;;;;;;;;;;-1:-1:-1;;;;;4371:32:82;;;;-1:-1:-1;;;4371:32:82;;;;;;;;;;;;-1:-1:-1;;;4371:32:82;;;;;;;;-1:-1:-1;;;4371:32:82;;;;;;;;;4460:16;;;4478;;;;-1:-1:-1;;4444:51:82;;:15;:51::i;:::-;4507:17;4526;4547:42;4563:4;4569:6;4577;:11;;;4547:15;:42::i;:::-;4506:83;;;;4654:6;:21;;;:26;;4679:1;4654:26;4650:1831;;4696:14;4724;4770:6;:16;;;4756:30;;:6;:11;;;:30;;;4752:1610;;;5048:235;:224;5099:45;5127:6;:16;;;5099:27;:45::i;:::-;5166;5194:6;:16;;;5166:27;:45::i;:::-;5233:6;:21;;;5048:29;:224::i;:::-;:233;:235::i;:::-;5038:245;;4752:1610;;;5322:6;:16;;;5308:30;;:6;:11;;;:30;;;5304:1058;;;5368:169;:158;5419:6;:19;;;5440:45;5468:6;:16;;;5440:27;:45::i;5368:169::-;5358:179;;5565:169;:158;5616:45;5644:6;:16;;;5616:27;:45::i;:::-;5663:19;;5684:21;;;;5565:29;:158::i;:169::-;5793:14;;;;5809:21;;;;5555:179;;-1:-1:-1;5770:61:82;;-1:-1:-1;;;;;5793:14:82;;;;5770:22;:61::i;:::-;5753:14;;;:78;;-1:-1:-1;;;;;;5753:78:82;-1:-1:-1;;;;;5753:78:82;;;;;;;;;;5304:1058;;;6112:235;:224;6163:45;6191:6;:16;;;6163:27;:45::i;:::-;6230;6258:6;:16;;;6230:27;:45::i;:::-;6297:6;:21;;;6112:29;:224::i;:235::-;6102:245;;5304:1058;-1:-1:-1;;;;;415:81:95;;399:3;395:18;;;392:105;6430:40:82;;4682:1799;;4650:1831;6568:66;:5;6576:58;6591:20;:9;:18;:20::i;:::-;6613;:9;:18;:20::i;:::-;-1:-1:-1;;;;;415:81:95;399:3;395:18;;;;392:105;;201:304;6576:58:82;6568:66;:::i;:::-;6560:74;4221:2420;-1:-1:-1;;;;;;4221:2420:82:o;2426:187:21:-;2499:16;2518:6;;-1:-1:-1;;;;;2534:17:21;;;-1:-1:-1;;;;;;2534:17:21;;;;;;2566:40;;2518:6;;;;;;;2566:40;;2499:16;2566:40;2489:124;2426:187;:::o;8355:7575:82:-;8449:25;8476:22;;:::i;:::-;8518:6;:22;;;8544:1;8518:27;8514:64;;8554:24;;-1:-1:-1;;;8554:24:82;;;;;;;;;;;8514:64;8589:36;;;;;;;;;;-1:-1:-1;;;;;8589:36:82;;;;-1:-1:-1;;;8589:36:82;;;;;;;;;;;;-1:-1:-1;;;8589:36:82;;;;;;;;;;;-1:-1:-1;;;8589:36:82;;;;;;;;8652:17;;;;:395;;8927:10;:23;;;-1:-1:-1;;;;;8899:51:82;:6;:24;;;-1:-1:-1;;;;;8899:51:82;;;:130;;;;1320:49:93;-1:-1:-1;;;;;8978:51:82;:6;:24;;;-1:-1:-1;;;;;8978:51:82;;;8899:130;8652:395;;;8738:10;:23;;;-1:-1:-1;;;;;8710:51:82;:6;:24;;;-1:-1:-1;;;;;8710:51:82;;;:130;;;;1140:10:93;-1:-1:-1;;;;;8789:51:82;:6;:24;;;-1:-1:-1;;;;;8789:51:82;;;8710:130;8635:527;;;9101:23;;9126:24;;;;9079:72;;-1:-1:-1;;;9079:72:82;;-1:-1:-1;;;;;26474:15:154;;;9079:72:82;;;26456:34:154;26526:15;;26506:18;;;26499:43;26391:18;;9079:72:82;26244:304:154;8635:527:82;9197:258;;;;;;;;;9237:14;;;;-1:-1:-1;;;;;9237:14:82;9197:258;;;9352:17;;;;9172:22;;9197:258;;;;9352:92;;9442:1;9416:10;:22;;;:27;;;;9352:92;;;9403:3;9378:10;:22;;;:28;;;;:::i;:::-;9197:258;;;;9546:11;;;;9172:283;;-1:-1:-1;;;;;;9546:11:82;9571:29;;9567:108;;9616:48;;-1:-1:-1;;;9616:48:82;;27043:10:154;9647:15:82;27031:23:154;9616:48:82;;;27013:42:154;-1:-1:-1;;;;;9616:23:82;;;;;26986:18:154;;9616:48:82;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9567:108;9685:15;9728:1;9703:6;:22;;;:26;9685:44;;9748:424;;;;;;;;9798:6;:22;;;9748:424;;;;9852:1;9748:424;;;;9881:10;:23;;;-1:-1:-1;;;;;9748:424:82;;;;;9924:10;:15;;;9748:424;;;;;;9962:10;:18;;;9748:424;;;;;;10015:6;:17;;;:73;;10063:4;:25;;;10015:73;;;10035:4;:25;;;10015:73;9748:424;;10115:1;9748:424;;;;;;;10141:20;;-1:-1:-1;;;;;9748:424:82;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9740:432:82;;-1:-1:-1;10183:28:82;10344:30;;:35;;;;:85;;;10405:6;:24;;;-1:-1:-1;;;;;10383:46:82;:5;:18;;;-1:-1:-1;;;;;10383:46:82;;;10344:85;10337:4432;;;10470:18;;;;-1:-1:-1;;;;;10445:43:82;;;10604:10;;;;10616:18;;10636:17;;;;10555:99;;:15;;;;10604:10;;10555:48;:99::i;:::-;10503:151;;10519:16;;;10503:151;;;10504:13;;;10503:151;;;-1:-1:-1;;;10782:216:82;;;-1:-1:-1;;10839:13:82;;;:33;10782:216;;;960:9:93;-1:-1:-1;;960:9:93;:::i;:::-;10897:33:82;;:4;:13;;;:33;;;10893:105;;;960:9:93;-1:-1:-1;;960:9:93;:::i;:::-;10950:33:82;;:13;;;:33;10893:105;11083:42;11111:4;:13;;;11083:27;:42::i;:::-;-1:-1:-1;;;;;11059:66:82;:21;;;:66;11371:18;;;;11429:17;;;;11329:462;;11371:18;11429:167;;11572:6;:24;;;-1:-1:-1;;;;;11548:48:82;:4;:21;;;-1:-1:-1;;;;;11548:48:82;;11429:167;;;11497:6;:24;;;-1:-1:-1;;;;;11473:48:82;:4;:21;;;-1:-1:-1;;;;;11473:48:82;;11429:167;11407:258;;11644:4;:21;;;11407:258;;;11617:6;:24;;;11407:258;11683:15;;;;11716:30;;11764:13;;;;11329:24;:462::i;:::-;11311:14;;;11259:532;11295:14;;;11259:532;11280:13;;;11259:532;-1:-1:-1;;;;;11259:532:82;11260:18;;;11259:532;11806:722;;;;12003:43;12020:4;:14;;;12004:4;:13;;;:30;12003:41;:43::i;:::-;11969:77;;;;;12229:14;;;;:25;;:23;:25::i;:::-;12204:5;:22;;;:50;;;;:::i;:::-;12179:22;;;:75;11806:722;;;12359:25;:4;:14;;;:23;:25::i;:::-;12325:59;;;;;12487:14;;;;12471:13;;;;12470:43;;12471:30;;;:::i;:::-;12470:41;:43::i;:::-;12445:5;:22;;;:68;;;;:::i;:::-;12420:22;;;:93;11806:722;12669:17;;;;:21;;;12665:249;;12710:13;12743:5;:17;;;12726:34;;:4;:14;;;:34;;;;:::i;:::-;12810:14;;;;:23;;;;;;;12855:17;;:26;;;;;;;-1:-1:-1;12665:249:82;12973:15;;;;-1:-1:-1;;;;;12973:19:82;;12969:205;;13073:68;13089:4;:14;;;-1:-1:-1;;;13125:5:82;:15;;;-1:-1:-1;;;;;13073:68:82;:15;:68::i;:::-;13044:25;;;:97;;;;;;;12969:205;13269:4;:21;;;-1:-1:-1;;;;;13247:43:82;:5;:18;;;-1:-1:-1;;;;;13247:43:82;;13243:1516;;13385:4;:16;;;13381:960;;;-1:-1:-1;;;;;13485:29:82;;;13481:136;;13561:13;;;;;13576:17;;;;13542:52;;-1:-1:-1;;;13542:52:82;;28129:1:154;28118:21;;;;13542:52:82;;;28100:40:154;28183:14;28176:22;28156:18;;;28149:50;-1:-1:-1;;;;;13542:18:82;;;;;28073::154;;13542:52:82;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;13481:136;13639:19;13661:279;13703:4;:13;;;13743:6;:17;;;:73;;13791:4;:25;;;13743:73;;;13763:5;:25;;;13743:73;13844:6;:17;;;:73;;13892:5;:25;;;13844:73;;;13864:4;:25;;;13844:73;8935:10:91;;;;8855:19;8935:10;;;13661::82;;;8935::91;;;;;9011:26;;;;;8988:49;;;8959:78;;;9103:26;;;;;9080:49;;;9051:78;;;9158:17;-1:-1:-1;;;9158:17:91;;;;;8670:522;13661:279:82;13639:301;;14174:6;:17;;;14170:51;;;14208:13;;14170:51;14284:15;;;;:38;;-1:-1:-1;;;;;14284:24:82;14309:12;14284:24;:38::i;:::-;-1:-1:-1;;;;;14266:56:82;:15;;;:56;-1:-1:-1;13381:960:82;14404:6;:17;;;:53;;14444:4;:13;;;14404:53;;;14440:1;14424:4;:13;;;:17;14404:53;14391:66;;:10;;;:66;10337:4432;;13243:1516;14522:4;:22;;;-1:-1:-1;;;;;14500:44:82;:5;:18;;;-1:-1:-1;;;;;14500:44:82;;14496:263;;14697:47;14725:5;:18;;;14697:27;:47::i;14496:263::-;10337:4432;;;14841:10;:15;;;14827:29;;:5;:10;;;:29;;;14823:259;;14918:18;;;;14938:10;;;;14872:77;;-1:-1:-1;;;;;;14872:77:82;-1:-1:-1;;;14872:77:82;;;;;;;;-1:-1:-1;;;;;;14872:77:82;;-1:-1:-1;;;;;14872:77:82;;;;;;14823:259;;;15053:18;;;;15027:44;;-1:-1:-1;;;;;;15027:44:82;-1:-1:-1;;;;;15027:44:82;;;;;;14823:259;15162:5;:15;;;-1:-1:-1;;;;;15138:39:82;:5;:20;;;-1:-1:-1;;;;;15138:39:82;;15134:77;;15196:15;;;;15179:14;;;:32;;-1:-1:-1;;;;;;15179:32:82;-1:-1:-1;;;;;15179:32:82;;;;;;;;;15134:77;15262:6;:17;;;15258:185;;;15323:25;;;;15295;;;:53;15258:185;;;15407:25;;;;15379;;;:53;15258:185;15478:14;15494;15533:10;15512:31;;:6;:17;;;:31;;;:339;;15709:33;:5;:22;;;:31;:33::i;:::-;15765:68;15791:5;:30;;;15766:6;:22;;;:55;15765:66;:68::i;:::-;15512:339;;;15563:68;15589:5;:30;;;15564:6;:22;;;:55;15563:66;:68::i;:::-;15633:33;:5;:22;;;:31;:33::i;:::-;-1:-1:-1;;;;;415:81:95;399:3;395:18;;;;392:105;;8355:7575:82;;-1:-1:-1;392:105:95;;-1:-1:-1;;;;;;;;;8355:7575:82:o;19649:182::-;19711:7;19734:23;:4;20375:23;-1:-1:-1;;;;;20375:23:82;:28;;20283:127;19734:23;19730:56;;;19766:20;;-1:-1:-1;;;19766:20:82;;;;;;;;;;;19730:56;-1:-1:-1;19812:11:82;;;-1:-1:-1;;;;;19812:11:82;;19649:182::o;18795:664::-;18950:15;;;;18900:18;;;;-1:-1:-1;;;;;18950:15:82;:20;;18946:59;;18979:26;;-1:-1:-1;;;18979:26:82;;;;;;;;;;;18946:59;19023:54;19038:18;:7;:16;:18::i;19023:54::-;19015:62;-1:-1:-1;19115:11:82;;19111:141;;19221:15;;;;19176:61;;19192:7;;-1:-1:-1;;;306:35:85;-1:-1:-1;;;;;19221:15:82;19176;:61::i;:::-;19146:26;;;:91;;;;;;;19111:141;19269:11;;19265:141;;19375:15;;;;19330:61;;19346:7;;-1:-1:-1;;;306:35:85;-1:-1:-1;;;;;19375:15:82;19330;:61::i;:::-;19300:26;;;:91;;;;;;;19265:141;-1:-1:-1;19426:16:82;;18795:664;;-1:-1:-1;;;19426:16:82;;;;;;18795:664;-1:-1:-1;;18795:664:82:o;20100:177::-;20375:23;;-1:-1:-1;;;;;20375:23:82;20175:56;;20211:20;;-1:-1:-1;;;20211:20:82;;;;;;;;;;;20175:56;20242:28;;;;;;-1:-1:-1;;;20242:28:82;-1:-1:-1;;;;20242:28:82;;;;;;20100:177::o;529:148:56:-;604:13;2921:11:55;2895:38;;638:32:56;2761:188:55;2675:532:39;2738:4;2758:8;;;;2754:426;;2782:11;2796:9;2802:3;2796;:9;:::i;:::-;2782:23;-1:-1:-1;2833:8:39;2840:1;2833:8;;;;;3007:9;;;;;;:48;;-1:-1:-1;541:1:39;3020:35;;;;3007:48;3006:104;;;-1:-1:-1;3061:9:39;;;;;;;:48;;-1:-1:-1;541:1:39;3074:35;;;;3061:48;2985:185;;;-1:-1:-1;3150:5:39;;2675:532;-1:-1:-1;;;2675:532:39:o;2985:185::-;2768:412;;2754:426;-1:-1:-1;3196:4:39;;2675:532;-1:-1:-1;2675:532:39:o;5342:4864:93:-;5415:10;1140;-1:-1:-1;;;;;5568:29:93;;;;:63;;-1:-1:-1;1320:49:93;-1:-1:-1;;;;;5601:30:93;;;;5568:63;5564:94;;;5640:18;;-1:-1:-1;;;5640:18:93;;;;;;;;;;;5564:94;-1:-1:-1;;;;;5713:2:93;5688:27;;;;-1:-1:-1;;;;;5834:41:93;;5831:1;5827:49;5932:9;;;6017:18;6011:25;;6008:1;6004:33;6093:9;;;6178:10;6172:17;;6169:1;6165:25;6246:9;;;6331:6;6325:13;;6322:1;6318:21;6395:9;;;6480:4;6474:11;;6471:1;6467:19;;;6542:9;;;6627:3;6621:10;;6618:1;6614:18;6688:9;;;6767:10;;;6764:1;6760:18;;;6834:9;;;;6906:10;;;6061;;6214;;;6363;;;6510;6656;;;6802;6940;6989:3;6982:10;;6978:83;;7014:3;7008;:9;6998:5;:20;;6994:24;;6978:83;;;7057:3;7051;:9;7041:5;:20;;7037:24;;6978:83;7172:9;;;7167:3;7163:19;;;7208:11;;;;7288:9;;;;7365;;7356:19;;;7401:11;;;7481:9;7558;;7549:19;;;7594:11;;;7674:9;7751;;7742:19;;;7787:11;;;7867:9;7944;;7935:19;;;7980:11;;;8060:9;8137;;8128:19;;;8173:11;;;8253:9;8330;;8321:19;;;8366:11;;;8446:9;8523;;8514:19;;;8559:11;;;8639:9;8716;;8707:19;;;8752:11;;;8832:9;8909;;8900:19;;;8945:11;;;9025:9;9102;;9093:19;;;9138:11;;;9218:9;9295;;9286:19;;;9331:11;;;9411:9;9488;;9479:19;;;9524:11;;;;9604:9;;;;9681;;9672:19;;;;;7172:9;-1:-1:-1;;7092:17:93;;7114:2;7091:25;7255:10;;;;;;;7245:21;7448:10;;;;;;;7438:21;;;;7641:10;;;;;;;7631:21;;;;7834:10;;;;;;;7824:21;;;;8027:10;;;;;;;8017:21;;;;8220:10;;;;;;;8210:21;;;;8413:10;;;;;;;8403:21;8606:10;;;;;;;8596:21;8799:10;;;;;;;8789:21;8992:10;;;;;;;8982:21;9185:10;;;;;;;9175:21;9378:10;;;;;;;9368:21;9571:10;;;;;;;9561:21;9764:10;;;;;;;9754:21;9834:24;9826:32;;-1:-1:-1;;9914:53:93;;7106:3;9913:62;;;;10028:39;10012:55;;10011:64;;10098:17;;;;;;;;;:91;;10158:12;-1:-1:-1;;;;;10128:42:93;:26;10147:6;10128:18;:26::i;:::-;-1:-1:-1;;;;;10128:42:93;;;:61;;10182:7;10098:91;;10128:61;10173:6;10098:91;;;10118:7;10098:91;10091:98;5342:4864;-1:-1:-1;;;;;;;;;5342:4864:93:o;1654:323:91:-;1749:9;1736:22;;:9;:22;;;1732:72;;1767:37;;-1:-1:-1;;;1767:37:91;;28405:1:154;28394:21;;;1767:37:91;;;28376:40:154;28452:21;;;28432:18;;;28425:49;28349:18;;1767:37:91;28210:270:154;1732:72:91;-1:-1:-1;;1818:29:91;;;;;1814:73;;;1856:31;;-1:-1:-1;;;1856:31:91;;1377:1:154;1366:21;;;1856:31:91;;;1348:40:154;1321:18;;1856:31:91;1206:188:154;1814:73:91;960:9:93;-1:-1:-1;;960:9:93;:::i;:::-;1901:29:91;;:9;:29;;;1897:73;;;1939:31;;-1:-1:-1;;;1939:31:91;;1377:1:154;1366:21;;;1939:31:91;;;1348:40:154;1321:18;;1939:31:91;1206:188:154;16197:2505:82;16389:25;;;;16486;;;;-1:-1:-1;;;;;;;;16325:7:82;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;16325:7:82;;;;16389:25;;16679:21;;;;:26;;;16675:1016;;16749:57;16787:6;:18;;;16749:37;:57::i;:::-;-1:-1:-1;;;;;16721:85:82;:25;;;:85;;;16876:16;;;;16932:21;;;;16841:270;;:10;;;;16876:16;16910:4;;16971:21;;17010;;17049:5;;16841:17;:270::i;:::-;16820:291;;;;17181:16;;;;17237:21;;;;17376:25;;;;17146:269;;:10;;;;17181:16;;17215:4;;17237:21;17276;;17315;;17354:4;;17146:17;:269::i;:::-;17125:290;;:18;;;:290;17434:18;;17430:119;;;17497:16;;;;17515:18;;;;17472:62;;:15;;;;:24;:62::i;:::-;17566:5;:18;;;17562:119;;;17629:16;;;;17647:18;;;;17604:62;;:15;;;;:24;:62::i;:::-;17803:16;;;;17821;;;;17760:139;;:10;;;;17839:4;17845:21;17868;17760:29;:139::i;:::-;17702:5;:26;;17730:5;:26;;17701:198;;;;;;;;;;18075:176;18164:6;:21;;;18187:5;:26;;;18215:5;:26;;;18075:68;18094:6;:12;;;18108:6;:16;;;18126:6;:16;;;18075:4;:14;;:18;;:68;;;;;;:::i;:::-;:75;:176;;:75;:176::i;:::-;18056:15;;;18038:213;18039:15;;;18038:213;18398:21;;;;-1:-1:-1;18398:25:82;;;;;;18394:250;;;18443:18;;18439:91;;;18498:16;;;;;8103:10:91;;;;;;;;18481::82;;;8103::91;;;;;;8096:17;;;;;;;;;;;18481:34:82;18547:5;:18;;;18543:91;;;18602:16;;;;;8103:10:91;;;;;;;;18585::82;;;8103::91;;;;;8096:17;;;;;;;;;;;18585:34:82;18662:5;:15;;;18679:5;:15;;;18654:41;;;;;;;16197:2505;;;;;;:::o;2170:2753:93:-;2233:20;2289:15;2314:1;2307:4;:8;;;:57;;2358:4;2351:12;;2307:57;;;2334:4;2327:12;;2326:13;;2307:57;2289:75;-1:-1:-1;960:9:93;2382:35;;2378:61;;;2426:13;;-1:-1:-1;;;2426:13:93;;;;;;;;;;;2378:61;2454:13;2486:7;2496:3;2486:13;2503:1;2486:18;:93;;-1:-1:-1;;;2486:93:93;;;2507:34;2486:93;2454:125;;;-1:-1:-1;2607:3:93;2597:13;;:18;2593:83;;2634:34;2626:42;2673:3;2625:51;2593:83;2704:3;2694:13;;:18;2690:83;;2731:34;2723:42;2770:3;2722:51;2690:83;2801:3;2791:13;;:18;2787:83;;2828:34;2820:42;2867:3;2819:51;2787:83;2898:4;2888:14;;:19;2884:84;;2926:34;2918:42;2965:3;2917:51;2884:84;2996:4;2986:14;;:19;2982:84;;3024:34;3016:42;3063:3;3015:51;2982:84;3094:4;3084:14;;:19;3080:84;;3122:34;3114:42;3161:3;3113:51;3080:84;3192:4;3182:14;;:19;3178:84;;3220:34;3212:42;3259:3;3211:51;3178:84;3290:5;3280:15;;:20;3276:85;;3319:34;3311:42;3358:3;3310:51;3276:85;3389:5;3379:15;;:20;3375:85;;3418:34;3410:42;3457:3;3409:51;3375:85;3488:5;3478:15;;:20;3474:85;;3517:34;3509:42;3556:3;3508:51;3474:85;3587:5;3577:15;;:20;3573:85;;3616:34;3608:42;3655:3;3607:51;3573:85;3686:6;3676:16;;:21;3672:86;;3716:34;3708:42;3755:3;3707:51;3672:86;3786:6;3776:16;;:21;3772:86;;3816:34;3808:42;3855:3;3807:51;3772:86;3886:6;3876:16;;:21;3872:86;;3916:34;3908:42;3955:3;3907:51;3872:86;3986:6;3976:16;;:21;3972:86;;4016:34;4008:42;4055:3;4007:51;3972:86;4086:7;4076:17;;:22;4072:86;;4117:33;4109:41;4155:3;4108:50;4072:86;4186:7;4176:17;;:22;4172:85;;4217:32;4209:40;4254:3;4208:49;4172:85;4285:7;4275:17;;:22;4271:83;;4316:30;4308:38;4351:3;4307:47;4271:83;4382:7;4372:17;;:22;4368:78;;4413:25;4405:33;4443:3;4404:42;4368:78;4472:1;4465:4;:8;;;4461:47;;;4503:5;-1:-1:-1;;4483:25:93;;;;;:::i;:::-;;4475:33;;4461:47;4883:7;4874:5;:17;:22;:30;;4903:1;4874:30;;;4899:1;4874:30;4857:48;;4867:2;4858:5;:11;;4857:48;4834:72;;2265:2652;;2170:2753;;;:::o;9995:432:89:-;10131:14;10204:1;10192:9;:13;;;:218;;10328:82;:71;10344:13;10359;10382:9;10394:4;10328:15;:71::i;:82::-;10192:218;;;10225:84;:73;10241:13;10256;10280:9;10279:10;;10292:5;10225:15;:73::i;:84::-;10224:85;;;9995:432;-1:-1:-1;;;;9995:432:89:o;10777:::-;10913:14;10986:1;10974:9;:13;;;:218;;11110:82;:71;11126:13;11141;11164:9;11176:4;11110:15;:71::i;10974:218::-;11007:84;:73;11023:13;11038;11062:9;11061:10;;11074:5;11007:15;:73::i;417:247:88:-;479:9;562:1;558;:5;;;554:104;;;595:2;596:1;595:2;:::i;:::-;583:15;;:1;:15;:::i;:::-;579:19;;554:104;;;633:14;645:1;633;:14;:::i;1691:170:53:-;1743:8;-1:-1:-1;;;;;1767:29:53;;1763:60;;;1805:18;;-1:-1:-1;;;1805:18:53;;;;;;;;;;;1763:60;-1:-1:-1;1851:1:53;1691:170::o;666:157:95:-;725:12;752:68;781:11;:1;1336:3;1332:22;;1160:210;781:11;767;:1;1336:3;1332:22;;1160:210;767:11;:25;;;;:::i;:::-;794;808:1;794;:25;:::i;2568:2087:92:-;2752:10;2764:16;2816;2842:11;2835:18;;:4;:18;;;;;;;:::i;:::-;;2816:37;;2878:1;2871:4;:8;;;:35;;;;;2890:11;2883:18;;:4;:18;;;;;;;:::i;:::-;;:23;;;;2871:35;2867:53;;;-1:-1:-1;;2908:12:92;2867:53;2974:3;2970:1669;;;1100:9;;;;1108:1;1100:9;;;3174:1;3221:13;;;2998;3221;;;;;;;;;;;1151:3;1144:10;;;3174:11;;;;;;;3153:33;;-1:-1:-1;;3153:33:92;3221:20;;;3396:11;;;;-1:-1:-1;1100:9:92;;1144:10;;3396:11;3546:194;;3729:11;3717:6;3710:14;;3691:10;:34;3690:50;3546:194;;;3656:11;3616:34;3643:6;3616:26;:34::i;:::-;3607:6;:43;3600:51;;3581:10;:71;3580:87;3546:194;3539:201;;2979:776;;;;2970:1669;;;3934:1;3921:14;;;1100:9;;1108:1;1100:9;;;4086:13;;;3881;4086;;;;;;;;;;;1151:3;1144:10;;;4034:11;;;;;;;-1:-1:-1;;4033:17:92;4031:20;4086;;;4253:11;;;;-1:-1:-1;1100:9:92;;1144:10;4031:20;4253:11;4403:221;;4613:11;4601:6;4583:15;:24;4576:32;;4553:10;4566:1;4553:14;:56;4552:72;4403:221;;;4518:11;4506:6;4468:35;4496:6;4468:27;:35::i;:::-;:44;4461:52;;4438:10;4451:1;4438:14;:76;4437:92;4403:221;4396:228;;3761:878;;;;2970:1669;2792:1857;2568:2087;;;;;;;:::o;1433:3347:90:-;1643:24;;;;-1:-1:-1;;;;;1777:41:90;;;;;;;;1847:20;;;;;;1882:1398;;1913:30;1946:61;1970:15;1994:7;1988:3;:13;1946:61;;2003:3;1946:15;:61::i;:::-;1913:94;;2036:10;:230;;2179:87;2209:19;2230:18;2250:9;2261:4;2179:29;:87::i;:::-;2036:230;;;2069:87;2099:18;2119:19;2140:9;2151:4;2069:29;:87::i;:::-;2025:241;;2314:8;2288:22;:34;2284:337;;2365:18;2346:37;;2284:337;;;2449:153;2514:19;2535:9;2546:22;2570:10;2449:39;:153::i;:::-;2430:172;;2284:337;1895:740;1882:1398;;;2671:10;:232;;2815:88;2845:19;2866:18;2886:9;2897:5;2815:29;:88::i;:::-;2671:232;;;2704:88;2734:18;2754:19;2775:9;2786:5;2704:29;:88::i;:::-;2659:244;;2954:9;2934:15;2933:16;;2925:38;2921:345;;3006:18;2987:37;;2921:345;;;3090:157;3156:19;3177:9;3197:15;3196:16;;3215:10;3090:40;:157::i;:::-;3071:176;;2921:345;-1:-1:-1;;;;;3305:38:90;;;;;;;3402:788;;;;3447:3;:14;;;;;3454:7;3447:14;:153;;3515:85;3545:16;3563:19;3584:9;3595:4;3515:29;:85::i;:::-;3447:153;;;3484:8;3447:153;3436:164;;3630:3;:15;;;;;3638:7;3637:8;3630:15;:156;;3700:86;3730:16;3748:19;3769:9;3780:5;3700:29;:86::i;:::-;3630:156;;;3668:9;3630:156;3618:168;;3402:788;;;3836:3;:14;;;;;3843:7;3836:14;:153;;3904:85;3934:19;3955:16;3973:9;3984:4;3904:29;:85::i;:::-;3836:153;;;3873:8;3836:153;3825:164;;4019:3;:15;;;;;4027:7;4026:8;4019:15;:156;;4089:86;4119:19;4140:16;4158:9;4169:5;4089:29;:86::i;:::-;4019:156;;;4057:9;4019:156;4007:168;;3402:788;4288:7;4287:8;:49;;;;;4320:15;4319:16;;4299:9;:37;4287:49;4283:125;;;4377:15;4376:16;;4356:37;;4283:125;4426:7;:49;;;;;4457:18;-1:-1:-1;;;;;4437:38:90;:16;-1:-1:-1;;;;;4437:38:90;;;4426:49;4422:342;;;4631:8;4612:15;4604:35;4592:47;;4422:342;;;4690:59;4716:8;4726:7;4690:59;;4741:7;4735:3;:13;4690:59;;:25;:59::i;:::-;4678:71;;4422:342;1735:3039;;;1433:3347;;;;;;;;;;:::o;1051:162:53:-;1103:8;-1:-1:-1;;;;;1127:1:53;:29;1123:60;;;1165:18;;-1:-1:-1;;;1165:18:53;;;;;;;;;;;789:4029:87;871:14;1260:5;;;871:14;-1:-1:-1;;1264:1:87;1260;1432:20;1505:5;1501:2;1498:13;1490:5;1486:2;1482:14;1478:34;1469:43;;;1665:5;1651:11;:19;1643:28;;;;;;1752:5;1761:1;1752:10;1748:161;;-1:-1:-1;1823:23:87;;;;-1:-1:-1;1881:13:87;;1748:161;2209:17;2293:11;2290:1;2287;2280:25;2685:12;2701:15;;;2700:31;;2837:22;;;;;3712:1;3693;:15;;3692:21;;3955:17;;;3951:21;;3944:28;4017:17;;;4013:21;;4006:28;4080:17;;;4076:21;;4069:28;4143:17;;;4139:21;;4132:28;4206:17;;;4202:21;;4195:28;4270:17;;;4266:21;;;4259:28;3249:12;;;;3245:23;;;3270:1;3241:31;2438:20;;;2427:32;;;3308:12;;;;2485:21;;;;2981:16;;;;3299:21;;;;4763:11;;;;;-1:-1:-1;;789:4029:87;;;;;:::o;2370:364:91:-;2454:7;;2525:11;2490:31;2525:11;-1:-1:-1;;2490:31:91;:::i;:::-;2489:47;;;;:::i;:::-;2473:63;-1:-1:-1;2546:13:91;2598:11;;960:9:93;-1:-1:-1;;960:9:93;:::i;:::-;2563:31:91;;;;:::i;:::-;2562:47;;;;:::i;:::-;2546:63;-1:-1:-1;2619:15:91;2666:11;2645:17;2655:7;2546:63;2645:17;:::i;:::-;2644:33;;;;:::i;:::-;2637:45;;2681:1;2637:45;:::i;:::-;2619:63;-1:-1:-1;2699:28:91;;;;-1:-1:-1;;;;;2699:28:91;:::i;:::-;2692:35;2370:364;-1:-1:-1;;;;;2370:364:91:o;6122:1699::-;6465:10;;;;6416:12;6465:10;;;;;;;;;;6670:16;;-1:-1:-1;;;;;6723:25:91;;;6736:3;6783:15;6416:12;6848:60;6723:25;6893:14;6848:22;:60::i;:::-;6818:90;;6945:12;-1:-1:-1;;;;;6923:34:91;:19;-1:-1:-1;;;;;6923:34:91;;6919:74;;;6966:27;;-1:-1:-1;;;6966:27:91;;1377:1:154;1366:21;;;6966:27:91;;;1348:40:154;1321:18;;6966:27:91;1206:188:154;6919:74:91;-1:-1:-1;;;;;7015:24:91;;;;7045:25;;;;;7014:57;;;;;;-1:-1:-1;7069:1:91;7086:25;7082:341;;7251:11;7243:19;;:4;:19;;;7239:174;;7282:26;;;:49;;;7349:26;;;:49;;;7239:174;7548:24;7575:5;:85;;7624:35;7645:14;7624:18;:35;:::i;:::-;7575:85;;;7584:35;7605:14;7584:18;:35;:::i;:::-;7780:3;7776:27;7752:52;;;;7734:71;;;-1:-1:-1;6122:1699:91;;;-1:-1:-1;;;;;;;;;;6122:1699:91:o;1429:401:92:-;1572:11;1565:18;;:4;:18;;;;;;;:::i;:::-;;:23;;;1561:69;;1597:33;;-1:-1:-1;;;1597:33:92;;28405:1:154;28394:21;;;1597:33:92;;;28376:40:154;28452:21;;;28432:18;;;28425:49;28349:18;;1597:33:92;28210:270:154;1561:69:92;1679:13;1694:12;1710:28;1726:11;1719:18;;:4;:18;;;;;;;:::i;:::-;;1100:9;;1108:1;1100:9;;;;1151:3;1144:10;;;;969:204;1710:28;1767:1;1792:13;;;1752:12;1792:13;;;;;;;;;;;;:21;;1767:11;;;;;;;;1792:21;;;;;;-1:-1:-1;;;;1429:401:92:o;3510:1675:91:-;3861:15;;;;3770:28;3861:15;;;;;;;;;;;3907;;;;;;;;3770:28;;;;3861:15;;3907;3770:28;;;;4073:24;;;;;4069:380;;-1:-1:-1;;4139:27:91;;;;4206;;;;4069:380;;;4317:5;:27;;;4294:20;:50;4272:72;;4407:5;:27;;;4384:20;:50;4362:72;;4069:380;4505:27;4546;4605:9;4591:23;;:11;:23;;;4587:379;;;-1:-1:-1;;4656:27:91;;;;4723;;;;4587:379;;;4834:5;:27;;;4811:20;:50;4789:72;;4924:5;:27;;;4901:20;:50;4879:72;;4587:379;5003:42;;;;:64;;;;;5104:42;;;;:64;;;;;-1:-1:-1;3510:1675:91;;-1:-1:-1;;;;;;;3510:1675:91:o;2506:1299:84:-;2728:24;;;;;;;;;;-1:-1:-1;;;;;2728:24:84;;;;;;;;;;;;;;;;;;;;;;2680:17;;;;;2798:19;;;;;;2794:301;;2837:15;;-1:-1:-1;;;;;2837:20:84;:15;:20;2833:60;;2866:27;;-1:-1:-1;;;2866:27:84;;;;;;;;;;;2833:60;-1:-1:-1;2967:15:84;;2794:301;;;3052:15;;3029:55;;3069:14;3029:22;:55::i;:::-;3013:71;;2794:301;3267:137;3323:5;:30;;;3300:20;:53;3355:5;:15;;;-1:-1:-1;;;;;3267:137:84;-1:-1:-1;;;3267:15:84;:137::i;:::-;3255:149;;3430:137;3486:5;:30;;;3463:20;:53;3518:5;:15;;;-1:-1:-1;;;;;3430:137:84;-1:-1:-1;;;3430:15:84;:137::i;:::-;3418:149;;3623:14;:19;;3641:1;3623:19;3619:55;;3644:30;;-1:-1:-1;;;;;;3644:30:84;-1:-1:-1;;;;;3644:30:84;;;;;3619:55;-1:-1:-1;;3684:29:84;;;:52;;;;3746:29;;;;:52;2506:1299;;;-1:-1:-1;2506:1299:84:o;7917:768:89:-;8068:15;8143:13;-1:-1:-1;;;;;8127:29:89;:13;-1:-1:-1;;;;;8127:29:89;;8123:98;;;8192:13;;8207;8123:98;-1:-1:-1;;;;;;;343:2:86;8257:45:89;;;;-1:-1:-1;;;;;8337:29:89;;;8316:50;;;8385:18;;8236;8385;8381:45;;8412:14;;-1:-1:-1;;;8412:14:89;;;;;;;;;;;8381:45;8448:7;:220;;8655:13;-1:-1:-1;;;;;8598:70:89;:54;8614:10;8626;8638:13;-1:-1:-1;;;;;8598:54:89;:15;:54::i;:::-;:70;;;;;:::i;:::-;;8448:220;;;8474:105;8499:64;8525:10;8537;8549:13;-1:-1:-1;;;;;8499:64:89;:25;:64::i;:::-;8565:13;-1:-1:-1;;;;;8474:105:89;675:9:94;;;689;;686:16;;671:32;;526:207;8474:105:89;8441:227;7917:768;-1:-1:-1;;;;;;;7917:768:89:o;9143:502::-;9294:15;9345:13;-1:-1:-1;;;;;9329:29:89;:13;-1:-1:-1;;;;;9329:29:89;;9325:98;;;9394:13;;9409;9325:98;9441:7;:197;;9563:75;-1:-1:-1;;;;;9563:75:89;;9590:29;9606:13;9590;:29;:::i;:::-;-1:-1:-1;;;;;9563:75:89;-1:-1:-1;;;9563:15:89;:75::i;:::-;9441:197;;;9463:85;-1:-1:-1;;;;;9463:85:89;;9500:29;9516:13;9500;:29;:::i;:::-;-1:-1:-1;;;;;9463:85:89;-1:-1:-1;;;9463:25:89;:85::i;705:877:81:-;767:7;798:1;794;:5;786:14;;;;;;-1:-1:-1;;;839:1:81;:40;835:114;;905:3;899:9;;;;926:8;835:114;971:19;966:1;:24;962:96;;1016:2;1010:8;;;;1036:7;962:96;1080:11;1075:1;:16;1071:88;;1117:2;1111:8;;;;1137:7;1071:88;1181:7;1176:1;:12;1172:84;;1214:2;1208:8;;;;1234:7;1172:84;1278:5;1273:1;:10;1269:80;;1309:1;1303:7;;;;1328:6;1269:80;1371:4;1366:1;:9;1362:79;;1401:1;1395:7;;;;1420:6;1362:79;1463:3;1458:1;:8;1454:78;;1492:1;1486:7;;;;1511:6;1454:78;1554:3;1549:1;:8;1545:20;;1564:1;1559:6;705:877;;;:::o;2073:1072::-;2136:7;2167:1;2163;:5;2155:14;;;;;;-1:-1:-1;2208:3:81;-1:-1:-1;;;;;2229:21:81;;:25;2225:120;;-1:-1:-1;;2274:8:81;2225:120;;;2327:3;2321:9;;;;;2225:120;2366:16;2362:20;;:24;2358:117;;-1:-1:-1;;2406:7:81;2358:117;;;2458:2;2452:8;;;;;2358:117;2496:16;2492:20;;:24;2488:117;;-1:-1:-1;;2536:7:81;2488:117;;;2588:2;2582:8;;;;;2488:117;2626:16;2622:20;;:24;2618:117;;-1:-1:-1;;2666:7:81;2618:117;;;2718:2;2712:8;;;;;2618:117;2756:15;2752:19;;:23;2748:114;;-1:-1:-1;;2795:6:81;2748:114;;;2846:1;2840:7;;;;;2748:114;2883:3;2879:7;;:11;2875:102;;-1:-1:-1;;2910:6:81;2875:102;;;2961:1;2955:7;;;;;2875:102;2998:3;2994:7;;:11;2990:102;;-1:-1:-1;;3025:6:81;2990:102;;;3076:1;3070:7;;;;;2990:102;3113:3;3109:7;;:11;3105:23;;-1:-1:-1;;3122:6:81;2073:1072;;;:::o;5724:536:89:-;5878:16;-1:-1:-1;;;;;5914:13:89;;;;:31;;-1:-1:-1;;;;;;5931:14:89;;;5914:31;5910:69;;;5954:25;;-1:-1:-1;;;5954:25:89;;;;;;;;;;;5910:69;6063:10;:190;;6177:76;6217:8;6227:9;6238:8;6248:4;6177:39;:76::i;6063:190::-;6088:74;6126:8;6136:9;6147:8;6157:4;6088:37;:74::i;6830:536::-;6986:16;-1:-1:-1;;;;;7022:13:89;;;;:31;;-1:-1:-1;;;;;;7039:14:89;;;7022:31;7018:69;;;7062:25;;-1:-1:-1;;;7062:25:89;;;;;;;;;;;7018:69;7165:10;:194;;7283:76;7321:8;7331:9;7342;7353:5;7283:37;:76::i;7165:194::-;7190:78;7230:8;7240:9;7251;7262:5;7190:39;:78::i;5100:335:87:-;5192:14;5251:25;5258:1;5261;5264:11;5251:6;:25::i;:::-;5242:34;;5322:1;5307:11;5294:25;;;;;:::i;:::-;5304:1;5301;5294:25;:29;5290:129;;;-1:-1:-1;;5351:6:87;:26;5343:35;;;;;;5396:8;;5100:335;;;;;:::o;4006:1145:89:-;4165:7;4346:3;4342:803;;;4365:16;-1:-1:-1;;;;;4402:27:89;;;:172;;4522:52;4538:6;-1:-1:-1;;;4564:9:89;-1:-1:-1;;;;;4522:52:89;:15;:52::i;:::-;4402:172;;;4452:47;-1:-1:-1;;;;;4452:47:89;;343:2:86;4453:33:89;;;4452:47;:::i;:::-;4365:223;-1:-1:-1;4610:42:89;4611:28;4365:223;-1:-1:-1;;;;;4611:17:89;;:28;:::i;:::-;4610:40;:42::i;:::-;4603:49;;;;;4342:803;4683:16;-1:-1:-1;;;;;4720:27:89;;;:205;;4863:62;4889:6;-1:-1:-1;;;4915:9:89;-1:-1:-1;;;;;4863:62:89;:25;:62::i;:::-;4720:205;;;4770:70;343:2:86;4795:33:89;;;-1:-1:-1;;;;;4770:70:89;;675:9:94;;;689;;686:16;;671:32;;526:207;4770:70:89;4683:256;;4970:8;4958;-1:-1:-1;;;;;4958:20:89;;4954:53;;4987:20;;-1:-1:-1;;;4987:20:89;;;;;;;;;;;4954:53;-1:-1:-1;;;;;5100:19:89;;;;-1:-1:-1;5085:35:89;;1597:1571;1754:7;1893:6;1903:1;1893:11;1889:32;;-1:-1:-1;1913:8:89;1906:15;;1889:32;-1:-1:-1;;;;;;;343:2:86;1952:45:89;;;;2008:1154;;;;-1:-1:-1;;;;;2077:17:89;;;;;;:6;:17;:6;2116:16;;;;:::i;:::-;;:28;2112:345;;2190:20;;;2236:25;;;2232:207;;2355:60;2381:10;2393:8;-1:-1:-1;;;;;2355:60:89;2403:11;2355:25;:60::i;:::-;2340:76;;;;;;;2232:207;2146:311;2112:345;-1:-1:-1;2550:70:89;2575:10;2613:6;2588:21;-1:-1:-1;;;;;2588:21:89;;2575:10;2588:21;:::i;:::-;2587:32;;;;:::i;:::-;675:9:94;;;689;;686:16;;671:32;;526:207;2008:1154:89;-1:-1:-1;;;;;2698:17:89;;;;;;:6;:17;:6;2903:16;;;;:::i;:::-;;:28;;:53;;;;2949:7;2935:10;:21;;2903:53;2899:81;;;2965:15;;-1:-1:-1;;;2965:15:89;;;;;;;;;;;2899:81;3020:20;;;3065:72;:60;3020:10;-1:-1:-1;;;;;3065:60:89;;3020:20;3065:25;:60::i;422:142:53:-;508:1;-1:-1:-1;;;;;524:6:53;;;;520:37;;539:18;;-1:-1:-1;;;539:18:53;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;14:131:154:-;-1:-1:-1;;;;;89:31:154;;79:42;;69:70;;135:1;132;125:12;150:160;216:20;;276:1;265:20;;;255:31;;245:59;;300:1;297;290:12;315:484;425:6;433;441;449;502:3;490:9;481:7;477:23;473:33;470:53;;;519:1;516;509:12;470:53;555:9;542:23;532:33;;615:2;604:9;600:18;587:32;628:31;653:5;628:31;:::i;:::-;678:5;-1:-1:-1;702:36:154;734:2;719:18;;702:36;:::i;:::-;692:46;;757:36;789:2;778:9;774:18;757:36;:::i;:::-;747:46;;315:484;;;;;;;:::o;1399:180::-;1458:6;1511:2;1499:9;1490:7;1486:23;1482:32;1479:52;;;1527:1;1524;1517:12;1479:52;-1:-1:-1;1550:23:154;;1399:180;-1:-1:-1;1399:180:154:o;1766:127::-;1827:10;1822:3;1818:20;1815:1;1808:31;1858:4;1855:1;1848:15;1882:4;1879:1;1872:15;1898:253;1970:2;1964:9;2012:4;2000:17;;2047:18;2032:34;;2068:22;;;2029:62;2026:88;;;2094:18;;:::i;:::-;2130:2;2123:22;1898:253;:::o;2156:275::-;2227:2;2221:9;2292:2;2273:13;;-1:-1:-1;;2269:27:154;2257:40;;2327:18;2312:34;;2348:22;;;2309:62;2306:88;;;2374:18;;:::i;:::-;2410:2;2403:22;2156:275;;-1:-1:-1;2156:275:154:o;2436:119::-;2521:8;2514:5;2510:20;2503:5;2500:31;2490:59;;2545:1;2542;2535:12;2560:1104;2614:5;2662:4;2650:9;2645:3;2641:19;2637:30;2634:50;;;2680:1;2677;2670:12;2634:50;2713:2;2707:9;2755:4;2747:6;2743:17;2826:6;2814:10;2811:22;2790:18;2778:10;2775:34;2772:62;2769:88;;;2837:18;;:::i;:::-;2873:2;2866:22;2906:6;-1:-1:-1;2906:6:154;2936:23;;2968:33;2936:23;2968:33;:::i;:::-;3010:23;;3085:2;3070:18;;3057:32;3098:33;3057:32;3098:33;:::i;:::-;3159:2;3147:15;;3140:32;3224:2;3209:18;;3196:32;3237:33;3196:32;3237:33;:::i;:::-;3298:2;3286:15;;3279:32;3363:2;3348:18;;3335:32;3376:33;3335:32;3376:33;:::i;:::-;3437:2;3425:15;;3418:32;3502:3;3487:19;;3474:33;3516:32;3474:33;3516:32;:::i;:::-;3576:3;3564:16;;3557:33;3652:3;3637:19;;;3624:33;3606:16;;3599:59;;;;2560:1104;;-1:-1:-1;2560:1104:154:o;3669:347::-;3720:8;3730:6;3784:3;3777:4;3769:6;3765:17;3761:27;3751:55;;3802:1;3799;3792:12;3751:55;-1:-1:-1;3825:20:154;;3868:18;3857:30;;3854:50;;;3900:1;3897;3890:12;3854:50;3937:4;3929:6;3925:17;3913:29;;3989:3;3982:4;3973:6;3965;3961:19;3957:30;3954:39;3951:59;;;4006:1;4003;3996:12;3951:59;3669:347;;;;;:::o;4021:663::-;4135:6;4143;4151;4159;4212:3;4200:9;4191:7;4187:23;4183:33;4180:53;;;4229:1;4226;4219:12;4180:53;4252:45;4289:7;4278:9;4252:45;:::i;:::-;4242:55;;4347:3;4336:9;4332:19;4319:33;4361:31;4386:5;4361:31;:::i;:::-;4411:5;-1:-1:-1;4467:3:154;4452:19;;4439:33;4495:18;4484:30;;4481:50;;;4527:1;4524;4517:12;4481:50;4566:58;4616:7;4607:6;4596:9;4592:22;4566:58;:::i;:::-;4021:663;;;;-1:-1:-1;4643:8:154;-1:-1:-1;;;;4021:663:154:o;4689:365::-;4783:6;4791;4844:3;4832:9;4823:7;4819:23;4815:33;4812:53;;;4861:1;4858;4851:12;4812:53;4884:45;4921:7;4910:9;4884:45;:::i;:::-;4874:55;;4979:3;4968:9;4964:19;4951:33;4993:31;5018:5;4993:31;:::i;:::-;5043:5;5033:15;;;4689:365;;;;;:::o;5059:279::-;5150:6;5203:2;5191:9;5182:7;5178:23;5174:32;5171:52;;;5219:1;5216;5209:12;5171:52;5258:9;5245:23;5277:31;5302:5;5277:31;:::i;5774:229::-;5859:6;5912:3;5900:9;5891:7;5887:23;5883:33;5880:53;;;5929:1;5926;5919:12;5880:53;5952:45;5989:7;5978:9;5952:45;:::i;6008:927::-;6162:6;6170;6178;6186;6230:9;6221:7;6217:23;6260:3;6256:2;6252:12;6249:32;;;6277:1;6274;6267:12;6249:32;6300:45;6337:7;6326:9;6300:45;:::i;:::-;6290:55;-1:-1:-1;6380:4:154;-1:-1:-1;;6361:17:154;;6357:28;6354:48;;;6398:1;6395;6388:12;6354:48;;6424:22;;:::i;:::-;6469:37;6501:3;6490:9;6486:19;6469:37;:::i;:::-;6462:5;6455:52;6539:37;6571:3;6560:9;6556:19;6539:37;:::i;:::-;6534:2;6523:14;;6516:61;6637:3;6622:19;;6609:33;6604:2;6593:14;;6586:57;6527:5;-1:-1:-1;6718:3:154;6703:19;;6690:33;6746:18;6735:30;;6732:50;;;6778:1;6775;6768:12;7155:486;7262:6;7270;7278;7331:2;7319:9;7310:7;7306:23;7302:32;7299:52;;;7347:1;7344;7337:12;7299:52;7386:9;7373:23;7405:31;7430:5;7405:31;:::i;:::-;7455:5;-1:-1:-1;7512:2:154;7497:18;;7484:32;7525:33;7484:32;7525:33;:::i;:::-;7155:486;;7577:7;;-1:-1:-1;;;7631:2:154;7616:18;;;;7603:32;;7155:486::o;10095:1085::-;10238:6;10246;10254;10262;10306:9;10297:7;10293:23;10336:3;10332:2;10328:12;10325:32;;;10353:1;10350;10343:12;10325:32;10376:45;10413:7;10402:9;10376:45;:::i;:::-;10366:55;-1:-1:-1;10456:4:154;-1:-1:-1;;10437:17:154;;10433:28;10430:48;;;10474:1;10471;10464:12;10430:48;;10500:22;;:::i;:::-;10574:3;10563:9;10559:19;10546:33;10624:7;10617:15;10610:23;10601:7;10598:36;10588:64;;10648:1;10645;10638:12;10588:64;10661:22;;10743:3;10728:19;;10715:33;10710:2;10699:14;;10692:57;10801:3;10786:19;;10773:33;10815;10773;10815;:::i;:::-;10875:2;10864:14;;10857:31;10868:5;-1:-1:-1;10963:3:154;10948:19;;10935:33;10991:18;10980:30;;10977:50;;;11023:1;11020;11013:12;11185:946;11269:6;11300:2;11343;11331:9;11322:7;11318:23;11314:32;11311:52;;;11359:1;11356;11349:12;11311:52;11399:9;11386:23;11428:18;11469:2;11461:6;11458:14;11455:34;;;11485:1;11482;11475:12;11455:34;11523:6;11512:9;11508:22;11498:32;;11568:7;11561:4;11557:2;11553:13;11549:27;11539:55;;11590:1;11587;11580:12;11539:55;11626:2;11613:16;11648:2;11644;11641:10;11638:36;;;11654:18;;:::i;:::-;11700:2;11697:1;11693:10;11683:20;;11723:28;11747:2;11743;11739:11;11723:28;:::i;:::-;11785:15;;;11855:11;;;11851:20;;;11816:12;;;;11883:19;;;11880:39;;;11915:1;11912;11905:12;11880:39;11939:11;;;;11959:142;11975:6;11970:3;11967:15;11959:142;;;12041:17;;12029:30;;11992:12;;;;12079;;;;11959:142;;;12120:5;11185:946;-1:-1:-1;;;;;;;;11185:946:154:o;12136:632::-;12307:2;12359:21;;;12429:13;;12332:18;;;12451:22;;;12278:4;;12307:2;12530:15;;;;12504:2;12489:18;;;12278:4;12573:169;12587:6;12584:1;12581:13;12573:169;;;12648:13;;12636:26;;12717:15;;;;12682:12;;;;12609:1;12602:9;12573:169;;;-1:-1:-1;12759:3:154;;12136:632;-1:-1:-1;;;;;;12136:632:154:o;13013:665::-;13136:6;13144;13152;13160;13168;13221:3;13209:9;13200:7;13196:23;13192:33;13189:53;;;13238:1;13235;13228:12;13189:53;13261:45;13298:7;13287:9;13261:45;:::i;:::-;13251:55;;13353:3;13342:9;13338:19;13325:33;13315:43;;13405:3;13394:9;13390:19;13377:33;13367:43;;13461:3;13450:9;13446:19;13433:33;13489:18;13481:6;13478:30;13475:50;;;13521:1;13518;13511:12;13475:50;13560:58;13610:7;13601:6;13590:9;13586:22;13560:58;:::i;:::-;13013:665;;;;-1:-1:-1;13013:665:154;;-1:-1:-1;13637:8:154;;13534:84;13013:665;-1:-1:-1;;;13013:665:154:o;13907:461::-;14022:12;;-1:-1:-1;;;;;14018:21:154;;;14006:34;;14093:4;14082:16;;;14076:23;14072:32;;14056:14;;;14049:56;14158:4;14147:16;;;14141:23;14137:32;;14121:14;;;14114:56;14223:4;14212:16;;;14206:23;14202:32;;;14186:14;;;14179:56;14288:4;14277:16;;;14271:23;14296:8;14267:38;14251:14;;;14244:62;13986:3;14344:16;;;14338:23;14322:14;;14315:47;13907:461::o;14373:266::-;14461:6;14456:3;14449:19;14513:6;14506:5;14499:4;14494:3;14490:14;14477:43;-1:-1:-1;14565:1:154;14540:16;;;14558:4;14536:27;;;14529:38;;;;14621:2;14600:15;;;-1:-1:-1;;14596:29:154;14587:39;;;14583:50;;14373:266::o;14644:608::-;-1:-1:-1;;;;;14997:15:154;;;14979:34;;14900:4;;14929:3;;15022:53;15071:2;15056:18;;15048:6;15022:53;:::i;:::-;15112:15;;15106:3;15091:19;;15084:44;15159:3;15144:19;;15137:31;;;15185:61;15227:18;;;15219:6;15211;15185:61;:::i;15257:290::-;15326:6;15379:2;15367:9;15358:7;15354:23;15350:32;15347:52;;;15395:1;15392;15385:12;15347:52;15421:16;;-1:-1:-1;;;;;;15466:32:154;;15456:43;;15446:71;;15513:1;15510;15503:12;15944:691;-1:-1:-1;;;;;16321:15:154;;;16303:34;;16224:4;;16253:3;;16346:53;16395:2;16380:18;;16372:6;16346:53;:::i;:::-;16448:2;16440:6;16436:15;16430:3;16419:9;16415:19;16408:44;;16503:6;16500:1;16489:21;16483:3;16472:9;16468:19;16461:50;16548:2;16542:3;16531:9;16527:19;16520:31;16568:61;16625:2;16614:9;16610:18;16602:6;16594;16568:61;:::i;17086:691::-;-1:-1:-1;;;;;17481:32:154;;17463:51;;17422:4;17451:3;17523:53;17572:2;17557:18;;17549:6;17523:53;:::i;:::-;16934:12;;16931:1;16920:27;;;17648:3;17633:19;;16908:40;17011:4;17000:16;;16994:23;16980:38;;16964:14;;;16957:62;17068:4;17057:16;;17051:23;17035:14;;;17028:47;17585:68;17690:2;17684:3;17673:9;17669:19;17662:31;17710:61;17767:2;17756:9;17752:18;17744:6;17736;17710:61;:::i;17782:452::-;18057:3;18042:19;;18070:44;18046:9;18096:6;18070:44;:::i;:::-;18145:3;18130:19;;18123:35;;;;-1:-1:-1;;;;;18195:32:154;;;;18189:3;18174:19;;;18167:61;17782:452;;-1:-1:-1;17782:452:154:o;18583:796::-;-1:-1:-1;;;;;19039:32:154;;19021:51;;18980:4;19009:3;19081:53;19130:2;19115:18;;19107:6;19081:53;:::i;:::-;16934:12;;16931:1;16920:27;;;19206:3;19191:19;;16908:40;17011:4;17000:16;;16994:23;16980:38;;16964:14;;;16957:62;17068:4;17057:16;;17051:23;17035:14;;;17028:47;19143:68;19248:6;19242:3;19231:9;19227:19;19220:35;19292:2;19286:3;19275:9;19271:19;19264:31;19312:61;19369:2;19358:9;19354:18;19346:6;19338;19312:61;:::i;19384:127::-;19445:10;19440:3;19436:20;19433:1;19426:31;19476:4;19473:1;19466:15;19500:4;19497:1;19490:15;19516:128;19583:9;;;19604:11;;;19601:37;;;19618:18;;:::i;20313:658::-;-1:-1:-1;;;;;20686:32:154;;20668:51;;20627:4;20656:3;20728:53;20777:2;20762:18;;20754:6;20728:53;:::i;:::-;20149:12;;20142:20;20135:28;20842:3;20827:19;;20123:41;20213:4;20202:16;;20196:23;20180:14;;;20173:47;20273:4;20262:16;;20256:23;-1:-1:-1;;;;;20252:49:154;20236:14;;;20229:73;20790:57;20059:249;21707:763;-1:-1:-1;;;;;22141:32:154;;22123:51;;22082:4;22111:3;22183:53;22232:2;22217:18;;22209:6;22183:53;:::i;:::-;20149:12;;20142:20;20135:28;22297:3;22282:19;;20123:41;20213:4;20202:16;;20196:23;20180:14;;;20173:47;20273:4;20262:16;;20256:23;-1:-1:-1;;;;;20252:49:154;20236:14;;;20229:73;22245:57;20059:249;22475:650;-1:-1:-1;;;;;22818:32:154;;22800:51;;22759:4;22788:3;22860:53;22909:2;22894:18;;22886:6;22860:53;:::i;:::-;22950:6;22944:3;22933:9;22929:19;22922:35;22994:6;22988:3;22977:9;22973:19;22966:35;23038:2;23032:3;23021:9;23017:19;23010:31;23058:61;23115:2;23104:9;23100:18;23092:6;23084;23058:61;:::i;24067:276::-;24136:6;24189:2;24177:9;24168:7;24164:23;24160:32;24157:52;;;24205:1;24202;24195:12;24157:52;24237:9;24231:16;24287:6;24280:5;24276:18;24269:5;24266:29;24256:57;;24309:1;24306;24299:12;24348:249;24534:3;24519:19;;24547:44;24523:9;24573:6;24547:44;:::i;24602:412::-;24731:3;24769:6;24763:13;24794:1;24804:129;24818:6;24815:1;24812:13;24804:129;;;24916:4;24900:14;;;24896:25;;24890:32;24877:11;;;24870:53;24833:12;24804:129;;;-1:-1:-1;24988:1:154;24952:16;;24977:13;;;-1:-1:-1;24952:16:154;24602:412;-1:-1:-1;24602:412:154:o;25019:346::-;-1:-1:-1;;;;;25264:32:154;;25246:51;;25233:3;25218:19;;25306:53;25355:2;25340:18;;25332:6;25306:53;:::i;25370:249::-;25439:6;25492:2;25480:9;25471:7;25467:23;25463:32;25460:52;;;25508:1;25505;25498:12;25460:52;25540:9;25534:16;25559:30;25583:5;25559:30;:::i;26553:127::-;26614:10;26609:3;26605:20;26602:1;26595:31;26645:4;26642:1;26635:15;26669:4;26666:1;26659:15;26685:179;26716:1;26742:6;26775:2;26772:1;26768:10;26797:3;26787:37;;26804:18;;:::i;:::-;26842:10;;26838:20;;;;;26685:179;-1:-1:-1;;26685:179:154:o;27066:184::-;27100:3;27147:5;27144:1;27133:20;27181:7;27177:12;27168:7;27165:25;27162:51;;27193:18;;:::i;:::-;27233:1;27229:15;;27066:184;-1:-1:-1;;27066:184:154:o;27255:200::-;27321:9;;;27294:4;27349:9;;27377:10;;27389:12;;;27373:29;27412:12;;;27404:21;;27370:56;27367:82;;;27429:18;;:::i;:::-;27367:82;27255:200;;;;:::o;27460:125::-;27525:9;;;27546:10;;;27543:36;;;27559:18;;:::i;27590:216::-;27654:9;;;27682:11;;;27629:3;27712:9;;27740:10;;27736:19;;27765:10;;27757:19;;27733:44;27730:70;;;27780:18;;:::i;:::-;27730:70;;27590:216;;;;:::o;27811:120::-;27851:1;27877;27867:35;;27882:18;;:::i;:::-;-1:-1:-1;27916:9:154;;27811:120::o;28485:213::-;28520:3;28568:5;28564:2;28553:21;-1:-1:-1;;;;;28598:39:154;28589:7;28586:52;28583:78;;28641:18;;:::i;28703:200::-;-1:-1:-1;;;;;28839:10:154;;;28827;;;28823:27;;28862:12;;;28859:38;;;28877:18;;:::i;28908:197::-;-1:-1:-1;;;;;29030:10:154;;;29042;;;29026:27;;29065:11;;;29062:37;;;29079:18;;:::i;29110:249::-;29210:2;29199:17;;;29180;;;;29176:41;-1:-1:-1;;;;;;29232:50:154;;-1:-1:-1;;;;;29284:45:154;;29229:101;29226:127;;;29333:18;;:::i;29364:275::-;29402:1;29443;29440;29429:16;29479:1;29476;29465:16;29500:3;29490:37;;29507:18;;:::i;:::-;-1:-1:-1;;29543:21:154;;-1:-1:-1;;29566:15:154;;29539:43;29536:69;;;29585:18;;:::i;:::-;29619:14;;;29364:275;-1:-1:-1;;;29364:275:154:o;29644:237::-;29682:7;29759:1;29756;29745:16;29741:1;29738;29727:16;29723:39;29796:11;29793:1;29782:26;29771:37;;29839:11;29830:7;29827:24;29817:58;;29855:18;;:::i;29886:193::-;29984:1;29973:16;;;29955;;;;29951:39;-1:-1:-1;;30005:23:154;;30040:8;30030:19;;30002:48;29999:74;;;30053:18;;:::i;30084:170::-;30151:8;30179:10;;;30191;;;30175:27;;30214:11;;;30211:37;;;30228:18;;:::i;30259:216::-;30299:1;-1:-1:-1;;;;;30386:2:154;30383:1;30379:10;30408:3;30398:37;;30415:18;;:::i;:::-;30453:10;;30449:20;;;;;30259:216;-1:-1:-1;;30259:216:154:o;30480:245::-;30578:2;30548:17;;;30567;;;;30544:41;-1:-1:-1;;;;;30600:44:154;;-1:-1:-1;;;;;;30646:49:154;;30597:99;30594:125;;;30699:18;;:::i;30730:185::-;-1:-1:-1;;;;;30851:10:154;;;30839;;;30835:27;;30874:12;;;30871:38;;;30889:18;;:::i",
        linkReferences: {},
        immutableReferences: {
          "48302": [
            {
              start: 1562,
              length: 32,
            },
            {
              start: 3721,
              length: 32,
            },
            {
              start: 4538,
              length: 32,
            },
            {
              start: 5159,
              length: 32,
            },
            {
              start: 6125,
              length: 32,
            },
          ],
          "48304": [
            {
              start: 7281,
              length: 32,
            },
            {
              start: 7368,
              length: 32,
            },
          ],
        },
      },
      methodIdentifiers: {
        "MAX_TICK_SPACING()": "60460f06",
        "MIN_PROTOCOL_FEE_DENOMINATOR()": "84e41c5e",
        "MIN_TICK_SPACING()": "07eff0dd",
        "collectProtocolFees(address,address,uint256)": "8161b874",
        "donate((address,address,address,address,uint24,bytes32),uint256,uint256,bytes)": "f15b275f",
        "extsload(bytes32)": "1e2eaeaf",
        "extsload(bytes32[])": "dbd035ff",
        "getLiquidity(bytes32)": "fa6793d5",
        "getLiquidity(bytes32,address,int24,int24)": "33aa955b",
        "getLmPool(bytes32)": "ee681114",
        "getPosition(bytes32,address,int24,int24)": "048d9c70",
        "getSlot0(bytes32)": "c815641c",
        "initialize((address,address,address,address,uint24,bytes32),uint160,bytes)": "222bb36b",
        "masterChef()": "575a86b2",
        "modifyLiquidity((address,address,address,address,uint24,bytes32),(int24,int24,int256),bytes)": "5c3379f9",
        "owner()": "8da5cb5b",
        "pools(bytes32)": "b5217bb4",
        "protocolFeeController()": "f02de3b2",
        "protocolFeesAccrued(address)": "97e8cd4e",
        "renounceOwnership()": "715018a6",
        "setLmPool((address,address,address,address,uint24,bytes32),address)": "23a8c31f",
        "setMasterChef(address)": "a2d9f4dc",
        "setProtocolFee((address,address,address,address,uint24,bytes32))": "5afdef74",
        "setProtocolFeeController(address)": "2d771389",
        "swap((address,address,address,address,uint24,bytes32),(bool,int256,uint160),bytes)": "cd0cc1ce",
        "transferOwnership(address)": "f2fde38b",
        "updateDynamicSwapFee((address,address,address,address,uint24,bytes32))": "f427ddba",
        "vault()": "fbfa77cf",
      },
      rawMetadata:
        '{"compiler":{"version":"0.8.24+commit.e11b9ed9"},"language":"Solidity","output":{"abi":[{"inputs":[{"internalType":"contract IVault","name":"_vault","type":"address"},{"internalType":"uint256","name":"controllerGasLimit","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"CannotUpdateEmptyPosition","type":"error"},{"inputs":[],"name":"CurrenciesInitializedOutOfOrder","type":"error"},{"inputs":[],"name":"FeeNotDynamic","type":"error"},{"inputs":[],"name":"FeeTooLarge","type":"error"},{"inputs":[],"name":"HookConfigValidationError","type":"error"},{"inputs":[],"name":"InvalidHookResponse","type":"error"},{"inputs":[],"name":"InvalidPrice","type":"error"},{"inputs":[],"name":"InvalidPriceOrLiquidity","type":"error"},{"inputs":[],"name":"InvalidProtocolFeeCollector","type":"error"},{"inputs":[{"internalType":"uint160","name":"sqrtPriceCurrentX96","type":"uint160"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"name":"InvalidSqrtPriceLimit","type":"error"},{"inputs":[],"name":"InvalidSqrtRatio","type":"error"},{"inputs":[],"name":"InvalidTick","type":"error"},{"inputs":[],"name":"NoLiquidityToReceiveFees","type":"error"},{"inputs":[],"name":"NoOpHookMissingBeforeCall","type":"error"},{"inputs":[],"name":"NotEnoughLiquidity","type":"error"},{"inputs":[],"name":"PoolAlreadyInitialized","type":"error"},{"inputs":[],"name":"PoolManagerMismatch","type":"error"},{"inputs":[],"name":"PoolNotInitialized","type":"error"},{"inputs":[],"name":"PoolNotInitialized","type":"error"},{"inputs":[],"name":"PriceOverflow","type":"error"},{"inputs":[],"name":"ProtocolFeeCannotBeFetched","type":"error"},{"inputs":[],"name":"ProtocolFeeControllerCallFailedOrInvalidResult","type":"error"},{"inputs":[],"name":"SafeCastOverflow","type":"error"},{"inputs":[],"name":"SwapAmountCannotBeZero","type":"error"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"}],"name":"TickLiquidityOverflow","type":"error"},{"inputs":[{"internalType":"int24","name":"tickLower","type":"int24"}],"name":"TickLowerOutOfBounds","type":"error"},{"inputs":[{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"int24","name":"tickSpacing","type":"int24"}],"name":"TickMisaligned","type":"error"},{"inputs":[],"name":"TickSpacingTooLarge","type":"error"},{"inputs":[],"name":"TickSpacingTooSmall","type":"error"},{"inputs":[{"internalType":"int24","name":"tickUpper","type":"int24"}],"name":"TickUpperOutOfBounds","type":"error"},{"inputs":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"}],"name":"TicksMisordered","type":"error"},{"inputs":[],"name":"UnauthorizedCaller","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"PoolId","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":false,"internalType":"int24","name":"tick","type":"int24"}],"name":"Donate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"PoolId","name":"id","type":"bytes32"},{"indexed":false,"internalType":"uint24","name":"dynamicSwapFee","type":"uint24"}],"name":"DynamicSwapFeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"PoolId","name":"id","type":"bytes32"},{"indexed":true,"internalType":"Currency","name":"currency0","type":"address"},{"indexed":true,"internalType":"Currency","name":"currency1","type":"address"},{"indexed":false,"internalType":"uint24","name":"fee","type":"uint24"},{"indexed":false,"internalType":"int24","name":"tickSpacing","type":"int24"},{"indexed":false,"internalType":"contract ICLHooks","name":"hooks","type":"address"}],"name":"Initialize","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"PoolId","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"int24","name":"tickLower","type":"int24"},{"indexed":false,"internalType":"int24","name":"tickUpper","type":"int24"},{"indexed":false,"internalType":"int256","name":"liquidityDelta","type":"int256"}],"name":"ModifyLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"protocolFeeController","type":"address"}],"name":"ProtocolFeeControllerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"PoolId","name":"id","type":"bytes32"},{"indexed":false,"internalType":"uint16","name":"protocolFee","type":"uint16"}],"name":"ProtocolFeeUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"PoolId","name":"id","type":"bytes32"},{"indexed":false,"internalType":"address","name":"lmPool","type":"address"}],"name":"SetLmPool","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"masterChef","type":"address"}],"name":"SetMasterChef","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"PoolId","name":"id","type":"bytes32"},{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"int128","name":"amount0","type":"int128"},{"indexed":false,"internalType":"int128","name":"amount1","type":"int128"},{"indexed":false,"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"indexed":false,"internalType":"uint128","name":"liquidity","type":"uint128"},{"indexed":false,"internalType":"int24","name":"tick","type":"int24"},{"indexed":false,"internalType":"uint24","name":"fee","type":"uint24"},{"indexed":false,"internalType":"uint256","name":"protocolFee","type":"uint256"}],"name":"Swap","type":"event"},{"inputs":[],"name":"MAX_TICK_SPACING","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_PROTOCOL_FEE_DENOMINATOR","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MIN_TICK_SPACING","outputs":[{"internalType":"int24","name":"","type":"int24"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"Currency","name":"currency","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"collectProtocolFees","outputs":[{"internalType":"uint256","name":"amountCollected","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"key","type":"tuple"},{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"},{"internalType":"bytes","name":"hookData","type":"bytes"}],"name":"donate","outputs":[{"internalType":"BalanceDelta","name":"delta","type":"int256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"slot","type":"bytes32"}],"name":"extsload","outputs":[{"internalType":"bytes32","name":"val","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"slots","type":"bytes32[]"}],"name":"extsload","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"PoolId","name":"id","type":"bytes32"},{"internalType":"address","name":"_owner","type":"address"},{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"}],"name":"getLiquidity","outputs":[{"internalType":"uint128","name":"liquidity","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"PoolId","name":"id","type":"bytes32"}],"name":"getLiquidity","outputs":[{"internalType":"uint128","name":"liquidity","type":"uint128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"PoolId","name":"id","type":"bytes32"}],"name":"getLmPool","outputs":[{"internalType":"address","name":"lmPool","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"PoolId","name":"id","type":"bytes32"},{"internalType":"address","name":"owner","type":"address"},{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"}],"name":"getPosition","outputs":[{"components":[{"internalType":"uint128","name":"liquidity","type":"uint128"},{"internalType":"uint256","name":"feeGrowthInside0LastX128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthInside1LastX128","type":"uint256"}],"internalType":"struct CLPosition.Info","name":"position","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"PoolId","name":"id","type":"bytes32"}],"name":"getSlot0","outputs":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"protocolFee","type":"uint16"},{"internalType":"uint24","name":"swapFee","type":"uint24"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"key","type":"tuple"},{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"bytes","name":"hookData","type":"bytes"}],"name":"initialize","outputs":[{"internalType":"int24","name":"tick","type":"int24"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"masterChef","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"key","type":"tuple"},{"components":[{"internalType":"int24","name":"tickLower","type":"int24"},{"internalType":"int24","name":"tickUpper","type":"int24"},{"internalType":"int256","name":"liquidityDelta","type":"int256"}],"internalType":"struct ICLPoolManager.ModifyLiquidityParams","name":"params","type":"tuple"},{"internalType":"bytes","name":"hookData","type":"bytes"}],"name":"modifyLiquidity","outputs":[{"internalType":"BalanceDelta","name":"delta","type":"int256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"PoolId","name":"id","type":"bytes32"}],"name":"pools","outputs":[{"components":[{"internalType":"uint160","name":"sqrtPriceX96","type":"uint160"},{"internalType":"int24","name":"tick","type":"int24"},{"internalType":"uint16","name":"protocolFee","type":"uint16"},{"internalType":"uint24","name":"swapFee","type":"uint24"}],"internalType":"struct CLPool.Slot0","name":"slot0","type":"tuple"},{"internalType":"uint256","name":"feeGrowthGlobal0X128","type":"uint256"},{"internalType":"uint256","name":"feeGrowthGlobal1X128","type":"uint256"},{"internalType":"uint128","name":"liquidity","type":"uint128"},{"internalType":"contract ICLLmPool","name":"lmPool","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"protocolFeeController","outputs":[{"internalType":"contract IProtocolFeeController","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"Currency","name":"currency","type":"address"}],"name":"protocolFeesAccrued","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"key","type":"tuple"},{"internalType":"address","name":"lmPool","type":"address"}],"name":"setLmPool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_masterChef","type":"address"}],"name":"setMasterChef","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"key","type":"tuple"}],"name":"setProtocolFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IProtocolFeeController","name":"controller","type":"address"}],"name":"setProtocolFeeController","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"key","type":"tuple"},{"components":[{"internalType":"bool","name":"zeroForOne","type":"bool"},{"internalType":"int256","name":"amountSpecified","type":"int256"},{"internalType":"uint160","name":"sqrtPriceLimitX96","type":"uint160"}],"internalType":"struct ICLPoolManager.SwapParams","name":"params","type":"tuple"},{"internalType":"bytes","name":"hookData","type":"bytes"}],"name":"swap","outputs":[{"internalType":"BalanceDelta","name":"delta","type":"int256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"key","type":"tuple"}],"name":"updateDynamicSwapFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vault","outputs":[{"internalType":"contract IVault","name":"","type":"address"}],"stateMutability":"view","type":"function"}],"devdoc":{"errors":{"InvalidSqrtPriceLimit(uint160,uint160)":[{"params":{"sqrtPriceCurrentX96":"current price in the pool","sqrtPriceLimitX96":"The price limit specified by user"}}],"TickLowerOutOfBounds(int24)":[{"params":{"tickLower":"The invalid tickLower"}}],"TickMisaligned(int24,int24)":[{"params":{"tick":"the invalid tick","tickSpacing":"The tick spacing of the pool"}}],"TickUpperOutOfBounds(int24)":[{"params":{"tickUpper":"The invalid tickUpper"}}],"TicksMisordered(int24,int24)":[{"params":{"tickLower":"The invalid tickLower","tickUpper":"The invalid tickUpper"}}]},"events":{"Donate(bytes32,address,uint256,uint256,int24)":{"params":{"amount0":"The delta of the currency0 balance of the pool","amount1":"The delta of the currency1 balance of the pool","id":"The abi encoded hash of the pool key struct for the pool that was modified","sender":"The address that modified the pool","tick":"The donated tick"}},"DynamicSwapFeeUpdated(bytes32,uint24)":{"details":"The event is emitted even if the updated swap fee is the same as previous swap fee"},"Initialize(bytes32,address,address,uint24,int24,address)":{"params":{"currency0":"The first currency of the pool by address sort order","currency1":"The second currency of the pool by address sort order","fee":"The fee collected upon every swap in the pool, denominated in hundredths of a bip","hooks":"The hooks contract address for the pool, or address(0) if none","id":"The abi encoded hash of the pool key struct for the new pool","tickSpacing":"The minimum number of ticks between initialized ticks"}},"ModifyLiquidity(bytes32,address,int24,int24,int256)":{"params":{"id":"The abi encoded hash of the pool key struct for the pool that was modified","liquidityDelta":"The amount of liquidity that was added or removed","sender":"The address that modified the pool","tickLower":"The lower tick of the position","tickUpper":"The upper tick of the position"}},"ProtocolFeeUpdated(bytes32,uint16)":{"details":"The event is emitted even if the updated protocolFee is the same as previous protocolFee"},"Swap(bytes32,address,int128,int128,uint160,uint128,int24,uint24,uint256)":{"params":{"amount0":"The delta of the currency0 balance of the pool","amount1":"The delta of the currency1 balance of the pool","fee":"The fee collected upon every swap in the pool, denominated in hundredths of a bip","id":"The abi encoded hash of the pool key struct for the pool that was modified","liquidity":"The liquidity of the pool after the swap","protocolFee":"Protocol fee from the swap, and it is only on the input currency","sender":"The address that initiated the swap call, and that received the callback","sqrtPriceX96":"The sqrt(price) of the pool after the swap, as a Q64.96","tick":"The log base 1.0001 of the price of the pool after the swap"}}},"kind":"dev","methods":{"extsload(bytes32)":{"params":{"slot":"to read from."},"returns":{"val":"stored at the slot."}},"extsload(bytes32[])":{"params":{"slots":"to read from."},"returns":{"_0":"values stored at the slots."}},"owner()":{"details":"Returns the address of the current owner."},"renounceOwnership()":{"details":"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."},"setLmPool((address,address,address,address,uint24,bytes32),address)":{"details":"During swap, pool will call LMPool to accumulate reward or notify when current tick is crossed.      The only reason why owner call is when we no longer rely on lmPool for farming incentives or      there is an issue with the existing lmPool and we need to change it."},"setMasterChef(address)":{"details":"If farming is migrated to off-chain in the future, masterChef can be reverted to address(0)"},"transferOwnership(address)":{"details":"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."},"updateDynamicSwapFee((address,address,address,address,uint24,bytes32))":{"details":"Some of the use case could be:   1) when hook#beforeSwap() is called and hook call this function to update the swap fee   2) For BinPool only, when hook#beforeMint() is called and hook call this function to update the swap fee   3) other use case where the hook might want to on an ad-hoc basis increase/reduce swap fee"}},"version":1},"userdoc":{"errors":{"CannotUpdateEmptyPosition()":[{"notice":"Cannot update a position with no liquidity"}],"CurrenciesInitializedOutOfOrder()":[{"notice":"PoolKey must have currencies where address(currency0) < address(currency1)"}],"FeeNotDynamic()":[{"notice":"Thrown when an attempt to update pool swap fee but the pool does not have dynamic fee."}],"FeeTooLarge()":[{"notice":"Thrown when the protocol fee denominator is less than 4. Also thrown when the static or dynamic fee on a pool exceeds the upper limit."}],"HookConfigValidationError()":[{"notice":"Hook config validation failed 1. either registration bitmap mismatch 2. or fee related config misconfigured"}],"InvalidHookResponse()":[{"notice":"Hook did not return its selector"}],"InvalidProtocolFeeCollector()":[{"notice":"Thrown when user not authorized to collect protocol fee"}],"InvalidSqrtPriceLimit(uint160,uint160)":[{"notice":"Thrown when sqrtPriceLimitX96 is out of range"}],"InvalidSqrtRatio()":[{"notice":"Thrown when the ratio passed to #getTickAtSqrtRatio does not correspond to a price between MIN_TICK and MAX_TICK"}],"InvalidTick()":[{"notice":"Thrown when the tick passed to #getSqrtRatioAtTick is not between MIN_TICK and MAX_TICK"}],"NoLiquidityToReceiveFees()":[{"notice":"Thrown by donate if there is currently 0 liquidity, since the fees will not go to any liquidity providers"}],"NoOpHookMissingBeforeCall()":[{"notice":"Hook has no-op defined, but lacking before* call"}],"PoolAlreadyInitialized()":[{"notice":"Thrown when trying to initalize an already initialized pool"}],"PoolManagerMismatch()":[{"notice":"PoolManagerMismatch is thrown when pool manager specified in the pool key does not match current contract"}],"PoolNotInitialized()":[{"notice":"Thrown when trying to interact with a non-initialized pool"},{"notice":"Thrown when trying to interact with a non-initialized pool"}],"ProtocolFeeCannotBeFetched()":[{"notice":"Thrown when not enough gas is provided to look up the protocol fee"}],"ProtocolFeeControllerCallFailedOrInvalidResult()":[{"notice":"Thrown when the call to fetch the protocol fee reverts or returns invalid data."}],"SwapAmountCannotBeZero()":[{"notice":"Thrown when trying to swap amount of 0"}],"TickLiquidityOverflow(int24)":[{"notice":"For the tick spacing, the tick has too much liquidity"}],"TickLowerOutOfBounds(int24)":[{"notice":"Thrown when tickLower is less than min tick"}],"TickMisaligned(int24,int24)":[{"notice":"Thrown when the tick is not enumerated by the tick spacing"}],"TickSpacingTooLarge()":[{"notice":"Pools are limited to type(int16).max tickSpacing in #initialize, to prevent overflow"}],"TickSpacingTooSmall()":[{"notice":"Pools must have a positive non-zero tickSpacing passed to #initialize"}],"TickUpperOutOfBounds(int24)":[{"notice":"Thrown when tickUpper exceeds max tick"}],"TicksMisordered(int24,int24)":[{"notice":"Thrown when tickLower is not below tickUpper"}],"UnauthorizedCaller()":[{"notice":"Error thrown when Unauthorized caller"}]},"events":{"Donate(bytes32,address,uint256,uint256,int24)":{"notice":"Emitted when donate happen"},"DynamicSwapFeeUpdated(bytes32,uint24)":{"notice":"Emitted when swap fee is updated"},"Initialize(bytes32,address,address,uint24,int24,address)":{"notice":"Emitted when a new pool is initialized"},"ModifyLiquidity(bytes32,address,int24,int24,int256)":{"notice":"Emitted when a liquidity position is modified"},"ProtocolFeeUpdated(bytes32,uint16)":{"notice":"Emitted when protocol fee is updated"},"SetLmPool(bytes32,address)":{"notice":"Emitted when LMPool is set for a pool"},"SetMasterChef(address)":{"notice":"Emitted when masterChef is updated"},"Swap(bytes32,address,int128,int128,uint160,uint128,int24,uint24,uint256)":{"notice":"Emitted for swaps between currency0 and currency1"}},"kind":"user","methods":{"MAX_TICK_SPACING()":{"notice":"Returns the constant representing the maximum tickSpacing for an initialized pool key"},"MIN_PROTOCOL_FEE_DENOMINATOR()":{"notice":"Returns the minimum denominator for the protocol fee, which restricts it to a maximum of 25%"},"MIN_TICK_SPACING()":{"notice":"Returns the constant representing the minimum tickSpacing for an initialized pool key"},"collectProtocolFees(address,address,uint256)":{"notice":"Collects the protocol fee accrued in the given currency, called by the owner or the protocol fee controller"},"donate((address,address,address,address,uint24,bytes32),uint256,uint256,bytes)":{"notice":"Donate the given currency amounts to the pool with the given pool key"},"extsload(bytes32)":{"notice":"Returns a value from the storage."},"extsload(bytes32[])":{"notice":"Returns multiple values from storage."},"getLiquidity(bytes32)":{"notice":"Get the current value of liquidity of the given pool"},"getLiquidity(bytes32,address,int24,int24)":{"notice":"Get the current value of liquidity for the specified pool and position"},"getLmPool(bytes32)":{"notice":"Return the lmPool for a poolId, address(0) if not set"},"getPosition(bytes32,address,int24,int24)":{"notice":"Get the position struct for a specified pool and position"},"getSlot0(bytes32)":{"notice":"Get the current value in slot0 of the given pool"},"initialize((address,address,address,address,uint24,bytes32),uint160,bytes)":{"notice":"Initialize the state for a given pool ID"},"masterChef()":{"notice":"Return the masterChef address set"},"modifyLiquidity((address,address,address,address,uint24,bytes32),(int24,int24,int256),bytes)":{"notice":"Modify the position for the given pool"},"protocolFeesAccrued(address)":{"notice":"Given a currency address, returns the protocol fees accrued in that currency"},"setLmPool((address,address,address,address,uint24,bytes32),address)":{"notice":"Set liquidity mining pool for a poolId. if a pool has farmining incentive, masterChef         will deploy and assign an LM Pool to a pool."},"setMasterChef(address)":{"notice":"Set masterChef address, in case when farming incentive for a pool begin."},"setProtocolFee((address,address,address,address,uint24,bytes32))":{"notice":"Sets the protocol\'s swap fee for the given pool Protocol fee is always a portion of swap fee that is owed. If that underlying fee is 0, no protocol fee will accrue even if it is set to > 0."},"setProtocolFeeController(address)":{"notice":"Update the protocol fee controller, called by the owner"},"swap((address,address,address,address,uint24,bytes32),(bool,int256,uint160),bytes)":{"notice":"Swap against the given pool"},"updateDynamicSwapFee((address,address,address,address,uint24,bytes32))":{"notice":"Updates the pools swap fee for the a pool that has enabled dynamic swap fee."}},"version":1}},"settings":{"compilationTarget":{"lib/pancake-v4-core/src/pool-cl/CLPoolManager.sol":"CLPoolManager"},"evmVersion":"cancun","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@openzeppelin/=lib/openzeppelin-contracts/",":@pancakeswap/v4-core/=lib/pancake-v4-core/",":@pancakeswap/v4-periphery/=lib/pancake-v4-periphery/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-gas-snapshot/=lib/pancake-v4-core/lib/forge-gas-snapshot/src/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":openzeppelin/=lib/openzeppelin-contracts/contracts/",":pancake-v4-core/=lib/pancake-v4-core/",":pancake-v4-periphery/=lib/pancake-v4-periphery/",":solmate/=lib/solmate/src/"]},"sources":{"lib/openzeppelin-contracts/contracts/access/Ownable.sol":{"keccak256":"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218","license":"MIT","urls":["bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32","dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]},"lib/pancake-v4-core/src/Extsload.sol":{"keccak256":"0xd2196db77d9aeaffc33b1aaa209519afbe88a82172a9450c720dd8eada876cac","license":"GPL-2.0-or-later","urls":["bzz-raw://aa2de769ee93ff464ad4c45c100cea7872062171d8af85608aae592e56619c9e","dweb:/ipfs/QmPHLzfrtSapY1d9E7CNfLyy9QHcMGFNvLuqMARW9wp8t4"]},"lib/pancake-v4-core/src/Fees.sol":{"keccak256":"0x0a625102d1fc48d66d67b8f14142f51d281c20e6c40b39cc8fe7fc2a5d6bae9d","license":"GPL-2.0-or-later","urls":["bzz-raw://2ecec150483876382f22a1b90ee1c847572e0db27a72d7e1a8a1a6b28ee2105c","dweb:/ipfs/QmS2gGZtoH8VDngCrhMgq9djztnY7FUxmXkwdUQFaobaTG"]},"lib/pancake-v4-core/src/interfaces/IERC20Minimal.sol":{"keccak256":"0xd21325930292346a3d8ccd787a3c1f2e96da5af5b8b1871f3230ef40a2dfb080","license":"MIT","urls":["bzz-raw://adc2083a73040d486be24418b86bd46380aaac7a06923d8a3b1675d6a03d0f99","dweb:/ipfs/QmVE6sj6CBdR1tus2aYQoRTKFtjGaUufZN2C9QV88birgc"]},"lib/pancake-v4-core/src/interfaces/IExtsload.sol":{"keccak256":"0x78efad54e9dd5715909ae6179716a0181e8f3cbe57412a4cbfb1dc025ff62790","license":"MIT","urls":["bzz-raw://dea81efed1a024bf6fd70f233816bfa5b7e8eb4c9bb3d18fe5a8440f88744e8f","dweb:/ipfs/QmRdMBU11DRGPSUkJcf6Zcvva5GeGge66gj3QQYrBtjcFf"]},"lib/pancake-v4-core/src/interfaces/IFees.sol":{"keccak256":"0x9fc9f19409ea458c5ea3ef86bb40e730743ba08b00838617747587a964e4da41","license":"MIT","urls":["bzz-raw://ae94177946ad92c24542db75a7973acefd4cef893ff97f58bdb04e23444a43b1","dweb:/ipfs/QmQ5MKheHeb1yHi3BGbuqnygtDQJKXDS7YisK1oQsRBCSm"]},"lib/pancake-v4-core/src/interfaces/IHooks.sol":{"keccak256":"0x1a47a0c52d038f3f231de66c7d558fc6dfc663f4b24c6e95bef922423cfdc027","license":"MIT","urls":["bzz-raw://eb2792b93a6601ba00141245e8101bd35c91df2d7e13e8cc31966ed85fde291a","dweb:/ipfs/QmTihJz4NjA1G4217v58LaBYwLo5xaMXyLGUrbaFKXRLDd"]},"lib/pancake-v4-core/src/interfaces/IPoolManager.sol":{"keccak256":"0xfd7838e6d0fea2d6b54f9630565eb33c9faa93f22855aea4e8da28daa702a753","license":"MIT","urls":["bzz-raw://6d30982bdc29e3bf25d8777197415320c073e3ff6685e5650b96578cfecd0ae8","dweb:/ipfs/QmTJS36mqJfFFsBBTDDBxgjVtCmFHwwebyuufsoxtdnjiS"]},"lib/pancake-v4-core/src/interfaces/IProtocolFeeController.sol":{"keccak256":"0xdc87cf4a93fd3012a3ebc291a2191ef6b764261b80d0923524cb941ac92d8559","license":"MIT","urls":["bzz-raw://6ab876db31ea99e214e95ca2ca0e7ed9b2cb8917fa63e02b45d613c41774fda3","dweb:/ipfs/QmWdc6LZ4acTGWoiWkhkCWJyv3uBRXd4fjrzoCoZqwmokk"]},"lib/pancake-v4-core/src/interfaces/IVault.sol":{"keccak256":"0xd014af3287d3e97a53c9fdd29a349a050605f04a4ea62280389564e1d935faf0","license":"MIT","urls":["bzz-raw://327661e6aa0491f82996abcbb21f6d2489c36893f289706f37721894ad0aceba","dweb:/ipfs/QmYBmBHV6NPY8wHpqu2SZTdZ5KVDZ8912816DhB9H1Xj5L"]},"lib/pancake-v4-core/src/interfaces/IVaultToken.sol":{"keccak256":"0xd797ac4079da85c7a567113387e28c80e7500f4d86c8135db8de95abdf5c6e99","license":"MIT","urls":["bzz-raw://3aef9e38b91d5c8dae9f6c363e29cab77b761a69ceee9fbd24403154a03b8660","dweb:/ipfs/QmeiSkKB2M5knX5JB7rUiCNoVXAmxpm5VWumeStrDjBFDB"]},"lib/pancake-v4-core/src/libraries/FeeLibrary.sol":{"keccak256":"0xd3a6182978d4907ef5722b0469b9253846bec3d1da25dd0a7a631c25e026b78c","license":"GPL-2.0-or-later","urls":["bzz-raw://fc87807b1f4c8530daa0b4f2d562a276bcd2021ecd8a43bc46093f284aba4aaa","dweb:/ipfs/Qmawd4ppbkBSTsmY4rBkTyLVsKXcmVHQRvaXAxjpmU8EcA"]},"lib/pancake-v4-core/src/libraries/Hooks.sol":{"keccak256":"0xf731ed0b831d2d3259d75ae3c86a3f9693ca361b9c4d32990bc1f5ed968f871a","license":"GPL-2.0-or-later","urls":["bzz-raw://4749531b1ebf6179cb80595ca7ea305a3176892d8c6548f70466956f2e99fb80","dweb:/ipfs/QmNjtS6tnSNTpCuurq9zysJmfGLNnnhQgMrYjGC3y6WgyG"]},"lib/pancake-v4-core/src/libraries/SafeCast.sol":{"keccak256":"0x7e7f09dd3e83f8a46295959888b10c52b3a3a470479bed7f9297d9d84c945e55","license":"GPL-2.0-or-later","urls":["bzz-raw://ed5355d2b52d395beb9f6d961c9a46ea36dc261a34b7b4b1df44881eb73594db","dweb:/ipfs/QmeGihtbD6sgbJj5CRLxkyoXQbBGgJg2YL4HDXscNTjXSk"]},"lib/pancake-v4-core/src/libraries/math/Encoded.sol":{"keccak256":"0x59b6b27b72031b703e3fe0ef2b3d8f693153d4ed9012f308d255df662508668a","license":"GPL-2.0-or-later","urls":["bzz-raw://996ee8ad722665707ccbaeac8e7f6991932fbd8377971fa1e197d347f87fefda","dweb:/ipfs/QmYbimZuo2C7DFHgSbQ5egtoJP3D5RAKLrZoX52QE6E4vS"]},"lib/pancake-v4-core/src/libraries/math/ParametersHelper.sol":{"keccak256":"0x05449282a65b9a064ecfe21668d335ab700e3f6e6aec9c0e55d04490984926c2","license":"GPL-2.0-or-later","urls":["bzz-raw://8e69804d5020015cbeb835d3e8308f9999b7bf1677d0ecf294c45cf08649e740","dweb:/ipfs/QmWcu9Ph1AoqXiWWaKUaHPUr48jCkj2hueTeCgbgXHCDNS"]},"lib/pancake-v4-core/src/pool-cl/CLPoolManager.sol":{"keccak256":"0x2363ded9bb8c16f33cac76680002c70e10bad92a7908eb8963dcd797aa057ea5","license":"GPL-2.0-or-later","urls":["bzz-raw://98002539916b106228b6bb52f8052eaa29584801f2d03c1e6aa791a156729e65","dweb:/ipfs/QmX5aGGsKU7gi1ZenAYjZ4z9Q7PmupdeKpmziaWYozHJhK"]},"lib/pancake-v4-core/src/pool-cl/interfaces/ICLDynamicFeeManager.sol":{"keccak256":"0x2fa7f6ed7b76366549089ef7fd1b980196d0e301d5f4d901cbe90c47b75e677c","license":"MIT","urls":["bzz-raw://579b089623a48a2816280878be145ed7cde6bcdef8be0b5a024fbdc2a93107f0","dweb:/ipfs/QmRMcvd6vyuLCtvGuq3SpQsTMMaBn76DgPNWLZiCZEJECw"]},"lib/pancake-v4-core/src/pool-cl/interfaces/ICLHooks.sol":{"keccak256":"0x0456843a69042b94d37fecbdbad854a56e7ada37e0b6daca0b16a55ca8d7dfea","license":"MIT","urls":["bzz-raw://67cbdc923ccab6ba5efcc80a16581be21d24ef51c22b10ed49791e7e055d3090","dweb:/ipfs/Qmamkk33T8YuL4iPejNm7ocm6zfcfsYWNES1kAACceguPR"]},"lib/pancake-v4-core/src/pool-cl/interfaces/ICLLmPool.sol":{"keccak256":"0x3570603dcf8e8ad3edd24caab4377a906fce3d39f7819f870355148813b20e0f","license":"MIT","urls":["bzz-raw://dfc6e2700fd036ffbede4d9680d1f84c8555ed48abb8368d34a5e73f5666a2cc","dweb:/ipfs/QmcZ5ED7Eabn1GdKsbpCuiBGCD6FVsFEfP6g1adTdHPMWH"]},"lib/pancake-v4-core/src/pool-cl/interfaces/ICLPoolManager.sol":{"keccak256":"0x677842da926aea5808e27e1b73478f0b2774f961d9942faccb57796ee26b95de","license":"MIT","urls":["bzz-raw://34fbd5a54761336fbc26135fa1529287f6e80e8e09c2401e67303ffd92816f80","dweb:/ipfs/QmQLb7n563h7iVwRRCJHGx2n8V7bs5P9X2wwy9RbNjJQsT"]},"lib/pancake-v4-core/src/pool-cl/libraries/BitMath.sol":{"keccak256":"0x66c454a22a5ba6cd4b59192080a52ef97cca8806497f7712310e56757603604d","license":"GPL-2.0-or-later","urls":["bzz-raw://4f5d152c3179ef8bde19ebb82604a8cbec1260d2c13a41ce715d185298c5cc61","dweb:/ipfs/QmYTZa2PXxdqcqtk5X1jvg4VunogcMF6NSjLjurNEyav1x"]},"lib/pancake-v4-core/src/pool-cl/libraries/CLPool.sol":{"keccak256":"0x8f94dc579a6ff19f2fa963d2961704a279e2615fd1aec0f34ea66bd7a138c320","license":"GPL-2.0-or-later","urls":["bzz-raw://ce6bc06313edbdbd26c08fe915107a5b676a64cc7dbed8ebd39726e75df52ad2","dweb:/ipfs/QmU7jukhNuyD7bjM85TRy68YRKuBqbCTzgTdqGLmxtjbFR"]},"lib/pancake-v4-core/src/pool-cl/libraries/CLPoolParametersHelper.sol":{"keccak256":"0x69a2862f6d3b6618ed647a729dca82cd5b3018ec7f3e74a5477381125da05f0b","license":"GPL-2.0-or-later","urls":["bzz-raw://ab0ca249d487a34f3826db9aedb36d15546e7b7f48f3adaa730051932e5a24a4","dweb:/ipfs/QmRCcczRDGrEdERysoc1vTD7r5S8NYJe79EyjHHqsGCNJF"]},"lib/pancake-v4-core/src/pool-cl/libraries/CLPosition.sol":{"keccak256":"0x8412a5ff367a6aefc50111fa17787a29ae154b9955b5d07fc0f8658cf0fca21f","license":"GPL-2.0-or-later","urls":["bzz-raw://90ce40bf2cc0a4c7dfa73ec1b5405670ec73762448a9b3628faabbf4f61d0eff","dweb:/ipfs/QmdiDVcDkeN7FkpndjD8NzQnR8QfEzNfGnQrn3vApmdjBj"]},"lib/pancake-v4-core/src/pool-cl/libraries/FixedPoint128.sol":{"keccak256":"0x55d1efee27d9e43b3d94cea311c82aed7f9b1c6adfe67b7b7bf50211c8cd8186","license":"GPL-2.0-or-later","urls":["bzz-raw://f9d383cb4e7b54482d1dc5fe6e466432901552619250eaf4f25e0b33629586db","dweb:/ipfs/QmTpwkQBQPREn6gYBPaPcCo5JMkKWw8hiMEUNnTbe6x93v"]},"lib/pancake-v4-core/src/pool-cl/libraries/FixedPoint96.sol":{"keccak256":"0xe4e810eb2dbbc159ee558743bd68e99662ab4fcfc60d9f1c787b08e3a2992a3a","license":"GPL-2.0-or-later","urls":["bzz-raw://9e2f028c2518196aaa508a3b15b071a7617c1a9bbb22ef4a1571a5231e41a7f0","dweb:/ipfs/QmUqe3ZFxVpRvGxPyNsfsNLHLXaJQdurJBC8tRL3WhcXj6"]},"lib/pancake-v4-core/src/pool-cl/libraries/FullMath.sol":{"keccak256":"0x676ac68f43b2730b9ca16ea3cc60bd45c134fa0eadaff2120b040f87b421d327","license":"GPL-2.0-or-later","urls":["bzz-raw://1f879486760513b25fa9b12ca9621e5596abb7f33f1ea4686d3d5fc93555a6d2","dweb:/ipfs/QmdCqDpjFAkSWWR7xdxWLNebTV5rcgQFeHUNPvKVPdR9XD"]},"lib/pancake-v4-core/src/pool-cl/libraries/LiquidityMath.sol":{"keccak256":"0xa53a006aebd5c51da0467fc2c055c5f3f0cbdaeac00e0f3c983410fa91efd547","license":"GPL-2.0-or-later","urls":["bzz-raw://9bb55441832e6c0f3d628cdaf980e80b043ecb9edfdb4c72df00bdc17a7465c6","dweb:/ipfs/QmdJdrz5B9FpiBbqnMmxiSJnqmEN6hgrJY4D2yUvxrkDE6"]},"lib/pancake-v4-core/src/pool-cl/libraries/SqrtPriceMath.sol":{"keccak256":"0xe9fd591f58c195d77b948c38d9e6bb7bf87eddb5bfee9a1dc65a39daaecbf739","license":"GPL-2.0-or-later","urls":["bzz-raw://f8ea7e0e743166a81966eb3428068f4db29d91fb897d22eb03bcfcfb22206891","dweb:/ipfs/QmUSHKz3X851ommRLUWzNsP6iwjLzFiMc5RzepkRAwuK33"]},"lib/pancake-v4-core/src/pool-cl/libraries/SwapMath.sol":{"keccak256":"0x628aa76cec680364848bda1a5e73852832dd05a07fc664bbeeedb33cea8512dd","license":"GPL-2.0-or-later","urls":["bzz-raw://bed9aae0ab2c42086f26be1226aefe99fe815fabf1fb4a3d60115496de87a918","dweb:/ipfs/QmVnvWWRboNnskXnQJGEMQaJqdeUvMvzm6RooyA8tnfWu5"]},"lib/pancake-v4-core/src/pool-cl/libraries/Tick.sol":{"keccak256":"0x1fab9b99ed40df2e27d161d972d0bf12ae46365e212e74d273bd09a27209b489","license":"GPL-2.0-or-later","urls":["bzz-raw://c1b9a7f944f761df0d47dd55f91e8ad085a31c0f4dc0cef6d0d59d5ceb510fee","dweb:/ipfs/QmReVJCiPd58cpvSfZpabdz6B7VqQFbZg1eEsaTjtrNyAi"]},"lib/pancake-v4-core/src/pool-cl/libraries/TickBitmap.sol":{"keccak256":"0x3b4e72929c821b73cf5c3793468ea2a387ea42c1b4ff81e8538958b81fd2f019","license":"GPL-2.0-or-later","urls":["bzz-raw://cf892533dcf4f1d6569181a201e7862e7af7c6eecb61de2dab665c426d320d9f","dweb:/ipfs/Qmemf6qCRCyZVvukLaJjY3VsJdanPAhFzAWM7L65mn2iZk"]},"lib/pancake-v4-core/src/pool-cl/libraries/TickMath.sol":{"keccak256":"0xacefefd050e2726d6fe74d0310086183bdf7e839c2fa6277d537cca0862a8d6d","license":"GPL-2.0-or-later","urls":["bzz-raw://5d8299d40ffdfa53b555b92108d780b08a7d59a77009599713075e58e6440d6b","dweb:/ipfs/QmVaijnHv5aJfxwUiLk68wycUpSxUxJvs5fyJ4KU7mk35N"]},"lib/pancake-v4-core/src/pool-cl/libraries/UnsafeMath.sol":{"keccak256":"0x9a8916d66a1f7b8ff6bc35db674210edebf54e751eb58549727809c503f3d089","license":"GPL-2.0-or-later","urls":["bzz-raw://42bf96c1c9de03c23ccd8b92160f0d2e4ef3b2ec6c51704efd1c0a6259245f1a","dweb:/ipfs/QmUZqGdfgT6bW1r5reztUvpxhiM3uXHy6uwCgbk8DZZ94H"]},"lib/pancake-v4-core/src/types/BalanceDelta.sol":{"keccak256":"0x19cc7a26b782c7f0ac92daf7df3116be271864b869208b3eb8a4139fa46df998","license":"MIT","urls":["bzz-raw://4c6f33ccba6ad98848be2ccc20909eedfb0c0feae252869d6d08d121b31fc637","dweb:/ipfs/QmZ8f7NHB13S3d5fnEDz4MrVcZpDiHoTbuzEBwoCUYWXzT"]},"lib/pancake-v4-core/src/types/Currency.sol":{"keccak256":"0x81622643b14e180e32a644f7bc885b8ba754570c25cbe3af1a95cdb03b8bdf20","license":"MIT","urls":["bzz-raw://7bdb351264422ade9596a1fe79d2ea1e78f1edc013d7fd06a31cde725545b5a0","dweb:/ipfs/QmbyyiNJSaCwVRuaA5oxjMFzm3pDtUWzf22sWSjhEEVwgg"]},"lib/pancake-v4-core/src/types/PoolId.sol":{"keccak256":"0xfca58dcea1e9d77257f5a108b748c9439389b5f7ef48e37478720228c712f533","license":"MIT","urls":["bzz-raw://ab1dea325943064519a060d7f4322b5fe1f33868e6d96d0dd8699683a80f3ab4","dweb:/ipfs/QmV7V7fLUrEZ3XZ3jKCAWKwnoak3azJ44TXqNuCnugoTTp"]},"lib/pancake-v4-core/src/types/PoolKey.sol":{"keccak256":"0xb8aa7017794cd10fb711720ae2ea4f87e871b1c113b2e285960e63f4f52fc5c6","license":"MIT","urls":["bzz-raw://f19a1975d93d1ddec92d5512979b5c4f2aa38296c3eaacf97af47dbd64804be0","dweb:/ipfs/QmSZjYFnwdTYT3W6F3T3m4exrUKUP58P15Mt8VcYFh4UQo"]}},"version":1}',
      metadata: {
        compiler: {
          version: "0.8.24+commit.e11b9ed9",
        },
        language: "Solidity",
        output: {
          abi: [
            {
              inputs: [
                {
                  internalType: "contract IVault",
                  name: "_vault",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "controllerGasLimit",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "constructor",
            },
            {
              inputs: [],
              type: "error",
              name: "CannotUpdateEmptyPosition",
            },
            {
              inputs: [],
              type: "error",
              name: "CurrenciesInitializedOutOfOrder",
            },
            {
              inputs: [],
              type: "error",
              name: "FeeNotDynamic",
            },
            {
              inputs: [],
              type: "error",
              name: "FeeTooLarge",
            },
            {
              inputs: [],
              type: "error",
              name: "HookConfigValidationError",
            },
            {
              inputs: [],
              type: "error",
              name: "InvalidHookResponse",
            },
            {
              inputs: [],
              type: "error",
              name: "InvalidPrice",
            },
            {
              inputs: [],
              type: "error",
              name: "InvalidPriceOrLiquidity",
            },
            {
              inputs: [],
              type: "error",
              name: "InvalidProtocolFeeCollector",
            },
            {
              inputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceCurrentX96",
                  type: "uint160",
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceLimitX96",
                  type: "uint160",
                },
              ],
              type: "error",
              name: "InvalidSqrtPriceLimit",
            },
            {
              inputs: [],
              type: "error",
              name: "InvalidSqrtRatio",
            },
            {
              inputs: [],
              type: "error",
              name: "InvalidTick",
            },
            {
              inputs: [],
              type: "error",
              name: "NoLiquidityToReceiveFees",
            },
            {
              inputs: [],
              type: "error",
              name: "NoOpHookMissingBeforeCall",
            },
            {
              inputs: [],
              type: "error",
              name: "NotEnoughLiquidity",
            },
            {
              inputs: [],
              type: "error",
              name: "PoolAlreadyInitialized",
            },
            {
              inputs: [],
              type: "error",
              name: "PoolManagerMismatch",
            },
            {
              inputs: [],
              type: "error",
              name: "PoolNotInitialized",
            },
            {
              inputs: [],
              type: "error",
              name: "PoolNotInitialized",
            },
            {
              inputs: [],
              type: "error",
              name: "PriceOverflow",
            },
            {
              inputs: [],
              type: "error",
              name: "ProtocolFeeCannotBeFetched",
            },
            {
              inputs: [],
              type: "error",
              name: "ProtocolFeeControllerCallFailedOrInvalidResult",
            },
            {
              inputs: [],
              type: "error",
              name: "SafeCastOverflow",
            },
            {
              inputs: [],
              type: "error",
              name: "SwapAmountCannotBeZero",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
              ],
              type: "error",
              name: "TickLiquidityOverflow",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
              ],
              type: "error",
              name: "TickLowerOutOfBounds",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickSpacing",
                  type: "int24",
                },
              ],
              type: "error",
              name: "TickMisaligned",
            },
            {
              inputs: [],
              type: "error",
              name: "TickSpacingTooLarge",
            },
            {
              inputs: [],
              type: "error",
              name: "TickSpacingTooSmall",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              type: "error",
              name: "TickUpperOutOfBounds",
            },
            {
              inputs: [
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              type: "error",
              name: "TicksMisordered",
            },
            {
              inputs: [],
              type: "error",
              name: "UnauthorizedCaller",
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                  indexed: true,
                },
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                  indexed: false,
                },
                {
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                  indexed: false,
                },
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                  indexed: false,
                },
              ],
              type: "event",
              name: "Donate",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                  indexed: true,
                },
                {
                  internalType: "uint24",
                  name: "dynamicSwapFee",
                  type: "uint24",
                  indexed: false,
                },
              ],
              type: "event",
              name: "DynamicSwapFeeUpdated",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                  indexed: true,
                },
                {
                  internalType: "Currency",
                  name: "currency0",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "Currency",
                  name: "currency1",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                  indexed: false,
                },
                {
                  internalType: "int24",
                  name: "tickSpacing",
                  type: "int24",
                  indexed: false,
                },
                {
                  internalType: "contract ICLHooks",
                  name: "hooks",
                  type: "address",
                  indexed: false,
                },
              ],
              type: "event",
              name: "Initialize",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                  indexed: true,
                },
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                  indexed: false,
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                  indexed: false,
                },
                {
                  internalType: "int256",
                  name: "liquidityDelta",
                  type: "int256",
                  indexed: false,
                },
              ],
              type: "event",
              name: "ModifyLiquidity",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                  indexed: true,
                },
              ],
              type: "event",
              name: "OwnershipTransferred",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "protocolFeeController",
                  type: "address",
                  indexed: false,
                },
              ],
              type: "event",
              name: "ProtocolFeeControllerUpdated",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                  indexed: true,
                },
                {
                  internalType: "uint16",
                  name: "protocolFee",
                  type: "uint16",
                  indexed: false,
                },
              ],
              type: "event",
              name: "ProtocolFeeUpdated",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                  indexed: true,
                },
                {
                  internalType: "address",
                  name: "lmPool",
                  type: "address",
                  indexed: false,
                },
              ],
              type: "event",
              name: "SetLmPool",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "masterChef",
                  type: "address",
                  indexed: false,
                },
              ],
              type: "event",
              name: "SetMasterChef",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                  indexed: true,
                },
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "int128",
                  name: "amount0",
                  type: "int128",
                  indexed: false,
                },
                {
                  internalType: "int128",
                  name: "amount1",
                  type: "int128",
                  indexed: false,
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                  indexed: false,
                },
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                  indexed: false,
                },
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                  indexed: false,
                },
                {
                  internalType: "uint24",
                  name: "fee",
                  type: "uint24",
                  indexed: false,
                },
                {
                  internalType: "uint256",
                  name: "protocolFee",
                  type: "uint256",
                  indexed: false,
                },
              ],
              type: "event",
              name: "Swap",
              anonymous: false,
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "MAX_TICK_SPACING",
              outputs: [
                {
                  internalType: "int24",
                  name: "",
                  type: "int24",
                },
              ],
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "MIN_PROTOCOL_FEE_DENOMINATOR",
              outputs: [
                {
                  internalType: "uint8",
                  name: "",
                  type: "uint8",
                },
              ],
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "MIN_TICK_SPACING",
              outputs: [
                {
                  internalType: "int24",
                  name: "",
                  type: "int24",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "collectProtocolFees",
              outputs: [
                {
                  internalType: "uint256",
                  name: "amountCollected",
                  type: "uint256",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "uint256",
                  name: "amount0",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "amount1",
                  type: "uint256",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "donate",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "bytes32",
                  name: "slot",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "extsload",
              outputs: [
                {
                  internalType: "bytes32",
                  name: "val",
                  type: "bytes32",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "bytes32[]",
                  name: "slots",
                  type: "bytes32[]",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "extsload",
              outputs: [
                {
                  internalType: "bytes32[]",
                  name: "",
                  type: "bytes32[]",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "_owner",
                  type: "address",
                },
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "getLiquidity",
              outputs: [
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "getLmPool",
              outputs: [
                {
                  internalType: "address",
                  name: "lmPool",
                  type: "address",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                },
                {
                  internalType: "int24",
                  name: "tickLower",
                  type: "int24",
                },
                {
                  internalType: "int24",
                  name: "tickUpper",
                  type: "int24",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "getPosition",
              outputs: [
                {
                  internalType: "struct CLPosition.Info",
                  name: "position",
                  type: "tuple",
                  components: [
                    {
                      internalType: "uint128",
                      name: "liquidity",
                      type: "uint128",
                    },
                    {
                      internalType: "uint256",
                      name: "feeGrowthInside0LastX128",
                      type: "uint256",
                    },
                    {
                      internalType: "uint256",
                      name: "feeGrowthInside1LastX128",
                      type: "uint256",
                    },
                  ],
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "getSlot0",
              outputs: [
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
                {
                  internalType: "uint16",
                  name: "protocolFee",
                  type: "uint16",
                },
                {
                  internalType: "uint24",
                  name: "swapFee",
                  type: "uint24",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "uint160",
                  name: "sqrtPriceX96",
                  type: "uint160",
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "initialize",
              outputs: [
                {
                  internalType: "int24",
                  name: "tick",
                  type: "int24",
                },
              ],
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "masterChef",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "struct ICLPoolManager.ModifyLiquidityParams",
                  name: "params",
                  type: "tuple",
                  components: [
                    {
                      internalType: "int24",
                      name: "tickLower",
                      type: "int24",
                    },
                    {
                      internalType: "int24",
                      name: "tickUpper",
                      type: "int24",
                    },
                    {
                      internalType: "int256",
                      name: "liquidityDelta",
                      type: "int256",
                    },
                  ],
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "modifyLiquidity",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "PoolId",
                  name: "id",
                  type: "bytes32",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "pools",
              outputs: [
                {
                  internalType: "struct CLPool.Slot0",
                  name: "slot0",
                  type: "tuple",
                  components: [
                    {
                      internalType: "uint160",
                      name: "sqrtPriceX96",
                      type: "uint160",
                    },
                    {
                      internalType: "int24",
                      name: "tick",
                      type: "int24",
                    },
                    {
                      internalType: "uint16",
                      name: "protocolFee",
                      type: "uint16",
                    },
                    {
                      internalType: "uint24",
                      name: "swapFee",
                      type: "uint24",
                    },
                  ],
                },
                {
                  internalType: "uint256",
                  name: "feeGrowthGlobal0X128",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "feeGrowthGlobal1X128",
                  type: "uint256",
                },
                {
                  internalType: "uint128",
                  name: "liquidity",
                  type: "uint128",
                },
                {
                  internalType: "contract ICLLmPool",
                  name: "lmPool",
                  type: "address",
                },
              ],
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "protocolFeeController",
              outputs: [
                {
                  internalType: "contract IProtocolFeeController",
                  name: "",
                  type: "address",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "protocolFeesAccrued",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
            },
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "function",
              name: "renounceOwnership",
            },
            {
              inputs: [
                {
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "address",
                  name: "lmPool",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "setLmPool",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "_masterChef",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "setMasterChef",
            },
            {
              inputs: [
                {
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "setProtocolFee",
            },
            {
              inputs: [
                {
                  internalType: "contract IProtocolFeeController",
                  name: "controller",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "setProtocolFeeController",
            },
            {
              inputs: [
                {
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "struct ICLPoolManager.SwapParams",
                  name: "params",
                  type: "tuple",
                  components: [
                    {
                      internalType: "bool",
                      name: "zeroForOne",
                      type: "bool",
                    },
                    {
                      internalType: "int256",
                      name: "amountSpecified",
                      type: "int256",
                    },
                    {
                      internalType: "uint160",
                      name: "sqrtPriceLimitX96",
                      type: "uint160",
                    },
                  ],
                },
                {
                  internalType: "bytes",
                  name: "hookData",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "swap",
              outputs: [
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "transferOwnership",
            },
            {
              inputs: [
                {
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "updateDynamicSwapFee",
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "vault",
              outputs: [
                {
                  internalType: "contract IVault",
                  name: "",
                  type: "address",
                },
              ],
            },
          ],
          devdoc: {
            kind: "dev",
            methods: {
              "extsload(bytes32)": {
                params: {
                  slot: "to read from.",
                },
                returns: {
                  val: "stored at the slot.",
                },
              },
              "extsload(bytes32[])": {
                params: {
                  slots: "to read from.",
                },
                returns: {
                  _0: "values stored at the slots.",
                },
              },
              "owner()": {
                details: "Returns the address of the current owner.",
              },
              "renounceOwnership()": {
                details:
                  "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.",
              },
              "setLmPool((address,address,address,address,uint24,bytes32),address)": {
                details:
                  "During swap, pool will call LMPool to accumulate reward or notify when current tick is crossed.      The only reason why owner call is when we no longer rely on lmPool for farming incentives or      there is an issue with the existing lmPool and we need to change it.",
              },
              "setMasterChef(address)": {
                details: "If farming is migrated to off-chain in the future, masterChef can be reverted to address(0)",
              },
              "transferOwnership(address)": {
                details:
                  "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.",
              },
              "updateDynamicSwapFee((address,address,address,address,uint24,bytes32))": {
                details:
                  "Some of the use case could be:   1) when hook#beforeSwap() is called and hook call this function to update the swap fee   2) For BinPool only, when hook#beforeMint() is called and hook call this function to update the swap fee   3) other use case where the hook might want to on an ad-hoc basis increase/reduce swap fee",
              },
            },
            version: 1,
          },
          userdoc: {
            kind: "user",
            methods: {
              "MAX_TICK_SPACING()": {
                notice: "Returns the constant representing the maximum tickSpacing for an initialized pool key",
              },
              "MIN_PROTOCOL_FEE_DENOMINATOR()": {
                notice: "Returns the minimum denominator for the protocol fee, which restricts it to a maximum of 25%",
              },
              "MIN_TICK_SPACING()": {
                notice: "Returns the constant representing the minimum tickSpacing for an initialized pool key",
              },
              "collectProtocolFees(address,address,uint256)": {
                notice:
                  "Collects the protocol fee accrued in the given currency, called by the owner or the protocol fee controller",
              },
              "donate((address,address,address,address,uint24,bytes32),uint256,uint256,bytes)": {
                notice: "Donate the given currency amounts to the pool with the given pool key",
              },
              "extsload(bytes32)": {
                notice: "Returns a value from the storage.",
              },
              "extsload(bytes32[])": {
                notice: "Returns multiple values from storage.",
              },
              "getLiquidity(bytes32)": {
                notice: "Get the current value of liquidity of the given pool",
              },
              "getLiquidity(bytes32,address,int24,int24)": {
                notice: "Get the current value of liquidity for the specified pool and position",
              },
              "getLmPool(bytes32)": {
                notice: "Return the lmPool for a poolId, address(0) if not set",
              },
              "getPosition(bytes32,address,int24,int24)": {
                notice: "Get the position struct for a specified pool and position",
              },
              "getSlot0(bytes32)": {
                notice: "Get the current value in slot0 of the given pool",
              },
              "initialize((address,address,address,address,uint24,bytes32),uint160,bytes)": {
                notice: "Initialize the state for a given pool ID",
              },
              "masterChef()": {
                notice: "Return the masterChef address set",
              },
              "modifyLiquidity((address,address,address,address,uint24,bytes32),(int24,int24,int256),bytes)": {
                notice: "Modify the position for the given pool",
              },
              "protocolFeesAccrued(address)": {
                notice: "Given a currency address, returns the protocol fees accrued in that currency",
              },
              "setLmPool((address,address,address,address,uint24,bytes32),address)": {
                notice:
                  "Set liquidity mining pool for a poolId. if a pool has farmining incentive, masterChef         will deploy and assign an LM Pool to a pool.",
              },
              "setMasterChef(address)": {
                notice: "Set masterChef address, in case when farming incentive for a pool begin.",
              },
              "setProtocolFee((address,address,address,address,uint24,bytes32))": {
                notice:
                  "Sets the protocol's swap fee for the given pool Protocol fee is always a portion of swap fee that is owed. If that underlying fee is 0, no protocol fee will accrue even if it is set to > 0.",
              },
              "setProtocolFeeController(address)": {
                notice: "Update the protocol fee controller, called by the owner",
              },
              "swap((address,address,address,address,uint24,bytes32),(bool,int256,uint160),bytes)": {
                notice: "Swap against the given pool",
              },
              "updateDynamicSwapFee((address,address,address,address,uint24,bytes32))": {
                notice: "Updates the pools swap fee for the a pool that has enabled dynamic swap fee.",
              },
            },
            version: 1,
          },
        },
        settings: {
          remappings: [
            "@openzeppelin/=lib/openzeppelin-contracts/",
            "@pancakeswap/v4-core/=lib/pancake-v4-core/",
            "@pancakeswap/v4-periphery/=lib/pancake-v4-periphery/",
            "ds-test/=lib/forge-std/lib/ds-test/src/",
            "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
            "forge-gas-snapshot/=lib/pancake-v4-core/lib/forge-gas-snapshot/src/",
            "forge-std/=lib/forge-std/src/",
            "openzeppelin-contracts/=lib/openzeppelin-contracts/",
            "openzeppelin/=lib/openzeppelin-contracts/contracts/",
            "pancake-v4-core/=lib/pancake-v4-core/",
            "pancake-v4-periphery/=lib/pancake-v4-periphery/",
            "solmate/=lib/solmate/src/",
          ],
          optimizer: {
            enabled: true,
            runs: 200,
          },
          metadata: {
            bytecodeHash: "ipfs",
          },
          compilationTarget: {
            "lib/pancake-v4-core/src/pool-cl/CLPoolManager.sol": "CLPoolManager",
          },
          evmVersion: "cancun",
          libraries: {},
        },
        sources: {
          "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
            keccak256: "0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218",
            urls: [
              "bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32",
              "dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz",
            ],
            license: "MIT",
          },
          "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
            keccak256: "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
            urls: [
              "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
              "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/Extsload.sol": {
            keccak256: "0xd2196db77d9aeaffc33b1aaa209519afbe88a82172a9450c720dd8eada876cac",
            urls: [
              "bzz-raw://aa2de769ee93ff464ad4c45c100cea7872062171d8af85608aae592e56619c9e",
              "dweb:/ipfs/QmPHLzfrtSapY1d9E7CNfLyy9QHcMGFNvLuqMARW9wp8t4",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/Fees.sol": {
            keccak256: "0x0a625102d1fc48d66d67b8f14142f51d281c20e6c40b39cc8fe7fc2a5d6bae9d",
            urls: [
              "bzz-raw://2ecec150483876382f22a1b90ee1c847572e0db27a72d7e1a8a1a6b28ee2105c",
              "dweb:/ipfs/QmS2gGZtoH8VDngCrhMgq9djztnY7FUxmXkwdUQFaobaTG",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/interfaces/IERC20Minimal.sol": {
            keccak256: "0xd21325930292346a3d8ccd787a3c1f2e96da5af5b8b1871f3230ef40a2dfb080",
            urls: [
              "bzz-raw://adc2083a73040d486be24418b86bd46380aaac7a06923d8a3b1675d6a03d0f99",
              "dweb:/ipfs/QmVE6sj6CBdR1tus2aYQoRTKFtjGaUufZN2C9QV88birgc",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IExtsload.sol": {
            keccak256: "0x78efad54e9dd5715909ae6179716a0181e8f3cbe57412a4cbfb1dc025ff62790",
            urls: [
              "bzz-raw://dea81efed1a024bf6fd70f233816bfa5b7e8eb4c9bb3d18fe5a8440f88744e8f",
              "dweb:/ipfs/QmRdMBU11DRGPSUkJcf6Zcvva5GeGge66gj3QQYrBtjcFf",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IFees.sol": {
            keccak256: "0x9fc9f19409ea458c5ea3ef86bb40e730743ba08b00838617747587a964e4da41",
            urls: [
              "bzz-raw://ae94177946ad92c24542db75a7973acefd4cef893ff97f58bdb04e23444a43b1",
              "dweb:/ipfs/QmQ5MKheHeb1yHi3BGbuqnygtDQJKXDS7YisK1oQsRBCSm",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IHooks.sol": {
            keccak256: "0x1a47a0c52d038f3f231de66c7d558fc6dfc663f4b24c6e95bef922423cfdc027",
            urls: [
              "bzz-raw://eb2792b93a6601ba00141245e8101bd35c91df2d7e13e8cc31966ed85fde291a",
              "dweb:/ipfs/QmTihJz4NjA1G4217v58LaBYwLo5xaMXyLGUrbaFKXRLDd",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IPoolManager.sol": {
            keccak256: "0xfd7838e6d0fea2d6b54f9630565eb33c9faa93f22855aea4e8da28daa702a753",
            urls: [
              "bzz-raw://6d30982bdc29e3bf25d8777197415320c073e3ff6685e5650b96578cfecd0ae8",
              "dweb:/ipfs/QmTJS36mqJfFFsBBTDDBxgjVtCmFHwwebyuufsoxtdnjiS",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IProtocolFeeController.sol": {
            keccak256: "0xdc87cf4a93fd3012a3ebc291a2191ef6b764261b80d0923524cb941ac92d8559",
            urls: [
              "bzz-raw://6ab876db31ea99e214e95ca2ca0e7ed9b2cb8917fa63e02b45d613c41774fda3",
              "dweb:/ipfs/QmWdc6LZ4acTGWoiWkhkCWJyv3uBRXd4fjrzoCoZqwmokk",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IVault.sol": {
            keccak256: "0xd014af3287d3e97a53c9fdd29a349a050605f04a4ea62280389564e1d935faf0",
            urls: [
              "bzz-raw://327661e6aa0491f82996abcbb21f6d2489c36893f289706f37721894ad0aceba",
              "dweb:/ipfs/QmYBmBHV6NPY8wHpqu2SZTdZ5KVDZ8912816DhB9H1Xj5L",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IVaultToken.sol": {
            keccak256: "0xd797ac4079da85c7a567113387e28c80e7500f4d86c8135db8de95abdf5c6e99",
            urls: [
              "bzz-raw://3aef9e38b91d5c8dae9f6c363e29cab77b761a69ceee9fbd24403154a03b8660",
              "dweb:/ipfs/QmeiSkKB2M5knX5JB7rUiCNoVXAmxpm5VWumeStrDjBFDB",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/libraries/FeeLibrary.sol": {
            keccak256: "0xd3a6182978d4907ef5722b0469b9253846bec3d1da25dd0a7a631c25e026b78c",
            urls: [
              "bzz-raw://fc87807b1f4c8530daa0b4f2d562a276bcd2021ecd8a43bc46093f284aba4aaa",
              "dweb:/ipfs/Qmawd4ppbkBSTsmY4rBkTyLVsKXcmVHQRvaXAxjpmU8EcA",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/libraries/Hooks.sol": {
            keccak256: "0xf731ed0b831d2d3259d75ae3c86a3f9693ca361b9c4d32990bc1f5ed968f871a",
            urls: [
              "bzz-raw://4749531b1ebf6179cb80595ca7ea305a3176892d8c6548f70466956f2e99fb80",
              "dweb:/ipfs/QmNjtS6tnSNTpCuurq9zysJmfGLNnnhQgMrYjGC3y6WgyG",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/libraries/SafeCast.sol": {
            keccak256: "0x7e7f09dd3e83f8a46295959888b10c52b3a3a470479bed7f9297d9d84c945e55",
            urls: [
              "bzz-raw://ed5355d2b52d395beb9f6d961c9a46ea36dc261a34b7b4b1df44881eb73594db",
              "dweb:/ipfs/QmeGihtbD6sgbJj5CRLxkyoXQbBGgJg2YL4HDXscNTjXSk",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/libraries/math/Encoded.sol": {
            keccak256: "0x59b6b27b72031b703e3fe0ef2b3d8f693153d4ed9012f308d255df662508668a",
            urls: [
              "bzz-raw://996ee8ad722665707ccbaeac8e7f6991932fbd8377971fa1e197d347f87fefda",
              "dweb:/ipfs/QmYbimZuo2C7DFHgSbQ5egtoJP3D5RAKLrZoX52QE6E4vS",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/libraries/math/ParametersHelper.sol": {
            keccak256: "0x05449282a65b9a064ecfe21668d335ab700e3f6e6aec9c0e55d04490984926c2",
            urls: [
              "bzz-raw://8e69804d5020015cbeb835d3e8308f9999b7bf1677d0ecf294c45cf08649e740",
              "dweb:/ipfs/QmWcu9Ph1AoqXiWWaKUaHPUr48jCkj2hueTeCgbgXHCDNS",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/CLPoolManager.sol": {
            keccak256: "0x2363ded9bb8c16f33cac76680002c70e10bad92a7908eb8963dcd797aa057ea5",
            urls: [
              "bzz-raw://98002539916b106228b6bb52f8052eaa29584801f2d03c1e6aa791a156729e65",
              "dweb:/ipfs/QmX5aGGsKU7gi1ZenAYjZ4z9Q7PmupdeKpmziaWYozHJhK",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/interfaces/ICLDynamicFeeManager.sol": {
            keccak256: "0x2fa7f6ed7b76366549089ef7fd1b980196d0e301d5f4d901cbe90c47b75e677c",
            urls: [
              "bzz-raw://579b089623a48a2816280878be145ed7cde6bcdef8be0b5a024fbdc2a93107f0",
              "dweb:/ipfs/QmRMcvd6vyuLCtvGuq3SpQsTMMaBn76DgPNWLZiCZEJECw",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/pool-cl/interfaces/ICLHooks.sol": {
            keccak256: "0x0456843a69042b94d37fecbdbad854a56e7ada37e0b6daca0b16a55ca8d7dfea",
            urls: [
              "bzz-raw://67cbdc923ccab6ba5efcc80a16581be21d24ef51c22b10ed49791e7e055d3090",
              "dweb:/ipfs/Qmamkk33T8YuL4iPejNm7ocm6zfcfsYWNES1kAACceguPR",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/pool-cl/interfaces/ICLLmPool.sol": {
            keccak256: "0x3570603dcf8e8ad3edd24caab4377a906fce3d39f7819f870355148813b20e0f",
            urls: [
              "bzz-raw://dfc6e2700fd036ffbede4d9680d1f84c8555ed48abb8368d34a5e73f5666a2cc",
              "dweb:/ipfs/QmcZ5ED7Eabn1GdKsbpCuiBGCD6FVsFEfP6g1adTdHPMWH",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/pool-cl/interfaces/ICLPoolManager.sol": {
            keccak256: "0x677842da926aea5808e27e1b73478f0b2774f961d9942faccb57796ee26b95de",
            urls: [
              "bzz-raw://34fbd5a54761336fbc26135fa1529287f6e80e8e09c2401e67303ffd92816f80",
              "dweb:/ipfs/QmQLb7n563h7iVwRRCJHGx2n8V7bs5P9X2wwy9RbNjJQsT",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/BitMath.sol": {
            keccak256: "0x66c454a22a5ba6cd4b59192080a52ef97cca8806497f7712310e56757603604d",
            urls: [
              "bzz-raw://4f5d152c3179ef8bde19ebb82604a8cbec1260d2c13a41ce715d185298c5cc61",
              "dweb:/ipfs/QmYTZa2PXxdqcqtk5X1jvg4VunogcMF6NSjLjurNEyav1x",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/CLPool.sol": {
            keccak256: "0x8f94dc579a6ff19f2fa963d2961704a279e2615fd1aec0f34ea66bd7a138c320",
            urls: [
              "bzz-raw://ce6bc06313edbdbd26c08fe915107a5b676a64cc7dbed8ebd39726e75df52ad2",
              "dweb:/ipfs/QmU7jukhNuyD7bjM85TRy68YRKuBqbCTzgTdqGLmxtjbFR",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/CLPoolParametersHelper.sol": {
            keccak256: "0x69a2862f6d3b6618ed647a729dca82cd5b3018ec7f3e74a5477381125da05f0b",
            urls: [
              "bzz-raw://ab0ca249d487a34f3826db9aedb36d15546e7b7f48f3adaa730051932e5a24a4",
              "dweb:/ipfs/QmRCcczRDGrEdERysoc1vTD7r5S8NYJe79EyjHHqsGCNJF",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/CLPosition.sol": {
            keccak256: "0x8412a5ff367a6aefc50111fa17787a29ae154b9955b5d07fc0f8658cf0fca21f",
            urls: [
              "bzz-raw://90ce40bf2cc0a4c7dfa73ec1b5405670ec73762448a9b3628faabbf4f61d0eff",
              "dweb:/ipfs/QmdiDVcDkeN7FkpndjD8NzQnR8QfEzNfGnQrn3vApmdjBj",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/FixedPoint128.sol": {
            keccak256: "0x55d1efee27d9e43b3d94cea311c82aed7f9b1c6adfe67b7b7bf50211c8cd8186",
            urls: [
              "bzz-raw://f9d383cb4e7b54482d1dc5fe6e466432901552619250eaf4f25e0b33629586db",
              "dweb:/ipfs/QmTpwkQBQPREn6gYBPaPcCo5JMkKWw8hiMEUNnTbe6x93v",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/FixedPoint96.sol": {
            keccak256: "0xe4e810eb2dbbc159ee558743bd68e99662ab4fcfc60d9f1c787b08e3a2992a3a",
            urls: [
              "bzz-raw://9e2f028c2518196aaa508a3b15b071a7617c1a9bbb22ef4a1571a5231e41a7f0",
              "dweb:/ipfs/QmUqe3ZFxVpRvGxPyNsfsNLHLXaJQdurJBC8tRL3WhcXj6",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/FullMath.sol": {
            keccak256: "0x676ac68f43b2730b9ca16ea3cc60bd45c134fa0eadaff2120b040f87b421d327",
            urls: [
              "bzz-raw://1f879486760513b25fa9b12ca9621e5596abb7f33f1ea4686d3d5fc93555a6d2",
              "dweb:/ipfs/QmdCqDpjFAkSWWR7xdxWLNebTV5rcgQFeHUNPvKVPdR9XD",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/LiquidityMath.sol": {
            keccak256: "0xa53a006aebd5c51da0467fc2c055c5f3f0cbdaeac00e0f3c983410fa91efd547",
            urls: [
              "bzz-raw://9bb55441832e6c0f3d628cdaf980e80b043ecb9edfdb4c72df00bdc17a7465c6",
              "dweb:/ipfs/QmdJdrz5B9FpiBbqnMmxiSJnqmEN6hgrJY4D2yUvxrkDE6",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/SqrtPriceMath.sol": {
            keccak256: "0xe9fd591f58c195d77b948c38d9e6bb7bf87eddb5bfee9a1dc65a39daaecbf739",
            urls: [
              "bzz-raw://f8ea7e0e743166a81966eb3428068f4db29d91fb897d22eb03bcfcfb22206891",
              "dweb:/ipfs/QmUSHKz3X851ommRLUWzNsP6iwjLzFiMc5RzepkRAwuK33",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/SwapMath.sol": {
            keccak256: "0x628aa76cec680364848bda1a5e73852832dd05a07fc664bbeeedb33cea8512dd",
            urls: [
              "bzz-raw://bed9aae0ab2c42086f26be1226aefe99fe815fabf1fb4a3d60115496de87a918",
              "dweb:/ipfs/QmVnvWWRboNnskXnQJGEMQaJqdeUvMvzm6RooyA8tnfWu5",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/Tick.sol": {
            keccak256: "0x1fab9b99ed40df2e27d161d972d0bf12ae46365e212e74d273bd09a27209b489",
            urls: [
              "bzz-raw://c1b9a7f944f761df0d47dd55f91e8ad085a31c0f4dc0cef6d0d59d5ceb510fee",
              "dweb:/ipfs/QmReVJCiPd58cpvSfZpabdz6B7VqQFbZg1eEsaTjtrNyAi",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/TickBitmap.sol": {
            keccak256: "0x3b4e72929c821b73cf5c3793468ea2a387ea42c1b4ff81e8538958b81fd2f019",
            urls: [
              "bzz-raw://cf892533dcf4f1d6569181a201e7862e7af7c6eecb61de2dab665c426d320d9f",
              "dweb:/ipfs/Qmemf6qCRCyZVvukLaJjY3VsJdanPAhFzAWM7L65mn2iZk",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/TickMath.sol": {
            keccak256: "0xacefefd050e2726d6fe74d0310086183bdf7e839c2fa6277d537cca0862a8d6d",
            urls: [
              "bzz-raw://5d8299d40ffdfa53b555b92108d780b08a7d59a77009599713075e58e6440d6b",
              "dweb:/ipfs/QmVaijnHv5aJfxwUiLk68wycUpSxUxJvs5fyJ4KU7mk35N",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/pool-cl/libraries/UnsafeMath.sol": {
            keccak256: "0x9a8916d66a1f7b8ff6bc35db674210edebf54e751eb58549727809c503f3d089",
            urls: [
              "bzz-raw://42bf96c1c9de03c23ccd8b92160f0d2e4ef3b2ec6c51704efd1c0a6259245f1a",
              "dweb:/ipfs/QmUZqGdfgT6bW1r5reztUvpxhiM3uXHy6uwCgbk8DZZ94H",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/types/BalanceDelta.sol": {
            keccak256: "0x19cc7a26b782c7f0ac92daf7df3116be271864b869208b3eb8a4139fa46df998",
            urls: [
              "bzz-raw://4c6f33ccba6ad98848be2ccc20909eedfb0c0feae252869d6d08d121b31fc637",
              "dweb:/ipfs/QmZ8f7NHB13S3d5fnEDz4MrVcZpDiHoTbuzEBwoCUYWXzT",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/types/Currency.sol": {
            keccak256: "0x81622643b14e180e32a644f7bc885b8ba754570c25cbe3af1a95cdb03b8bdf20",
            urls: [
              "bzz-raw://7bdb351264422ade9596a1fe79d2ea1e78f1edc013d7fd06a31cde725545b5a0",
              "dweb:/ipfs/QmbyyiNJSaCwVRuaA5oxjMFzm3pDtUWzf22sWSjhEEVwgg",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/types/PoolId.sol": {
            keccak256: "0xfca58dcea1e9d77257f5a108b748c9439389b5f7ef48e37478720228c712f533",
            urls: [
              "bzz-raw://ab1dea325943064519a060d7f4322b5fe1f33868e6d96d0dd8699683a80f3ab4",
              "dweb:/ipfs/QmV7V7fLUrEZ3XZ3jKCAWKwnoak3azJ44TXqNuCnugoTTp",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/types/PoolKey.sol": {
            keccak256: "0xb8aa7017794cd10fb711720ae2ea4f87e871b1c113b2e285960e63f4f52fc5c6",
            urls: [
              "bzz-raw://f19a1975d93d1ddec92d5512979b5c4f2aa38296c3eaacf97af47dbd64804be0",
              "dweb:/ipfs/QmSZjYFnwdTYT3W6F3T3m4exrUKUP58P15Mt8VcYFh4UQo",
            ],
            license: "MIT",
          },
        },
        version: 1,
      },
      id: 76,
    },
    Vault: {
      address: "0x114991684B1E3Ace44FAfcdA76bfeaAe5EB7DED1",
      abi: [
        {
          type: "receive",
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "accountPoolBalanceDelta",
          inputs: [
            {
              name: "key",
              type: "tuple",
              internalType: "struct PoolKey",
              components: [
                {
                  name: "currency0",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "currency1",
                  type: "address",
                  internalType: "Currency",
                },
                {
                  name: "hooks",
                  type: "address",
                  internalType: "contract IHooks",
                },
                {
                  name: "poolManager",
                  type: "address",
                  internalType: "contract IPoolManager",
                },
                {
                  name: "fee",
                  type: "uint24",
                  internalType: "uint24",
                },
                {
                  name: "parameters",
                  type: "bytes32",
                  internalType: "bytes32",
                },
              ],
            },
            {
              name: "delta",
              type: "int256",
              internalType: "BalanceDelta",
            },
            {
              name: "settler",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "allowance",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "approve",
          inputs: [
            {
              name: "spender",
              type: "address",
              internalType: "address",
            },
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "balanceOf",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "burn",
          inputs: [
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "collectFee",
          inputs: [
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
            {
              name: "recipient",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "currencyDelta",
          inputs: [
            {
              name: "settler",
              type: "address",
              internalType: "address",
            },
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
          ],
          outputs: [
            {
              name: "",
              type: "int256",
              internalType: "int256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getLocker",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "getUnsettledDeltasCount",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isOperator",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "isPoolManagerRegistered",
          inputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "lock",
          inputs: [
            {
              name: "data",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          outputs: [
            {
              name: "result",
              type: "bytes",
              internalType: "bytes",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "mint",
          inputs: [
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "owner",
          inputs: [],
          outputs: [
            {
              name: "",
              type: "address",
              internalType: "address",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "registerPoolManager",
          inputs: [
            {
              name: "poolManager",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "renounceOwnership",
          inputs: [],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "reservesOfPoolManager",
          inputs: [
            {
              name: "poolManager",
              type: "address",
              internalType: "contract IPoolManager",
            },
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
          ],
          outputs: [
            {
              name: "reserve",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "reservesOfVault",
          inputs: [
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
          ],
          outputs: [
            {
              name: "",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "setOperator",
          inputs: [
            {
              name: "operator",
              type: "address",
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              internalType: "bool",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "settle",
          inputs: [
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
          ],
          outputs: [
            {
              name: "paid",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          stateMutability: "payable",
        },
        {
          type: "function",
          name: "settleFor",
          inputs: [
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "target",
              type: "address",
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "supportsInterface",
          inputs: [
            {
              name: "interfaceId",
              type: "bytes4",
              internalType: "bytes4",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "view",
        },
        {
          type: "function",
          name: "take",
          inputs: [
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "to",
              type: "address",
              internalType: "address",
            },
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transfer",
          inputs: [
            {
              name: "receiver",
              type: "address",
              internalType: "address",
            },
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferFrom",
          inputs: [
            {
              name: "sender",
              type: "address",
              internalType: "address",
            },
            {
              name: "receiver",
              type: "address",
              internalType: "address",
            },
            {
              name: "currency",
              type: "address",
              internalType: "Currency",
            },
            {
              name: "amount",
              type: "uint256",
              internalType: "uint256",
            },
          ],
          outputs: [
            {
              name: "",
              type: "bool",
              internalType: "bool",
            },
          ],
          stateMutability: "nonpayable",
        },
        {
          type: "function",
          name: "transferOwnership",
          inputs: [
            {
              name: "newOwner",
              type: "address",
              internalType: "address",
            },
          ],
          outputs: [],
          stateMutability: "nonpayable",
        },
        {
          type: "event",
          name: "Approval",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "spender",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "currency",
              type: "address",
              indexed: true,
              internalType: "Currency",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OperatorSet",
          inputs: [
            {
              name: "owner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "operator",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "approved",
              type: "bool",
              indexed: false,
              internalType: "bool",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "OwnershipTransferred",
          inputs: [
            {
              name: "previousOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "newOwner",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "PoolManagerRegistered",
          inputs: [
            {
              name: "poolManager",
              type: "address",
              indexed: true,
              internalType: "address",
            },
          ],
          anonymous: false,
        },
        {
          type: "event",
          name: "Transfer",
          inputs: [
            {
              name: "caller",
              type: "address",
              indexed: false,
              internalType: "address",
            },
            {
              name: "from",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "to",
              type: "address",
              indexed: true,
              internalType: "address",
            },
            {
              name: "currency",
              type: "address",
              indexed: true,
              internalType: "Currency",
            },
            {
              name: "amount",
              type: "uint256",
              indexed: false,
              internalType: "uint256",
            },
          ],
          anonymous: false,
        },
        {
          type: "error",
          name: "CurrencyNotSettled",
          inputs: [],
        },
        {
          type: "error",
          name: "ERC20TransferFailed",
          inputs: [],
        },
        {
          type: "error",
          name: "LockerAlreadySet",
          inputs: [
            {
              name: "locker",
              type: "address",
              internalType: "address",
            },
          ],
        },
        {
          type: "error",
          name: "NativeTransferFailed",
          inputs: [],
        },
        {
          type: "error",
          name: "NoLocker",
          inputs: [],
        },
        {
          type: "error",
          name: "NotFromPoolManager",
          inputs: [],
        },
        {
          type: "error",
          name: "PoolManagerUnregistered",
          inputs: [],
        },
        {
          type: "error",
          name: "SafeCastOverflow",
          inputs: [],
        },
      ],
      bytecode: {
        object:
          "0x608060405234801561000f575f80fd5b506100193361001e565b61006f565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b6119318061007c5f395ff3fe60806040526004361061017e575f3560e01c80638da5cb5b116100cd578063beabacc811610087578063eb78b43511610062578063eb78b435146104bf578063f2fde38b146104de578063f7888aec146104fd578063fda4289214610533575f80fd5b8063beabacc814610462578063c6c3bbe614610481578063e1f21c67146104a0575f80fd5b80638da5cb5b14610376578063927da105146103935780639dc29fac146103cf578063a54b2831146103ee578063b6363cf21461040d578063bba4213014610443575f80fd5b806336fd6911116101385780635d4e0ced116101135780635d4e0ced146102f75780636a256b2914610323578063715018a614610336578063815483191461034a575f80fd5b806336fd6911146102745780634f412c84146102a2578063558a7297146102d8575f80fd5b806301ffc9a7146101895780630b0d9c09146101bd578063131dfb8b146101de57806315dacbea146102175780631d4631a4146102365780633014515414610255575f80fd5b3661018557005b5f80fd5b348015610194575f80fd5b506101a86101a33660046113c0565b610547565b60405190151581526020015b60405180910390f35b3480156101c8575f80fd5b506101dc6101d7366004611406565b61057d565b005b3480156101e9575f80fd5b506102096101f8366004611444565b60056020525f908152604090205481565b6040519081526020016101b4565b348015610222575f80fd5b506101a861023136600461145f565b610608565b348015610241575f80fd5b506101dc610250366004611406565b610772565b348015610260575f80fd5b506101dc61026f3660046114ea565b6107e2565b34801561027f575f80fd5b506101a861028e366004611444565b60046020525f908152604090205460ff1681565b3480156102ad575f80fd5b506102096102bc36600461159c565b600660209081525f928352604080842090915290825290205481565b3480156102e3575f80fd5b506101a86102f23660046115d3565b6108ce565b348015610302575f80fd5b5061030b61093b565b6040516001600160a01b0390911681526020016101b4565b610209610331366004611444565b610949565b348015610341575f80fd5b506101dc6109d6565b348015610355575f80fd5b50610369610364366004611603565b6109e9565b6040516101b49190611691565b348015610381575f80fd5b506003546001600160a01b031661030b565b34801561039e575f80fd5b506102096103ad3660046116c3565b600260209081525f938452604080852082529284528284209052825290205481565b3480156103da575f80fd5b506101dc6103e936600461170b565b610a8c565b3480156103f9575f80fd5b5061020961040836600461159c565b610ad8565b348015610418575f80fd5b506101a861042736600461159c565b5f60208181529281526040808220909352908152205460ff1681565b34801561044e575f80fd5b506101dc61045d366004611444565b610aea565b34801561046d575f80fd5b506101a861047c366004611406565b610b3d565b34801561048c575f80fd5b506101dc61049b366004611406565b610bf3565b3480156104ab575f80fd5b506101a86104ba366004611406565b610c3b565b3480156104ca575f80fd5b506101dc6104d9366004611735565b610ca2565b3480156104e9575f80fd5b506101dc6104f8366004611444565b610d1a565b348015610508575f80fd5b5061020961051736600461159c565b600160209081525f928352604080842090915290825290205481565b34801561053e575f80fd5b50610209610d98565b5f6301ffc9a760e01b6001600160e01b03198316148061057757506359734fc560e11b6001600160e01b03198316145b92915050565b5f610586610da1565b6001600160a01b0316036105ac57604051625185ab60e41b815260040160405180910390fd5b6105c233846105ba84610dd5565b600f0b610e02565b6001600160a01b0383165f90815260056020526040812080548392906105e990849061177d565b9091555061060390506001600160a01b0384168383610ef1565b505050565b5f336001600160a01b0386161480159061064357506001600160a01b0385165f9081526020818152604080832033845290915290205460ff16155b156106b7576001600160a01b038086165f9081526002602090815260408083203384528252808320938716835292905220545f1981146106b557610687838261177d565b6001600160a01b038088165f9081526002602090815260408083203384528252808320938916835292905220555b505b6001600160a01b038086165f908152600160209081526040808320938716835292905290812080548492906106ed90849061177d565b90915550506001600160a01b038085165f90815260016020908152604080832093871683529290529081208054849290610728908490611790565b909155505060408051338152602081018490526001600160a01b038086169287821692918916915f805160206118dc833981519152910160405180910390a4506001949350505050565b5f61077b610da1565b6001600160a01b0316036107a157604051625185ab60e41b815260040160405180910390fd5b805f036107bd576107ba6107b58385610f89565b610ffc565b90505b6107cb33846105ba84610dd5565b61060382846107d984610dd5565b6105ba906117a3565b5f6107eb610da1565b6001600160a01b03160361081157604051625185ab60e41b815260040160405180910390fd5b60608301516001600160a01b038116331461083f5760405163decf93f360e01b815260040160405180910390fd5b335f9081526004602052604090205460ff1661086e576040516359bc528960e01b815260040160405180910390fd5b5f6108798460801c90565b60608601518651919250859161089091908461101e565b6108a3866060015187602001518361101e565b6108b484875f015184600f0b610e02565b6108c684876020015183600f0b610e02565b505050505050565b335f818152602081815260408083206001600160a01b038716808552908352818420805460ff191687151590811790915591519182529293917fceb576d9f15e4e200fdb5096d64d5dfd667e16def20c1eefd14256d8e3faa267910160405180910390a350600192915050565b5f610944610da1565b905090565b5f80610953610da1565b6001600160a01b03160361097957604051625185ab60e41b815260040160405180910390fd5b6001600160a01b0382165f818152600560205260409020549061099b906110d7565b6001600160a01b0384165f9081526005602052604090208190556109c090829061177d565b91506109d033846107d985610dd5565b50919050565b6109de611158565b6109e75f6111b2565b565b60606109f433611203565b6040516355b148ff60e11b8152339063ab6291fe90610a1990869086906004016117c7565b5f604051808303815f875af1158015610a34573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610a5b91908101906117f5565b9050610a656112aa565b15610a8357604051635212cba160e01b815260040160405180910390fd5b6105775f611203565b5f610a95610da1565b6001600160a01b031603610abb57604051625185ab60e41b815260040160405180910390fd5b610ac933836107d984610dd5565b610ad43383836112d7565b5050565b5f610ae38383610f89565b9392505050565b610af2611158565b6001600160a01b0381165f81815260046020526040808220805460ff19166001179055517f6754e378954255508c56bc22c261c32e6df54b79033ed6d954fbebce59c1f8409190a250565b335f9081526001602090815260408083206001600160a01b0386168452909152812080548391908390610b7190849061177d565b90915550506001600160a01b038085165f90815260016020908152604080832093871683529290529081208054849290610bac908490611790565b90915550506040805133808252602082018590526001600160a01b0380871693908816925f805160206118dc83398151915291015b60405180910390a45060019392505050565b5f610bfc610da1565b6001600160a01b031603610c2257604051625185ab60e41b815260040160405180910390fd5b610c3033846105ba84610dd5565b610603828483611350565b335f8181526002602090815260408083206001600160a01b0388811680865291845282852090881680865290845282852087905591518681529394919390927fa0175360a15bca328baf7ea85c7b784d58b222a50d0ce760b10dba336d226a619101610be1565b335f9081526006602090815260408083206001600160a01b038716845290915281208054849290610cd490849061177d565b90915550506001600160a01b0383165f9081526005602052604081208054849290610d0090849061177d565b9091555061060390506001600160a01b0384168284610ef1565b610d22611158565b6001600160a01b038116610d8c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610d95816111b2565b50565b5f6109446112aa565b5f80610dce60017fedda7c051899c54dd66eaf5e13c031326ab4729812a579bed198ab93fd313d7161177d565b5c92915050565b5f60016001607f1b03821115610dfe576040516393dafdf160e01b815260040160405180910390fd5b5090565b805f03610e0e57505050565b5f610e3a60017f6dc13502b9ba2a9e8e42c53a1856d632b29d5aab3bcb4a2476bfec06cbd9cf2361177d565b90505f610e6860017fa88ffc6a483ae852b901fb1c3a0df606e2e4461b493434e6643ebdc3ffabd15261177d565b90505f610e758686610f89565b90505f610e82858361189d565b9050805f03610e97576001835c03835d610ea6565b815f03610ea6576001835c01835d5b604080516001600160a01b03898116602080840191909152908916828401526060808301889052835180840390910181526080909201909252805191012081815d5050505050505050565b5f6001600160a01b038416610f2d575f805f8085875af1905080610f2857604051633d2cec6f60e21b815260040160405180910390fd5b610f83565b60405163a9059cbb60e01b5f52836004528260245260205f60445f80895af13d15601f3d1160015f511416171691505f606052806040525080610f8357604051633c9fd93960e21b815260040160405180910390fd5b50505050565b5f80610fb660017f6dc13502b9ba2a9e8e42c53a1856d632b29d5aab3bcb4a2476bfec06cbd9cf2361177d565b604080516001600160a01b039687166020808301919091529590961686820152606080870192909252805180870390920182526080909501909452505081519101205c90565b5f80821215610dfe576040516393dafdf160e01b815260040160405180910390fd5b80600f0b5f0361102d57505050565b5f81600f0b12611081576001600160a01b038084165f908152600660209081526040808320938616835292905290812080546001600160801b0384169290611076908490611790565b909155506106039050565b61108a816117a3565b6001600160a01b038085165f908152600660209081526040808320938716835292905290812080546001600160801b0393909316929091906110cd90849061177d565b9091555050505050565b5f6001600160a01b0382166110ed575047919050565b6040516370a0823160e01b81523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa15801561112f573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061057791906118c4565b919050565b6003546001600160a01b031633146109e75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610d83565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b5f61120c610da1565b9050816001600160a01b0316816001600160a01b03160361122b575050565b6001600160a01b0381161580159061124b57506001600160a01b03821615155b156112745760405163c6742a3f60e01b81526001600160a01b0382166004820152602401610d83565b5f6112a060017fedda7c051899c54dd66eaf5e13c031326ab4729812a579bed198ab93fd313d7161177d565b905082815d505050565b5f80610dce60017fa88ffc6a483ae852b901fb1c3a0df606e2e4461b493434e6643ebdc3ffabd15261177d565b6001600160a01b038084165f9081526001602090815260408083209386168352929052908120805483929061130d90849061177d565b909155505060408051338152602081018390526001600160a01b03808516925f92918716915f805160206118dc83398151915291015b60405180910390a4505050565b6001600160a01b038084165f90815260016020908152604080832093861683529290529081208054839290611386908490611790565b909155505060408051338152602081018390526001600160a01b0380851692908616915f915f805160206118dc8339815191529101611343565b5f602082840312156113d0575f80fd5b81356001600160e01b031981168114610ae3575f80fd5b6001600160a01b0381168114610d95575f80fd5b8035611153816113e7565b5f805f60608486031215611418575f80fd5b8335611423816113e7565b92506020840135611433816113e7565b929592945050506040919091013590565b5f60208284031215611454575f80fd5b8135610ae3816113e7565b5f805f8060808587031215611472575f80fd5b843561147d816113e7565b9350602085013561148d816113e7565b9250604085013561149d816113e7565b9396929550929360600135925050565b634e487b7160e01b5f52604160045260245ffd5b60405160c0810167ffffffffffffffff811182821017156114e4576114e46114ad565b60405290565b5f805f8385036101008112156114fe575f80fd5b60c081121561150b575f80fd5b506115146114c1565b843561151f816113e7565b8152602085013561152f816113e7565b60208201526040850135611542816113e7565b60408201526060850135611555816113e7565b6060820152608085013562ffffff8116811461156f575f80fd5b608082015260a08581013590820152925060c0840135915061159360e085016113fb565b90509250925092565b5f80604083850312156115ad575f80fd5b82356115b8816113e7565b915060208301356115c8816113e7565b809150509250929050565b5f80604083850312156115e4575f80fd5b82356115ef816113e7565b9150602083013580151581146115c8575f80fd5b5f8060208385031215611614575f80fd5b823567ffffffffffffffff8082111561162b575f80fd5b818501915085601f83011261163e575f80fd5b81358181111561164c575f80fd5b86602082850101111561165d575f80fd5b60209290920196919550909350505050565b5f5b83811015611689578181015183820152602001611671565b50505f910152565b602081525f82518060208401526116af81604085016020870161166f565b601f01601f19169190910160400192915050565b5f805f606084860312156116d5575f80fd5b83356116e0816113e7565b925060208401356116f0816113e7565b91506040840135611700816113e7565b809150509250925092565b5f806040838503121561171c575f80fd5b8235611727816113e7565b946020939093013593505050565b5f805f60608486031215611747575f80fd5b8335611752816113e7565b9250602084013591506040840135611700816113e7565b634e487b7160e01b5f52601160045260245ffd5b8181038181111561057757610577611769565b8082018082111561057757610577611769565b5f81600f0b60016001607f1b031981036117bf576117bf611769565b5f0392915050565b60208152816020820152818360408301375f818301604090810191909152601f909201601f19160101919050565b5f60208284031215611805575f80fd5b815167ffffffffffffffff8082111561181c575f80fd5b818401915084601f83011261182f575f80fd5b815181811115611841576118416114ad565b604051601f8201601f19908116603f01168101908382118183101715611869576118696114ad565b81604052828152876020848701011115611881575f80fd5b61189283602083016020880161166f565b979650505050505050565b8082018281125f8312801582168215821617156118bc576118bc611769565b505092915050565b5f602082840312156118d4575f80fd5b505191905056fe5b21a3c624a398df3917a0a930f91e3837519b8eab3302b834746433065f2959a26469706673582212202355bd5e84c1fa3969bbdd7d19a2700d35d73dd35c09a5d7e01ddab4ef41a31664736f6c63430008180033",
        sourceMap:
          "740:6040:40:-:0;;;;;;;;;;;;-1:-1:-1;936:32:21;719:10:32;936:18:21;:32::i;:::-;740:6040:40;;2426:187:21;2518:6;;;-1:-1:-1;;;;;2534:17:21;;;-1:-1:-1;;;;;;2534:17:21;;;;;;;2566:40;;2518:6;;;2534:17;2518:6;;2566:40;;2499:16;;2566:40;2489:124;2426:187;:::o;740:6040:40:-;;;;;;;",
        linkReferences: {},
      },
      deployedBytecode: {
        object:
          "0x60806040526004361061017e575f3560e01c80638da5cb5b116100cd578063beabacc811610087578063eb78b43511610062578063eb78b435146104bf578063f2fde38b146104de578063f7888aec146104fd578063fda4289214610533575f80fd5b8063beabacc814610462578063c6c3bbe614610481578063e1f21c67146104a0575f80fd5b80638da5cb5b14610376578063927da105146103935780639dc29fac146103cf578063a54b2831146103ee578063b6363cf21461040d578063bba4213014610443575f80fd5b806336fd6911116101385780635d4e0ced116101135780635d4e0ced146102f75780636a256b2914610323578063715018a614610336578063815483191461034a575f80fd5b806336fd6911146102745780634f412c84146102a2578063558a7297146102d8575f80fd5b806301ffc9a7146101895780630b0d9c09146101bd578063131dfb8b146101de57806315dacbea146102175780631d4631a4146102365780633014515414610255575f80fd5b3661018557005b5f80fd5b348015610194575f80fd5b506101a86101a33660046113c0565b610547565b60405190151581526020015b60405180910390f35b3480156101c8575f80fd5b506101dc6101d7366004611406565b61057d565b005b3480156101e9575f80fd5b506102096101f8366004611444565b60056020525f908152604090205481565b6040519081526020016101b4565b348015610222575f80fd5b506101a861023136600461145f565b610608565b348015610241575f80fd5b506101dc610250366004611406565b610772565b348015610260575f80fd5b506101dc61026f3660046114ea565b6107e2565b34801561027f575f80fd5b506101a861028e366004611444565b60046020525f908152604090205460ff1681565b3480156102ad575f80fd5b506102096102bc36600461159c565b600660209081525f928352604080842090915290825290205481565b3480156102e3575f80fd5b506101a86102f23660046115d3565b6108ce565b348015610302575f80fd5b5061030b61093b565b6040516001600160a01b0390911681526020016101b4565b610209610331366004611444565b610949565b348015610341575f80fd5b506101dc6109d6565b348015610355575f80fd5b50610369610364366004611603565b6109e9565b6040516101b49190611691565b348015610381575f80fd5b506003546001600160a01b031661030b565b34801561039e575f80fd5b506102096103ad3660046116c3565b600260209081525f938452604080852082529284528284209052825290205481565b3480156103da575f80fd5b506101dc6103e936600461170b565b610a8c565b3480156103f9575f80fd5b5061020961040836600461159c565b610ad8565b348015610418575f80fd5b506101a861042736600461159c565b5f60208181529281526040808220909352908152205460ff1681565b34801561044e575f80fd5b506101dc61045d366004611444565b610aea565b34801561046d575f80fd5b506101a861047c366004611406565b610b3d565b34801561048c575f80fd5b506101dc61049b366004611406565b610bf3565b3480156104ab575f80fd5b506101a86104ba366004611406565b610c3b565b3480156104ca575f80fd5b506101dc6104d9366004611735565b610ca2565b3480156104e9575f80fd5b506101dc6104f8366004611444565b610d1a565b348015610508575f80fd5b5061020961051736600461159c565b600160209081525f928352604080842090915290825290205481565b34801561053e575f80fd5b50610209610d98565b5f6301ffc9a760e01b6001600160e01b03198316148061057757506359734fc560e11b6001600160e01b03198316145b92915050565b5f610586610da1565b6001600160a01b0316036105ac57604051625185ab60e41b815260040160405180910390fd5b6105c233846105ba84610dd5565b600f0b610e02565b6001600160a01b0383165f90815260056020526040812080548392906105e990849061177d565b9091555061060390506001600160a01b0384168383610ef1565b505050565b5f336001600160a01b0386161480159061064357506001600160a01b0385165f9081526020818152604080832033845290915290205460ff16155b156106b7576001600160a01b038086165f9081526002602090815260408083203384528252808320938716835292905220545f1981146106b557610687838261177d565b6001600160a01b038088165f9081526002602090815260408083203384528252808320938916835292905220555b505b6001600160a01b038086165f908152600160209081526040808320938716835292905290812080548492906106ed90849061177d565b90915550506001600160a01b038085165f90815260016020908152604080832093871683529290529081208054849290610728908490611790565b909155505060408051338152602081018490526001600160a01b038086169287821692918916915f805160206118dc833981519152910160405180910390a4506001949350505050565b5f61077b610da1565b6001600160a01b0316036107a157604051625185ab60e41b815260040160405180910390fd5b805f036107bd576107ba6107b58385610f89565b610ffc565b90505b6107cb33846105ba84610dd5565b61060382846107d984610dd5565b6105ba906117a3565b5f6107eb610da1565b6001600160a01b03160361081157604051625185ab60e41b815260040160405180910390fd5b60608301516001600160a01b038116331461083f5760405163decf93f360e01b815260040160405180910390fd5b335f9081526004602052604090205460ff1661086e576040516359bc528960e01b815260040160405180910390fd5b5f6108798460801c90565b60608601518651919250859161089091908461101e565b6108a3866060015187602001518361101e565b6108b484875f015184600f0b610e02565b6108c684876020015183600f0b610e02565b505050505050565b335f818152602081815260408083206001600160a01b038716808552908352818420805460ff191687151590811790915591519182529293917fceb576d9f15e4e200fdb5096d64d5dfd667e16def20c1eefd14256d8e3faa267910160405180910390a350600192915050565b5f610944610da1565b905090565b5f80610953610da1565b6001600160a01b03160361097957604051625185ab60e41b815260040160405180910390fd5b6001600160a01b0382165f818152600560205260409020549061099b906110d7565b6001600160a01b0384165f9081526005602052604090208190556109c090829061177d565b91506109d033846107d985610dd5565b50919050565b6109de611158565b6109e75f6111b2565b565b60606109f433611203565b6040516355b148ff60e11b8152339063ab6291fe90610a1990869086906004016117c7565b5f604051808303815f875af1158015610a34573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f19168201604052610a5b91908101906117f5565b9050610a656112aa565b15610a8357604051635212cba160e01b815260040160405180910390fd5b6105775f611203565b5f610a95610da1565b6001600160a01b031603610abb57604051625185ab60e41b815260040160405180910390fd5b610ac933836107d984610dd5565b610ad43383836112d7565b5050565b5f610ae38383610f89565b9392505050565b610af2611158565b6001600160a01b0381165f81815260046020526040808220805460ff19166001179055517f6754e378954255508c56bc22c261c32e6df54b79033ed6d954fbebce59c1f8409190a250565b335f9081526001602090815260408083206001600160a01b0386168452909152812080548391908390610b7190849061177d565b90915550506001600160a01b038085165f90815260016020908152604080832093871683529290529081208054849290610bac908490611790565b90915550506040805133808252602082018590526001600160a01b0380871693908816925f805160206118dc83398151915291015b60405180910390a45060019392505050565b5f610bfc610da1565b6001600160a01b031603610c2257604051625185ab60e41b815260040160405180910390fd5b610c3033846105ba84610dd5565b610603828483611350565b335f8181526002602090815260408083206001600160a01b0388811680865291845282852090881680865290845282852087905591518681529394919390927fa0175360a15bca328baf7ea85c7b784d58b222a50d0ce760b10dba336d226a619101610be1565b335f9081526006602090815260408083206001600160a01b038716845290915281208054849290610cd490849061177d565b90915550506001600160a01b0383165f9081526005602052604081208054849290610d0090849061177d565b9091555061060390506001600160a01b0384168284610ef1565b610d22611158565b6001600160a01b038116610d8c5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b610d95816111b2565b50565b5f6109446112aa565b5f80610dce60017fedda7c051899c54dd66eaf5e13c031326ab4729812a579bed198ab93fd313d7161177d565b5c92915050565b5f60016001607f1b03821115610dfe576040516393dafdf160e01b815260040160405180910390fd5b5090565b805f03610e0e57505050565b5f610e3a60017f6dc13502b9ba2a9e8e42c53a1856d632b29d5aab3bcb4a2476bfec06cbd9cf2361177d565b90505f610e6860017fa88ffc6a483ae852b901fb1c3a0df606e2e4461b493434e6643ebdc3ffabd15261177d565b90505f610e758686610f89565b90505f610e82858361189d565b9050805f03610e97576001835c03835d610ea6565b815f03610ea6576001835c01835d5b604080516001600160a01b03898116602080840191909152908916828401526060808301889052835180840390910181526080909201909252805191012081815d5050505050505050565b5f6001600160a01b038416610f2d575f805f8085875af1905080610f2857604051633d2cec6f60e21b815260040160405180910390fd5b610f83565b60405163a9059cbb60e01b5f52836004528260245260205f60445f80895af13d15601f3d1160015f511416171691505f606052806040525080610f8357604051633c9fd93960e21b815260040160405180910390fd5b50505050565b5f80610fb660017f6dc13502b9ba2a9e8e42c53a1856d632b29d5aab3bcb4a2476bfec06cbd9cf2361177d565b604080516001600160a01b039687166020808301919091529590961686820152606080870192909252805180870390920182526080909501909452505081519101205c90565b5f80821215610dfe576040516393dafdf160e01b815260040160405180910390fd5b80600f0b5f0361102d57505050565b5f81600f0b12611081576001600160a01b038084165f908152600660209081526040808320938616835292905290812080546001600160801b0384169290611076908490611790565b909155506106039050565b61108a816117a3565b6001600160a01b038085165f908152600660209081526040808320938716835292905290812080546001600160801b0393909316929091906110cd90849061177d565b9091555050505050565b5f6001600160a01b0382166110ed575047919050565b6040516370a0823160e01b81523060048201526001600160a01b038316906370a0823190602401602060405180830381865afa15801561112f573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061057791906118c4565b919050565b6003546001600160a01b031633146109e75760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610d83565b600380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0905f90a35050565b5f61120c610da1565b9050816001600160a01b0316816001600160a01b03160361122b575050565b6001600160a01b0381161580159061124b57506001600160a01b03821615155b156112745760405163c6742a3f60e01b81526001600160a01b0382166004820152602401610d83565b5f6112a060017fedda7c051899c54dd66eaf5e13c031326ab4729812a579bed198ab93fd313d7161177d565b905082815d505050565b5f80610dce60017fa88ffc6a483ae852b901fb1c3a0df606e2e4461b493434e6643ebdc3ffabd15261177d565b6001600160a01b038084165f9081526001602090815260408083209386168352929052908120805483929061130d90849061177d565b909155505060408051338152602081018390526001600160a01b03808516925f92918716915f805160206118dc83398151915291015b60405180910390a4505050565b6001600160a01b038084165f90815260016020908152604080832093861683529290529081208054839290611386908490611790565b909155505060408051338152602081018390526001600160a01b0380851692908616915f915f805160206118dc8339815191529101611343565b5f602082840312156113d0575f80fd5b81356001600160e01b031981168114610ae3575f80fd5b6001600160a01b0381168114610d95575f80fd5b8035611153816113e7565b5f805f60608486031215611418575f80fd5b8335611423816113e7565b92506020840135611433816113e7565b929592945050506040919091013590565b5f60208284031215611454575f80fd5b8135610ae3816113e7565b5f805f8060808587031215611472575f80fd5b843561147d816113e7565b9350602085013561148d816113e7565b9250604085013561149d816113e7565b9396929550929360600135925050565b634e487b7160e01b5f52604160045260245ffd5b60405160c0810167ffffffffffffffff811182821017156114e4576114e46114ad565b60405290565b5f805f8385036101008112156114fe575f80fd5b60c081121561150b575f80fd5b506115146114c1565b843561151f816113e7565b8152602085013561152f816113e7565b60208201526040850135611542816113e7565b60408201526060850135611555816113e7565b6060820152608085013562ffffff8116811461156f575f80fd5b608082015260a08581013590820152925060c0840135915061159360e085016113fb565b90509250925092565b5f80604083850312156115ad575f80fd5b82356115b8816113e7565b915060208301356115c8816113e7565b809150509250929050565b5f80604083850312156115e4575f80fd5b82356115ef816113e7565b9150602083013580151581146115c8575f80fd5b5f8060208385031215611614575f80fd5b823567ffffffffffffffff8082111561162b575f80fd5b818501915085601f83011261163e575f80fd5b81358181111561164c575f80fd5b86602082850101111561165d575f80fd5b60209290920196919550909350505050565b5f5b83811015611689578181015183820152602001611671565b50505f910152565b602081525f82518060208401526116af81604085016020870161166f565b601f01601f19169190910160400192915050565b5f805f606084860312156116d5575f80fd5b83356116e0816113e7565b925060208401356116f0816113e7565b91506040840135611700816113e7565b809150509250925092565b5f806040838503121561171c575f80fd5b8235611727816113e7565b946020939093013593505050565b5f805f60608486031215611747575f80fd5b8335611752816113e7565b9250602084013591506040840135611700816113e7565b634e487b7160e01b5f52601160045260245ffd5b8181038181111561057757610577611769565b8082018082111561057757610577611769565b5f81600f0b60016001607f1b031981036117bf576117bf611769565b5f0392915050565b60208152816020820152818360408301375f818301604090810191909152601f909201601f19160101919050565b5f60208284031215611805575f80fd5b815167ffffffffffffffff8082111561181c575f80fd5b818401915084601f83011261182f575f80fd5b815181811115611841576118416114ad565b604051601f8201601f19908116603f01168101908382118183101715611869576118696114ad565b81604052828152876020848701011115611881575f80fd5b61189283602083016020880161166f565b979650505050505050565b8082018281125f8312801582168215821617156118bc576118bc611769565b505092915050565b5f602082840312156118d4575f80fd5b505191905056fe5b21a3c624a398df3917a0a930f91e3837519b8eab3302b834746433065f2959a26469706673582212202355bd5e84c1fa3969bbdd7d19a2700d35d73dd35c09a5d7e01ddab4ef41a31664736f6c63430008180033",
        sourceMap:
          "740:6040:40:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3125:241:41;;;;;;;;;;-1:-1:-1;3125:241:41;;;;;:::i;:::-;;:::i;:::-;;;470:14:154;;463:22;445:41;;433:2;418:18;3125:241:41;;;;;;;;4130:258:40;;;;;;;;;;-1:-1:-1;4130:258:40;;;;;:::i;:::-;;:::i;:::-;;1026:69;;;;;;;;;;-1:-1:-1;1026:69:40;;;;;:::i;:::-;;;;;;;;;;;;;;;;;1823:25:154;;;1811:2;1796:18;1026:69:40;1677:177:154;1844:606:41;;;;;;;;;;-1:-1:-1;1844:606:41;;;;;:::i;:::-;;:::i;5095:469:40:-;;;;;;;;;;-1:-1:-1;5095:469:40;;;;;:::i;:::-;;:::i;3419:678::-;;;;;;;;;;-1:-1:-1;3419:678:40;;;;;:::i;:::-;;:::i;896:64::-;;;;;;;;;;-1:-1:-1;896:64:40;;;;;:::i;:::-;;;;;;;;;;;;;;;;1158:111;;;;;;;;;;-1:-1:-1;1158:111:40;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;2712:225:41;;;;;;;;;;-1:-1:-1;2712:225:41;;;;;:::i;:::-;;:::i;2290:113:40:-;;;;;;;;;;;;;:::i;:::-;;;-1:-1:-1;;;;;5669:32:154;;;5651:51;;5639:2;5624:18;2290:113:40;5505:203:154;4665:397:40;;;;;;:::i;:::-;;:::i;1824:101:21:-;;;;;;;;;;;;;:::i;2863:523:40:-;;;;;;;;;;-1:-1:-1;2863:523:40;;;;;:::i;:::-;;:::i;:::-;;;;;;;:::i;1201:85:21:-;;;;;;;;;;-1:-1:-1;1273:6:21;;-1:-1:-1;;;;;1273:6:21;1201:85;;1247:94:41;;;;;;;;;;-1:-1:-1;1247:94:41;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5597:210:40;;;;;;;;;;-1:-1:-1;5597:210:40;;;;;:::i;:::-;;:::i;2610:174::-;;;;;;;;;;-1:-1:-1;2610:174:40;;;;;:::i;:::-;;:::i;1097:62:41:-;;;;;;;;;;-1:-1:-1;1097:62:41;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;2069:188:40;;;;;;;;;;-1:-1:-1;2069:188:40;;;;;:::i;:::-;;:::i;1531:307:41:-;;;;;;;;;;-1:-1:-1;1531:307:41;;;;;:::i;:::-;;:::i;4421:211:40:-;;;;;;;;;;-1:-1:-1;4421:211:40;;;;;:::i;:::-;;:::i;2456:250:41:-;;;;;;;;;;-1:-1:-1;2456:250:41;;;;;:::i;:::-;;:::i;5840:259:40:-;;;;;;;;;;-1:-1:-1;5840:259:40;;;;;:::i;:::-;;:::i;2074:198:21:-;;;;;;;;;;-1:-1:-1;2074:198:21;;;;;:::i;:::-;;:::i;1166:74:41:-;;;;;;;;;;-1:-1:-1;1166:74:41;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;2436:141:40;;;;;;;;;;;;;:::i;3125:241:41:-;3201:4;-1:-1:-1;;;;;;;;;3224:25:41;;;;:100;;-1:-1:-1;;;;;;;;;;3299:25:41;;;3224:100;3217:107;3125:241;-1:-1:-1;;3125:241:41:o;4130:258:40:-;1907:1;1868:27;:25;:27::i;:::-;-1:-1:-1;;;;;1868:41:40;;1864:64;;1918:10;;-1:-1:-1;;;1918:10:40;;;;;;;;;;;1864:64;4228:69:::1;4257:10;4269:8;4279:17;:6;:15;:17::i;:::-;4228:69;;:28;:69::i;:::-;-1:-1:-1::0;;;;;4307:25:40;::::1;;::::0;;;:15:::1;:25;::::0;;;;:35;;4336:6;;4307:25;:35:::1;::::0;4336:6;;4307:35:::1;:::i;:::-;::::0;;;-1:-1:-1;4352:29:40::1;::::0;-1:-1:-1;;;;;;4352:17:40;::::1;4370:2:::0;4374:6;4352:17:::1;:29::i;:::-;4130:258:::0;;;:::o;1844:606:41:-;1983:4;2007:10;-1:-1:-1;;;;;2007:20:41;;;;;;:55;;-1:-1:-1;;;;;;2032:18:41;;:10;:18;;;;;;;;;;;2051:10;2032:30;;;;;;;;;;2031:31;2007:55;2003:249;;;-1:-1:-1;;;;;2096:17:41;;;2078:15;2096:17;;;:9;:17;;;;;;;;2114:10;2096:29;;;;;;;:39;;;;;;;;;;-1:-1:-1;;2153:28:41;;2149:92;;2225:16;2235:6;2225:7;:16;:::i;:::-;-1:-1:-1;;;;;2183:17:41;;;;;;;:9;:17;;;;;;;;2201:10;2183:29;;;;;;;:39;;;;;;;;;:58;2149:92;2064:188;2003:249;-1:-1:-1;;;;;2262:17:41;;;;;;;:9;:17;;;;;;;;:27;;;;;;;;;;;:37;;2293:6;;2262:17;:37;;2293:6;;2262:37;:::i;:::-;;;;-1:-1:-1;;;;;;;2310:19:41;;;;;;;:9;:19;;;;;;;;:29;;;;;;;;;;;:39;;2343:6;;2310:19;:39;;2343:6;;2310:39;:::i;:::-;;;;-1:-1:-1;;2365:56:41;;;2374:10;10688:51:154;;10770:2;10755:18;;10748:34;;;-1:-1:-1;;;;;2365:56:41;;;;;;;;;;;;-1:-1:-1;;;;;;;;;;;2365:56:41;10661:18:154;2365:56:41;;;;;;;-1:-1:-1;2439:4:41;1844:606;;;;;;:::o;5095:469:40:-;1907:1;1868:27;:25;:27::i;:::-;-1:-1:-1;;;;;1868:41:40;;1864:64;;1918:10;;-1:-1:-1;;;1918:10:40;;;;;;;;;;;1864:64;5316:6:::1;5326:1;5316:11:::0;5312:88:::1;;5338:62;:50;5371:6;5379:8;5338:32;:50::i;:::-;:60;:62::i;:::-;5329:71;;5312:88;5410:69;5439:10;5451:8;5461:17;:6;:15;:17::i;5410:69::-;5489:68;5518:6;5526:8;5538:17;:6;:15;:17::i;:::-;5536:20;;;:::i;3419:678::-:0;1907:1;1868:27;:25;:27::i;:::-;-1:-1:-1;;;;;1868:41:40;;1864:64;;1918:10;;-1:-1:-1;;;1918:10:40;;;;;;;;;;;1864:64;3592:15:::1;::::0;::::1;::::0;-1:-1:-1;;;;;1627:25:40;::::1;1642:10;1627:25;1623:58;;1661:20;;-1:-1:-1::0;;;1661:20:40::1;;;;;;;;;;;1623:58;1721:10;1697:35;::::0;;;:23:::1;:35;::::0;;;;;::::1;;1692:74;;1741:25;;-1:-1:-1::0;;;1741:25:40::1;;;;;;;;;;;1692:74;3624:13:::2;3640:15;:5;1336:3:95::0;1332:22;;1160:210;3640:15:40::2;3777;::::0;::::2;::::0;3794:13;;3624:31;;-1:-1:-1;3681:5:40;;3750:66:::2;::::0;3777:15;3624:31;3750:26:::2;:66::i;:::-;3826;3853:3;:15;;;3870:3;:13;;;3885:6;3826:26;:66::i;:::-;3960:60;3989:7;3998:3;:13;;;4013:6;3960:60;;:28;:60::i;:::-;4030;4059:7;4068:3;:13;;;4083:6;4030:60;;:28;:60::i;:::-;3614:483;;1938:1:::1;3419:678:::0;;;:::o;2712:225:41:-;2817:10;2790:4;2806:22;;;;;;;;;;;-1:-1:-1;;;;;2806:32:41;;;;;;;;;;;:43;;-1:-1:-1;;2806:43:41;;;;;;;;;;2865;;445:41:154;;;2790:4:41;;2817:10;2865:43;;418:18:154;2865:43:41;;;;;;;-1:-1:-1;2926:4:41;2712:225;;;;:::o;2290:113:40:-;2343:7;2369:27;:25;:27::i;:::-;2362:34;;2290:113;:::o;4665:397::-;4744:12;;1868:27;:25;:27::i;:::-;-1:-1:-1;;;;;1868:41:40;;1864:64;;1918:10;;-1:-1:-1;;;1918:10:40;;;;;;;;;;;1864:64;-1:-1:-1;;;;;4793:25:40;::::1;4768:22;4793:25:::0;;;:15:::1;:25;::::0;;;;;;4856:24:::1;::::0;:22:::1;:24::i;:::-;-1:-1:-1::0;;;;;4828:25:40;::::1;;::::0;;;:15:::1;:25;::::0;;;;:52;;;4897:42:::1;::::0;4925:14;;4897:42:::1;:::i;:::-;4890:49;;4985:70;5014:10;5026:8;5038:15;:4;:13;:15::i;4985:70::-;4758:304;4665:397:::0;;;:::o;1824:101:21:-;1094:13;:11;:13::i;:::-;1888:30:::1;1915:1;1888:18;:30::i;:::-;1824:101::o:0;2863:523:40:-;2925:19;2999:37;3025:10;2999:25;:37::i;:::-;3056:44;;-1:-1:-1;;;3056:44:40;;3070:10;;3056:38;;:44;;3095:4;;;;3056:44;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;;3056:44:40;;;;;;;;;;;;:::i;:::-;3047:53;;3222:41;:39;:41::i;:::-;:46;3218:79;;3277:20;;-1:-1:-1;;;3277:20:40;;;;;;;;;;;3218:79;3342:37;3376:1;3342:25;:37::i;5597:210::-;1907:1;1868:27;:25;:27::i;:::-;-1:-1:-1;;;;;1868:41:40;;1864:64;;1918:10;;-1:-1:-1;;;1918:10:40;;;;;;;;;;;1864:64;5683:72:::1;5712:10;5724:8;5736:17;:6;:15;:17::i;5683:72::-;5765:35;5771:10;5783:8;5793:6;5765:5;:35::i;:::-;5597:210:::0;;:::o;2610:174::-;2701:6;2726:51;2759:7;2768:8;2726:32;:51::i;:::-;2719:58;2610:174;-1:-1:-1;;;2610:174:40:o;2069:188::-;1094:13:21;:11;:13::i;:::-;-1:-1:-1;;;;;2157:36:40;::::1;;::::0;;;:23:::1;:36;::::0;;;;;:43;;-1:-1:-1;;2157:43:40::1;2196:4;2157:43;::::0;;2216:34;::::1;::::0;2157:36;2216:34:::1;2069:188:::0;:::o;1531:307:41:-;1652:10;1626:4;1642:21;;;:9;:21;;;;;;;;-1:-1:-1;;;;;1642:31:41;;;;;;;;;:41;;1677:6;;1642:31;1626:4;;1642:41;;1677:6;;1642:41;:::i;:::-;;;;-1:-1:-1;;;;;;;1694:19:41;;;;;;;:9;:19;;;;;;;;:29;;;;;;;;;;;:39;;1727:6;;1694:19;:39;;1727:6;;1694:39;:::i;:::-;;;;-1:-1:-1;;1749:60:41;;;1770:10;10688:51:154;;;10770:2;10755:18;;10748:34;;;-1:-1:-1;;;;;1749:60:41;;;;;;;;-1:-1:-1;;;;;;;;;;;1749:60:41;10661:18:154;1749:60:41;;;;;;;;-1:-1:-1;1827:4:41;1531:307;;;;;:::o;4421:211:40:-;1907:1;1868:27;:25;:27::i;:::-;-1:-1:-1;;;;;1868:41:40;;1864:64;;1918:10;;-1:-1:-1;;;1918:10:40;;;;;;;;;;;1864:64;4519:69:::1;4548:10;4560:8;4570:17;:6;:15;:17::i;4519:69::-;4598:27;4604:2;4608:8;4618:6;4598:5;:27::i;2456:250:41:-:0;2575:10;2549:4;2565:21;;;:9;:21;;;;;;;;-1:-1:-1;;;;;2565:30:41;;;;;;;;;;;;:40;;;;;;;;;;;;:49;;;2630:47;;1823:25:154;;;2549:4:41;;2565:40;;:30;;2630:47;;1796:18:154;2630:47:41;1677:177:154;5840:259:40;5968:10;5933:47;;;;:21;:47;;;;;;;;-1:-1:-1;;;;;5933:57:40;;;;;;;;;:67;;5994:6;;5933:47;:67;;5994:6;;5933:67;:::i;:::-;;;;-1:-1:-1;;;;;;;6010:25:40;;;;;;:15;:25;;;;;:35;;6039:6;;6010:25;:35;;6039:6;;6010:35;:::i;:::-;;;;-1:-1:-1;6056:36:40;;-1:-1:-1;;;;;;6056:17:40;;6074:9;6085:6;6056:17;:36::i;2074:198:21:-;1094:13;:11;:13::i;:::-;-1:-1:-1;;;;;2162:22:21;::::1;2154:73;;;::::0;-1:-1:-1;;;2154:73:21;;12507:2:154;2154:73:21::1;::::0;::::1;12489:21:154::0;12546:2;12526:18;;;12519:30;12585:34;12565:18;;;12558:62;-1:-1:-1;;;12636:18:154;;;12629:36;12682:19;;2154:73:21::1;;;;;;;;;2237:28;2256:8;2237:18;:28::i;:::-;2074:198:::0;:::o;2436:141:40:-;2503:7;2529:41;:39;:41::i;1183:166:54:-;1227:14;;477:43;519:1;485:30;477:43;:::i;:::-;1322:11;;1183:166;-1:-1:-1;;1183:166:54:o;1691:170:53:-;1743:8;-1:-1:-1;;;;;1767:29:53;;1763:60;;;1805:18;;-1:-1:-1;;;1805:18:53;;;;;;;;;;;1763:60;-1:-1:-1;1851:1:53;1691:170::o;1550:1181:54:-;1655:15;1674:1;1655:20;1651:33;;1550:1181;;;:::o;1651:33::-;1694:12;671:51;721:1;679:38;671:51;:::i;:::-;1694:29;-1:-1:-1;1733:17:54;568:63;630:1;576:50;568:63;:::i;:::-;1733:42;;1852:19;1874:35;1891:7;1900:8;1874:16;:35::i;:::-;1852:57;-1:-1:-1;1919:16:54;1938:30;1953:15;1852:57;1938:30;:::i;:::-;1919:49;;2006:9;2019:1;2006:14;2002:297;;2111:1;2099:9;2093:16;2089:24;2078:9;2071:43;2002:297;;;2156:12;2172:1;2156:17;2152:147;;2264:1;2252:9;2246:16;2242:24;2231:9;2224:43;2152:147;2615:35;;;-1:-1:-1;;;;;13221:15:154;;;2615:35:54;;;;13203:34:154;;;;13273:15;;;13253:18;;;13246:43;13305:18;;;;13298:34;;;2615:35:54;;;;;;;;;;13138:18:154;;;;2615:35:54;;;2605:46;;;;;2705:9;2605:46;2685:30;2671:54;;;;;1550:1181;;;:::o;1257:1975:96:-;1503:12;-1:-1:-1;;;;;1529:17:96;;1525:1701;;1705:1;1702;1699;1696;1688:6;1684:2;1677:5;1672:35;1661:46;;1740:7;1735:43;;1756:22;;-1:-1:-1;;;1756:22:96;;;;;;;;;;;1735:43;1525:1701;;;1946:4;1940:11;-1:-1:-1;;;2077:1:96;2070:77;2174:2;2171:1;2164:13;2234:6;2230:2;2223:18;2985:2;2982:1;2978:2;2975:1;2972;2962:8;2955:5;2950:38;2605:16;2598:24;2592:2;2574:16;2571:24;2567:1;2563;2557:8;2554:15;2550:46;2547:76;2323:687;2292:718;;3041:1;3035:4;3028:15;3107:10;3101:4;3094:24;;3178:7;3173:42;;3194:21;;-1:-1:-1;;;3194:21:96;;;;;;;;;;;3173:42;1331:1901;1257:1975;;;:::o;2737:301:54:-;2822:12;;671:51;721:1;679:38;671:51;:::i;:::-;2925:35;;;-1:-1:-1;;;;;13221:15:154;;;2925:35:54;;;;13203:34:154;;;;13273:15;;;;13253:18;;;13246:43;13305:18;;;;13298:34;;;;2925:35:54;;;;;;;;;;13138:18:154;;;;2925:35:54;;;-1:-1:-1;;2915:46:54;;;;;3004:18;;2737:301::o;1378:140:53:-;1430:9;1459:1;1455;:5;1451:36;;;1469:18;;-1:-1:-1;;;1469:18:53;;;;;;;;;;;6105:673:40;6223:5;:10;;6232:1;6223:10;6219:23;;6105:673;;;:::o;6219:23::-;6265:1;6256:5;:10;;;6252:520;;-1:-1:-1;;;;;6282:34:40;;;;;;;:21;:34;;;;;;;;:44;;;;;;;;;;;:62;;-1:-1:-1;;;;;6282:62:40;;;:34;:62;;;;;:::i;:::-;;;;-1:-1:-1;6252:520:40;;-1:-1:-1;6252:520:40;;6754:6;6755:5;6754:6;:::i;:::-;-1:-1:-1;;;;;6698:34:40;;;;;;;:21;:34;;;;;;;;:44;;;;;;;;;;;:63;;-1:-1:-1;;;;;6698:63:40;;;;;:44;;:34;:63;;;;;:::i;:::-;;;;-1:-1:-1;;6105:673:40;;;:::o;3238:271:96:-;3303:7;-1:-1:-1;;;;;3326:17:96;;3322:181;;-1:-1:-1;3368:21:96;;3238:271;-1:-1:-1;3238:271:96:o;3322:181::-;3427:65;;-1:-1:-1;;;3427:65:96;;3486:4;3427:65;;;5651:51:154;-1:-1:-1;;;;;3427:50:96;;;;;5624:18:154;;3427:65:96;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;3322:181::-;3238:271;;;:::o;1359:130:21:-;1273:6;;-1:-1:-1;;;;;1273:6:21;719:10:32;1422:23:21;1414:68;;;;-1:-1:-1;;;1414:68:21;;13734:2:154;1414:68:21;;;13716:21:154;;;13753:18;;;13746:30;13812:34;13792:18;;;13785:62;13864:18;;1414:68:21;13532:356:154;2426:187:21;2518:6;;;-1:-1:-1;;;;;2534:17:21;;;-1:-1:-1;;;;;;2534:17:21;;;;;;;2566:40;;2518:6;;;2534:17;2518:6;;2566:40;;2499:16;;2566:40;2489:124;2426:187;:::o;729:448:54:-;786:21;810:11;:9;:11::i;:::-;786:35;;936:9;-1:-1:-1;;;;;919:26:54;:13;-1:-1:-1;;;;;919:26:54;;915:39;;947:7;729:448;:::o;915:39::-;-1:-1:-1;;;;;967:27:54;;;;;;:54;;-1:-1:-1;;;;;;998:23:54;;;;967:54;963:105;;;1030:38;;-1:-1:-1;;;1030:38:54;;-1:-1:-1;;;;;5669:32:154;;1030:38:54;;;5651:51:154;5624:18;;1030:38:54;5505:203:154;963:105:54;1079:12;477:43;519:1;485:30;477:43;:::i;:::-;1079:26;;1151:9;1145:4;1138:23;1124:47;;729:448;:::o;1355:189::-;1413:13;;568:63;630:1;576:50;568:63;:::i;3783:211:41:-;-1:-1:-1;;;;;3876:17:41;;;;;;;:9;:17;;;;;;;;:27;;;;;;;;;;;:37;;3907:6;;3876:17;:37;;3907:6;;3876:37;:::i;:::-;;;;-1:-1:-1;;3929:58:41;;;3938:10;10688:51:154;;10770:2;10755:18;;10748:34;;;-1:-1:-1;;;;;3929:58:41;;;;3966:1;;3929:58;;;;-1:-1:-1;;;;;;;;;;;3929:58:41;10661:18:154;3929:58:41;;;;;;;;3783:211;;;:::o;3560:217::-;-1:-1:-1;;;;;3655:19:41;;;;;;;:9;:19;;;;;;;;:29;;;;;;;;;;;:39;;3688:6;;3655:19;:39;;3688:6;;3655:39;:::i;:::-;;;;-1:-1:-1;;3710:60:41;;;3719:10;10688:51:154;;10770:2;10755:18;;10748:34;;;-1:-1:-1;;;;;3710:60:41;;;;;;;;3739:1;;-1:-1:-1;;;;;;;;;;;3710:60:41;10661:18:154;3710:60:41;10514:274:154;14:286;72:6;125:2;113:9;104:7;100:23;96:32;93:52;;;141:1;138;131:12;93:52;167:23;;-1:-1:-1;;;;;;219:32:154;;209:43;;199:71;;266:1;263;256:12;497:153;-1:-1:-1;;;;;594:31:154;;584:42;;574:70;;640:1;637;630:12;655:178;745:20;;774:53;745:20;774:53;:::i;838:530::-;945:6;953;961;1014:2;1002:9;993:7;989:23;985:32;982:52;;;1030:1;1027;1020:12;982:52;1069:9;1056:23;1088:53;1135:5;1088:53;:::i;:::-;1160:5;-1:-1:-1;1217:2:154;1202:18;;1189:32;1230:55;1189:32;1230:55;:::i;:::-;838:530;;1304:7;;-1:-1:-1;;;1358:2:154;1343:18;;;;1330:32;;838:530::o;1373:299::-;1462:6;1515:2;1503:9;1494:7;1490:23;1486:32;1483:52;;;1531:1;1528;1521:12;1483:52;1570:9;1557:23;1589:53;1636:5;1589:53;:::i;1859:694::-;1975:6;1983;1991;1999;2052:3;2040:9;2031:7;2027:23;2023:33;2020:53;;;2069:1;2066;2059:12;2020:53;2108:9;2095:23;2127:53;2174:5;2127:53;:::i;:::-;2199:5;-1:-1:-1;2256:2:154;2241:18;;2228:32;2269:55;2228:32;2269:55;:::i;:::-;2343:7;-1:-1:-1;2402:2:154;2387:18;;2374:32;2415:55;2374:32;2415:55;:::i;:::-;1859:694;;;;-1:-1:-1;2489:7:154;;2543:2;2528:18;2515:32;;-1:-1:-1;;1859:694:154:o;2558:127::-;2619:10;2614:3;2610:20;2607:1;2600:31;2650:4;2647:1;2640:15;2674:4;2671:1;2664:15;2690:248;2757:2;2751:9;2799:4;2787:17;;2834:18;2819:34;;2855:22;;;2816:62;2813:88;;;2881:18;;:::i;:::-;2917:2;2910:22;2690:248;:::o;2943:1351::-;3080:6;3088;3096;3140:9;3131:7;3127:23;3170:3;3166:2;3162:12;3159:32;;;3187:1;3184;3177:12;3159:32;3211:4;3207:2;3203:13;3200:33;;;3229:1;3226;3219:12;3200:33;;3255:17;;:::i;:::-;3309:9;3296:23;3328:55;3375:7;3328:55;:::i;:::-;3392:22;;3466:2;3451:18;;3438:32;3479:55;3438:32;3479:55;:::i;:::-;3561:2;3550:14;;3543:31;3626:2;3611:18;;3598:32;3639:55;3598:32;3639:55;:::i;:::-;3721:2;3710:14;;3703:31;3786:2;3771:18;;3758:32;3799:55;3758:32;3799:55;:::i;:::-;3881:2;3870:14;;3863:31;3946:3;3931:19;;3918:33;3995:8;3982:22;;3970:35;;3960:63;;4019:1;4016;4009:12;3960:63;4050:3;4039:15;;4032:32;4125:3;4110:19;;;4097:33;4080:15;;;4073:58;4043:5;-1:-1:-1;4202:4:154;4187:20;;4174:34;;-1:-1:-1;4227:61:154;4283:3;4268:19;;4227:61;:::i;:::-;4217:71;;2943:1351;;;;;:::o;4573:484::-;4693:6;4701;4754:2;4742:9;4733:7;4729:23;4725:32;4722:52;;;4770:1;4767;4760:12;4722:52;4809:9;4796:23;4828:53;4875:5;4828:53;:::i;:::-;4900:5;-1:-1:-1;4957:2:154;4942:18;;4929:32;4970:55;4929:32;4970:55;:::i;:::-;5044:7;5034:17;;;4573:484;;;;;:::o;5062:438::-;5127:6;5135;5188:2;5176:9;5167:7;5163:23;5159:32;5156:52;;;5204:1;5201;5194:12;5156:52;5243:9;5230:23;5262:53;5309:5;5262:53;:::i;:::-;5334:5;-1:-1:-1;5391:2:154;5376:18;;5363:32;5433:15;;5426:23;5414:36;;5404:64;;5464:1;5461;5454:12;5713:591;5783:6;5791;5844:2;5832:9;5823:7;5819:23;5815:32;5812:52;;;5860:1;5857;5850:12;5812:52;5900:9;5887:23;5929:18;5970:2;5962:6;5959:14;5956:34;;;5986:1;5983;5976:12;5956:34;6024:6;6013:9;6009:22;5999:32;;6069:7;6062:4;6058:2;6054:13;6050:27;6040:55;;6091:1;6088;6081:12;6040:55;6131:2;6118:16;6157:2;6149:6;6146:14;6143:34;;;6173:1;6170;6163:12;6143:34;6218:7;6213:2;6204:6;6200:2;6196:15;6192:24;6189:37;6186:57;;;6239:1;6236;6229:12;6186:57;6270:2;6262:11;;;;;6292:6;;-1:-1:-1;5713:591:154;;-1:-1:-1;;;;5713:591:154:o;6309:250::-;6394:1;6404:113;6418:6;6415:1;6412:13;6404:113;;;6494:11;;;6488:18;6475:11;;;6468:39;6440:2;6433:10;6404:113;;;-1:-1:-1;;6551:1:154;6533:16;;6526:27;6309:250::o;6564:394::-;6711:2;6700:9;6693:21;6674:4;6743:6;6737:13;6786:6;6781:2;6770:9;6766:18;6759:34;6802:79;6874:6;6869:2;6858:9;6854:18;6849:2;6841:6;6837:15;6802:79;:::i;:::-;6942:2;6921:15;-1:-1:-1;;6917:29:154;6902:45;;;;6949:2;6898:54;;6564:394;-1:-1:-1;;6564:394:154:o;6963:625::-;7070:6;7078;7086;7139:2;7127:9;7118:7;7114:23;7110:32;7107:52;;;7155:1;7152;7145:12;7107:52;7194:9;7181:23;7213:53;7260:5;7213:53;:::i;:::-;7285:5;-1:-1:-1;7342:2:154;7327:18;;7314:32;7355:55;7314:32;7355:55;:::i;:::-;7429:7;-1:-1:-1;7488:2:154;7473:18;;7460:32;7501:55;7460:32;7501:55;:::i;:::-;7575:7;7565:17;;;6963:625;;;;;:::o;7593:367::-;7691:6;7699;7752:2;7740:9;7731:7;7727:23;7723:32;7720:52;;;7768:1;7765;7758:12;7720:52;7807:9;7794:23;7826:53;7873:5;7826:53;:::i;:::-;7898:5;7950:2;7935:18;;;;7922:32;;-1:-1:-1;;;7593:367:154:o;9584:530::-;9691:6;9699;9707;9760:2;9748:9;9739:7;9735:23;9731:32;9728:52;;;9776:1;9773;9766:12;9728:52;9815:9;9802:23;9834:53;9881:5;9834:53;:::i;:::-;9906:5;-1:-1:-1;9958:2:154;9943:18;;9930:32;;-1:-1:-1;10014:2:154;9999:18;;9986:32;10027:55;9986:32;10027:55;:::i;10119:127::-;10180:10;10175:3;10171:20;10168:1;10161:31;10211:4;10208:1;10201:15;10235:4;10232:1;10225:15;10251:128;10318:9;;;10339:11;;;10336:37;;;10353:18;;:::i;10384:125::-;10449:9;;;10470:10;;;10467:36;;;10483:18;;:::i;10793:213::-;10828:3;10876:5;10872:2;10861:21;-1:-1:-1;;;;;10906:39:154;10897:7;10894:52;10891:78;;10949:18;;:::i;:::-;10989:1;10985:15;;10793:213;-1:-1:-1;;10793:213:154:o;11011:388::-;11168:2;11157:9;11150:21;11207:6;11202:2;11191:9;11187:18;11180:34;11264:6;11256;11251:2;11240:9;11236:18;11223:48;11320:1;11291:22;;;11315:2;11287:31;;;11280:42;;;;11383:2;11362:15;;;-1:-1:-1;;11358:29:154;11343:45;11339:54;;11011:388;-1:-1:-1;11011:388:154:o;11404:896::-;11483:6;11536:2;11524:9;11515:7;11511:23;11507:32;11504:52;;;11552:1;11549;11542:12;11504:52;11585:9;11579:16;11614:18;11655:2;11647:6;11644:14;11641:34;;;11671:1;11668;11661:12;11641:34;11709:6;11698:9;11694:22;11684:32;;11754:7;11747:4;11743:2;11739:13;11735:27;11725:55;;11776:1;11773;11766:12;11725:55;11805:2;11799:9;11827:2;11823;11820:10;11817:36;;;11833:18;;:::i;:::-;11908:2;11902:9;11876:2;11962:13;;-1:-1:-1;;11958:22:154;;;11982:2;11954:31;11950:40;11938:53;;;12006:18;;;12026:22;;;12003:46;12000:72;;;12052:18;;:::i;:::-;12092:10;12088:2;12081:22;12127:2;12119:6;12112:18;12167:7;12162:2;12157;12153;12149:11;12145:20;12142:33;12139:53;;;12188:1;12185;12178:12;12139:53;12201:68;12266:2;12261;12253:6;12249:15;12244:2;12240;12236:11;12201:68;:::i;:::-;12288:6;11404:896;-1:-1:-1;;;;;;;11404:896:154:o;12712:216::-;12776:9;;;12804:11;;;12751:3;12834:9;;12862:10;;12858:19;;12887:10;;12879:19;;12855:44;12852:70;;;12902:18;;:::i;:::-;12852:70;;12712:216;;;;:::o;13343:184::-;13413:6;13466:2;13454:9;13445:7;13441:23;13437:32;13434:52;;;13482:1;13479;13472:12;13434:52;-1:-1:-1;13505:16:154;;13343:184;-1:-1:-1;13343:184:154:o",
        linkReferences: {},
      },
      methodIdentifiers: {
        "accountPoolBalanceDelta((address,address,address,address,uint24,bytes32),int256,address)": "30145154",
        "allowance(address,address,address)": "927da105",
        "approve(address,address,uint256)": "e1f21c67",
        "balanceOf(address,address)": "f7888aec",
        "burn(address,uint256)": "9dc29fac",
        "collectFee(address,uint256,address)": "eb78b435",
        "currencyDelta(address,address)": "a54b2831",
        "getLocker()": "5d4e0ced",
        "getUnsettledDeltasCount()": "fda42892",
        "isOperator(address,address)": "b6363cf2",
        "isPoolManagerRegistered(address)": "36fd6911",
        "lock(bytes)": "81548319",
        "mint(address,address,uint256)": "c6c3bbe6",
        "owner()": "8da5cb5b",
        "registerPoolManager(address)": "bba42130",
        "renounceOwnership()": "715018a6",
        "reservesOfPoolManager(address,address)": "4f412c84",
        "reservesOfVault(address)": "131dfb8b",
        "setOperator(address,bool)": "558a7297",
        "settle(address)": "6a256b29",
        "settleFor(address,address,uint256)": "1d4631a4",
        "supportsInterface(bytes4)": "01ffc9a7",
        "take(address,address,uint256)": "0b0d9c09",
        "transfer(address,address,uint256)": "beabacc8",
        "transferFrom(address,address,address,uint256)": "15dacbea",
        "transferOwnership(address)": "f2fde38b",
      },
      rawMetadata:
        '{"compiler":{"version":"0.8.24+commit.e11b9ed9"},"language":"Solidity","output":{"abi":[{"inputs":[],"name":"CurrencyNotSettled","type":"error"},{"inputs":[],"name":"ERC20TransferFailed","type":"error"},{"inputs":[{"internalType":"address","name":"locker","type":"address"}],"name":"LockerAlreadySet","type":"error"},{"inputs":[],"name":"NativeTransferFailed","type":"error"},{"inputs":[],"name":"NoLocker","type":"error"},{"inputs":[],"name":"NotFromPoolManager","type":"error"},{"inputs":[],"name":"PoolManagerUnregistered","type":"error"},{"inputs":[],"name":"SafeCastOverflow","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":true,"internalType":"Currency","name":"currency","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"OperatorSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"poolManager","type":"address"}],"name":"PoolManagerRegistered","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"caller","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"Currency","name":"currency","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"components":[{"internalType":"Currency","name":"currency0","type":"address"},{"internalType":"Currency","name":"currency1","type":"address"},{"internalType":"contract IHooks","name":"hooks","type":"address"},{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"uint24","name":"fee","type":"uint24"},{"internalType":"bytes32","name":"parameters","type":"bytes32"}],"internalType":"struct PoolKey","name":"key","type":"tuple"},{"internalType":"BalanceDelta","name":"delta","type":"int256"},{"internalType":"address","name":"settler","type":"address"}],"name":"accountPoolBalanceDelta","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"Currency","name":"currency","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"Currency","name":"currency","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"Currency","name":"currency","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"Currency","name":"currency","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"Currency","name":"currency","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"collectFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"settler","type":"address"},{"internalType":"Currency","name":"currency","type":"address"}],"name":"currencyDelta","outputs":[{"internalType":"int256","name":"","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLocker","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getUnsettledDeltasCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isPoolManagerRegistered","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"data","type":"bytes"}],"name":"lock","outputs":[{"internalType":"bytes","name":"result","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"Currency","name":"currency","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"poolManager","type":"address"}],"name":"registerPoolManager","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IPoolManager","name":"poolManager","type":"address"},{"internalType":"Currency","name":"currency","type":"address"}],"name":"reservesOfPoolManager","outputs":[{"internalType":"uint256","name":"reserve","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"Currency","name":"currency","type":"address"}],"name":"reservesOfVault","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"Currency","name":"currency","type":"address"}],"name":"settle","outputs":[{"internalType":"uint256","name":"paid","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"Currency","name":"currency","type":"address"},{"internalType":"address","name":"target","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"settleFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"Currency","name":"currency","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"take","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"Currency","name":"currency","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"receiver","type":"address"},{"internalType":"Currency","name":"currency","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}],"devdoc":{"errors":{"LockerAlreadySet(address)":[{"params":{"locker":"The address of the current locker"}}]},"kind":"dev","methods":{"accountPoolBalanceDelta((address,address,address,address,uint24,bytes32),int256,address)":{"params":{"delta":"The change in the pool\'s balance","key":"The key for the pool","settler":"The address whose delta will be updated"}},"collectFee(address,uint256,address)":{"details":"no restriction on caller, underflow happen if caller collect more than the reserve"},"currencyDelta(address,address)":{"params":{"currency":"The currency for which to lookup the delta"}},"lock(bytes)":{"details":"interaction must start from lock","params":{"data":"Any data to pass to the callback, via `ILockCallback(msg.sender).lockCallback(data)`"},"returns":{"result":"The data returned by the call to `ILockCallback(msg.sender).lockCallback(data)`"}},"owner()":{"details":"Returns the address of the current owner."},"renounceOwnership()":{"details":"Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner."},"settleFor(address,address,uint256)":{"params":{"amount":"The amount to settle. 0 to settle all outstanding debt","currency":"The currency to settle","target":"The address whose delta will be updated"}},"take(address,address,uint256)":{"details":"Can also be used as a mechanism for _free_ flash loans"},"transferOwnership(address)":{"details":"Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner."}},"stateVariables":{"reservesOfPoolManager":{"details":"keep track of each pool manager\'s reserves"},"reservesOfVault":{"details":"keep track of the reserves of the whole vault"}},"version":1},"userdoc":{"errors":{"CurrencyNotSettled()":[{"notice":"Thrown when a currency is not netted out after a lock"}],"ERC20TransferFailed()":[{"notice":"Thrown when an ERC20 transfer fails"}],"LockerAlreadySet(address)":[{"notice":"Thrown when there is already a locker"}],"NativeTransferFailed()":[{"notice":"Thrown when a native transfer fails"}],"NoLocker()":[{"notice":"Thrown when there is no locker"}],"NotFromPoolManager()":[{"notice":"Thrown when a function is not called by a pool manager"}],"PoolManagerUnregistered()":[{"notice":"Thrown when a pool manager is not registered"}]},"kind":"user","methods":{"accountPoolBalanceDelta((address,address,address,address,uint24,bytes32),int256,address)":{"notice":"Called by the pool manager to account for a change in the pool balance, typically after modifyLiquidity, swap, donate"},"allowance(address,address,address)":{"notice":"get the amount that user has authorized for spender to use"},"approve(address,address,uint256)":{"notice":"approve spender for using user\'s token"},"balanceOf(address,address)":{"notice":"get the amount of user\'s surplus token in vault"},"burn(address,uint256)":{"notice":"Called by the user to use surplus tokens for payment settlement"},"collectFee(address,uint256,address)":{"notice":"Called by pool manager to collect any fee related"},"currencyDelta(address,address)":{"notice":"Get the current delta for a locker in the given currency"},"getLocker()":{"notice":"Returns the locker who is locking the vault"},"getUnsettledDeltasCount()":{"notice":"Returns lock data"},"lock(bytes)":{"notice":"All operations go through this function"},"mint(address,address,uint256)":{"notice":"Called by the user to store surplus tokens in the vault"},"registerPoolManager(address)":{"notice":"enable or disable specific pool manager"},"settle(address)":{"notice":"Called by the user to pay what is owed"},"settleFor(address,address,uint256)":{"notice":"move the delta from target to the msg.sender, only payment delta can be moved"},"take(address,address,uint256)":{"notice":"Called by the user to net out some value owed to the user"}},"version":1}},"settings":{"compilationTarget":{"lib/pancake-v4-core/src/Vault.sol":"Vault"},"evmVersion":"cancun","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":true,"runs":200},"remappings":[":@openzeppelin/=lib/openzeppelin-contracts/",":@pancakeswap/v4-core/=lib/pancake-v4-core/",":@pancakeswap/v4-periphery/=lib/pancake-v4-periphery/",":ds-test/=lib/forge-std/lib/ds-test/src/",":erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",":forge-gas-snapshot/=lib/pancake-v4-core/lib/forge-gas-snapshot/src/",":forge-std/=lib/forge-std/src/",":openzeppelin-contracts/=lib/openzeppelin-contracts/",":openzeppelin/=lib/openzeppelin-contracts/contracts/",":pancake-v4-core/=lib/pancake-v4-core/",":pancake-v4-periphery/=lib/pancake-v4-periphery/",":solmate/=lib/solmate/src/"]},"sources":{"lib/openzeppelin-contracts/contracts/access/Ownable.sol":{"keccak256":"0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218","license":"MIT","urls":["bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32","dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz"]},"lib/openzeppelin-contracts/contracts/utils/Context.sol":{"keccak256":"0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7","license":"MIT","urls":["bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92","dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3"]},"lib/pancake-v4-core/src/Vault.sol":{"keccak256":"0x97bb3584ac122da57dfcf59b7cd5622c271a10e7460df393fe716134c4c9e67c","license":"GPL-2.0-or-later","urls":["bzz-raw://17133e31fa861aa02d7d52452d9d8eb59c0b2840e13737e8179d9a4459186c92","dweb:/ipfs/Qmf7PgHL3y4VvN8BizKGF4EGL6fryXrqBvEG52jArVAwtj"]},"lib/pancake-v4-core/src/VaultToken.sol":{"keccak256":"0x6ccc2a610ae7e2d6292b323ef895a27509190c80b0d2cc4cef4ebd76cb3b6c5b","license":"GPL-2.0-or-later","urls":["bzz-raw://6d988970b6dbb345e1cd3343c342fa7fc780e16fcf7825ae9741eca80e9335c9","dweb:/ipfs/QmNSb9eSAAFsmFhDNnmrHwTNKsKreZZcJDKTWupzJUfXJw"]},"lib/pancake-v4-core/src/interfaces/IERC20Minimal.sol":{"keccak256":"0xd21325930292346a3d8ccd787a3c1f2e96da5af5b8b1871f3230ef40a2dfb080","license":"MIT","urls":["bzz-raw://adc2083a73040d486be24418b86bd46380aaac7a06923d8a3b1675d6a03d0f99","dweb:/ipfs/QmVE6sj6CBdR1tus2aYQoRTKFtjGaUufZN2C9QV88birgc"]},"lib/pancake-v4-core/src/interfaces/IHooks.sol":{"keccak256":"0x1a47a0c52d038f3f231de66c7d558fc6dfc663f4b24c6e95bef922423cfdc027","license":"MIT","urls":["bzz-raw://eb2792b93a6601ba00141245e8101bd35c91df2d7e13e8cc31966ed85fde291a","dweb:/ipfs/QmTihJz4NjA1G4217v58LaBYwLo5xaMXyLGUrbaFKXRLDd"]},"lib/pancake-v4-core/src/interfaces/ILockCallback.sol":{"keccak256":"0xb65613a1af3d5cc9210cdaa71081a118b3fd729927d2344e01038959b94187ad","license":"MIT","urls":["bzz-raw://9e82a64f3628e923c38656c35d597336e209fad1c2412dbd096ca263763a2e38","dweb:/ipfs/QmXxfn9qoLmZRckicBgmpiwmbnX9BtkG4fxAFb5u3mzLPp"]},"lib/pancake-v4-core/src/interfaces/IPoolManager.sol":{"keccak256":"0xfd7838e6d0fea2d6b54f9630565eb33c9faa93f22855aea4e8da28daa702a753","license":"MIT","urls":["bzz-raw://6d30982bdc29e3bf25d8777197415320c073e3ff6685e5650b96578cfecd0ae8","dweb:/ipfs/QmTJS36mqJfFFsBBTDDBxgjVtCmFHwwebyuufsoxtdnjiS"]},"lib/pancake-v4-core/src/interfaces/IVault.sol":{"keccak256":"0xd014af3287d3e97a53c9fdd29a349a050605f04a4ea62280389564e1d935faf0","license":"MIT","urls":["bzz-raw://327661e6aa0491f82996abcbb21f6d2489c36893f289706f37721894ad0aceba","dweb:/ipfs/QmYBmBHV6NPY8wHpqu2SZTdZ5KVDZ8912816DhB9H1Xj5L"]},"lib/pancake-v4-core/src/interfaces/IVaultToken.sol":{"keccak256":"0xd797ac4079da85c7a567113387e28c80e7500f4d86c8135db8de95abdf5c6e99","license":"MIT","urls":["bzz-raw://3aef9e38b91d5c8dae9f6c363e29cab77b761a69ceee9fbd24403154a03b8660","dweb:/ipfs/QmeiSkKB2M5knX5JB7rUiCNoVXAmxpm5VWumeStrDjBFDB"]},"lib/pancake-v4-core/src/libraries/SafeCast.sol":{"keccak256":"0x7e7f09dd3e83f8a46295959888b10c52b3a3a470479bed7f9297d9d84c945e55","license":"GPL-2.0-or-later","urls":["bzz-raw://ed5355d2b52d395beb9f6d961c9a46ea36dc261a34b7b4b1df44881eb73594db","dweb:/ipfs/QmeGihtbD6sgbJj5CRLxkyoXQbBGgJg2YL4HDXscNTjXSk"]},"lib/pancake-v4-core/src/libraries/SettlementGuard.sol":{"keccak256":"0xd72cbacba4538ec9c5aa9f9e89cb522a3528e593da2c1b7194952f392ffb4532","license":"GPL-2.0-or-later","urls":["bzz-raw://2feff143424f7a2922e5aeec33abdbd4f1d5e5878062891d156af5630e2f72c3","dweb:/ipfs/QmbLR3M2ChDuGpt3zqh7vQ4V3dmQEy81HJZCF5v29GKXEQ"]},"lib/pancake-v4-core/src/types/BalanceDelta.sol":{"keccak256":"0x19cc7a26b782c7f0ac92daf7df3116be271864b869208b3eb8a4139fa46df998","license":"MIT","urls":["bzz-raw://4c6f33ccba6ad98848be2ccc20909eedfb0c0feae252869d6d08d121b31fc637","dweb:/ipfs/QmZ8f7NHB13S3d5fnEDz4MrVcZpDiHoTbuzEBwoCUYWXzT"]},"lib/pancake-v4-core/src/types/Currency.sol":{"keccak256":"0x81622643b14e180e32a644f7bc885b8ba754570c25cbe3af1a95cdb03b8bdf20","license":"MIT","urls":["bzz-raw://7bdb351264422ade9596a1fe79d2ea1e78f1edc013d7fd06a31cde725545b5a0","dweb:/ipfs/QmbyyiNJSaCwVRuaA5oxjMFzm3pDtUWzf22sWSjhEEVwgg"]},"lib/pancake-v4-core/src/types/PoolId.sol":{"keccak256":"0xfca58dcea1e9d77257f5a108b748c9439389b5f7ef48e37478720228c712f533","license":"MIT","urls":["bzz-raw://ab1dea325943064519a060d7f4322b5fe1f33868e6d96d0dd8699683a80f3ab4","dweb:/ipfs/QmV7V7fLUrEZ3XZ3jKCAWKwnoak3azJ44TXqNuCnugoTTp"]},"lib/pancake-v4-core/src/types/PoolKey.sol":{"keccak256":"0xb8aa7017794cd10fb711720ae2ea4f87e871b1c113b2e285960e63f4f52fc5c6","license":"MIT","urls":["bzz-raw://f19a1975d93d1ddec92d5512979b5c4f2aa38296c3eaacf97af47dbd64804be0","dweb:/ipfs/QmSZjYFnwdTYT3W6F3T3m4exrUKUP58P15Mt8VcYFh4UQo"]}},"version":1}',
      metadata: {
        compiler: {
          version: "0.8.24+commit.e11b9ed9",
        },
        language: "Solidity",
        output: {
          abi: [
            {
              inputs: [],
              type: "error",
              name: "CurrencyNotSettled",
            },
            {
              inputs: [],
              type: "error",
              name: "ERC20TransferFailed",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "locker",
                  type: "address",
                },
              ],
              type: "error",
              name: "LockerAlreadySet",
            },
            {
              inputs: [],
              type: "error",
              name: "NativeTransferFailed",
            },
            {
              inputs: [],
              type: "error",
              name: "NoLocker",
            },
            {
              inputs: [],
              type: "error",
              name: "NotFromPoolManager",
            },
            {
              inputs: [],
              type: "error",
              name: "PoolManagerUnregistered",
            },
            {
              inputs: [],
              type: "error",
              name: "SafeCastOverflow",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                  indexed: false,
                },
              ],
              type: "event",
              name: "Approval",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "owner",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                  indexed: false,
                },
              ],
              type: "event",
              name: "OperatorSet",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "previousOwner",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                  indexed: true,
                },
              ],
              type: "event",
              name: "OwnershipTransferred",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "poolManager",
                  type: "address",
                  indexed: true,
                },
              ],
              type: "event",
              name: "PoolManagerRegistered",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "caller",
                  type: "address",
                  indexed: false,
                },
                {
                  internalType: "address",
                  name: "from",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                  indexed: true,
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                  indexed: false,
                },
              ],
              type: "event",
              name: "Transfer",
              anonymous: false,
            },
            {
              inputs: [
                {
                  internalType: "struct PoolKey",
                  name: "key",
                  type: "tuple",
                  components: [
                    {
                      internalType: "Currency",
                      name: "currency0",
                      type: "address",
                    },
                    {
                      internalType: "Currency",
                      name: "currency1",
                      type: "address",
                    },
                    {
                      internalType: "contract IHooks",
                      name: "hooks",
                      type: "address",
                    },
                    {
                      internalType: "contract IPoolManager",
                      name: "poolManager",
                      type: "address",
                    },
                    {
                      internalType: "uint24",
                      name: "fee",
                      type: "uint24",
                    },
                    {
                      internalType: "bytes32",
                      name: "parameters",
                      type: "bytes32",
                    },
                  ],
                },
                {
                  internalType: "BalanceDelta",
                  name: "delta",
                  type: "int256",
                },
                {
                  internalType: "address",
                  name: "settler",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "accountPoolBalanceDelta",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "allowance",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "spender",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "approve",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "balanceOf",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "burn",
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "recipient",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "collectFee",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "settler",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "currencyDelta",
              outputs: [
                {
                  internalType: "int256",
                  name: "",
                  type: "int256",
                },
              ],
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "getLocker",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "getUnsettledDeltasCount",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "isOperator",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "isPoolManagerRegistered",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "bytes",
                  name: "data",
                  type: "bytes",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "lock",
              outputs: [
                {
                  internalType: "bytes",
                  name: "result",
                  type: "bytes",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "mint",
            },
            {
              inputs: [],
              stateMutability: "view",
              type: "function",
              name: "owner",
              outputs: [
                {
                  internalType: "address",
                  name: "",
                  type: "address",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "poolManager",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "registerPoolManager",
            },
            {
              inputs: [],
              stateMutability: "nonpayable",
              type: "function",
              name: "renounceOwnership",
            },
            {
              inputs: [
                {
                  internalType: "contract IPoolManager",
                  name: "poolManager",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "reservesOfPoolManager",
              outputs: [
                {
                  internalType: "uint256",
                  name: "reserve",
                  type: "uint256",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "reservesOfVault",
              outputs: [
                {
                  internalType: "uint256",
                  name: "",
                  type: "uint256",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "operator",
                  type: "address",
                },
                {
                  internalType: "bool",
                  name: "approved",
                  type: "bool",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "setOperator",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
              ],
              stateMutability: "payable",
              type: "function",
              name: "settle",
              outputs: [
                {
                  internalType: "uint256",
                  name: "paid",
                  type: "uint256",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "target",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "settleFor",
            },
            {
              inputs: [
                {
                  internalType: "bytes4",
                  name: "interfaceId",
                  type: "bytes4",
                },
              ],
              stateMutability: "view",
              type: "function",
              name: "supportsInterface",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "to",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "take",
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "transfer",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "sender",
                  type: "address",
                },
                {
                  internalType: "address",
                  name: "receiver",
                  type: "address",
                },
                {
                  internalType: "Currency",
                  name: "currency",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "amount",
                  type: "uint256",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "transferFrom",
              outputs: [
                {
                  internalType: "bool",
                  name: "",
                  type: "bool",
                },
              ],
            },
            {
              inputs: [
                {
                  internalType: "address",
                  name: "newOwner",
                  type: "address",
                },
              ],
              stateMutability: "nonpayable",
              type: "function",
              name: "transferOwnership",
            },
            {
              inputs: [],
              stateMutability: "payable",
              type: "receive",
            },
          ],
          devdoc: {
            kind: "dev",
            methods: {
              "accountPoolBalanceDelta((address,address,address,address,uint24,bytes32),int256,address)": {
                params: {
                  delta: "The change in the pool's balance",
                  key: "The key for the pool",
                  settler: "The address whose delta will be updated",
                },
              },
              "collectFee(address,uint256,address)": {
                details: "no restriction on caller, underflow happen if caller collect more than the reserve",
              },
              "currencyDelta(address,address)": {
                params: {
                  currency: "The currency for which to lookup the delta",
                },
              },
              "lock(bytes)": {
                details: "interaction must start from lock",
                params: {
                  data: "Any data to pass to the callback, via `ILockCallback(msg.sender).lockCallback(data)`",
                },
                returns: {
                  result: "The data returned by the call to `ILockCallback(msg.sender).lockCallback(data)`",
                },
              },
              "owner()": {
                details: "Returns the address of the current owner.",
              },
              "renounceOwnership()": {
                details:
                  "Leaves the contract without owner. It will not be possible to call `onlyOwner` functions. Can only be called by the current owner. NOTE: Renouncing ownership will leave the contract without an owner, thereby disabling any functionality that is only available to the owner.",
              },
              "settleFor(address,address,uint256)": {
                params: {
                  amount: "The amount to settle. 0 to settle all outstanding debt",
                  currency: "The currency to settle",
                  target: "The address whose delta will be updated",
                },
              },
              "take(address,address,uint256)": {
                details: "Can also be used as a mechanism for _free_ flash loans",
              },
              "transferOwnership(address)": {
                details:
                  "Transfers ownership of the contract to a new account (`newOwner`). Can only be called by the current owner.",
              },
            },
            version: 1,
          },
          userdoc: {
            kind: "user",
            methods: {
              "accountPoolBalanceDelta((address,address,address,address,uint24,bytes32),int256,address)": {
                notice:
                  "Called by the pool manager to account for a change in the pool balance, typically after modifyLiquidity, swap, donate",
              },
              "allowance(address,address,address)": {
                notice: "get the amount that user has authorized for spender to use",
              },
              "approve(address,address,uint256)": {
                notice: "approve spender for using user's token",
              },
              "balanceOf(address,address)": {
                notice: "get the amount of user's surplus token in vault",
              },
              "burn(address,uint256)": {
                notice: "Called by the user to use surplus tokens for payment settlement",
              },
              "collectFee(address,uint256,address)": {
                notice: "Called by pool manager to collect any fee related",
              },
              "currencyDelta(address,address)": {
                notice: "Get the current delta for a locker in the given currency",
              },
              "getLocker()": {
                notice: "Returns the locker who is locking the vault",
              },
              "getUnsettledDeltasCount()": {
                notice: "Returns lock data",
              },
              "lock(bytes)": {
                notice: "All operations go through this function",
              },
              "mint(address,address,uint256)": {
                notice: "Called by the user to store surplus tokens in the vault",
              },
              "registerPoolManager(address)": {
                notice: "enable or disable specific pool manager",
              },
              "settle(address)": {
                notice: "Called by the user to pay what is owed",
              },
              "settleFor(address,address,uint256)": {
                notice: "move the delta from target to the msg.sender, only payment delta can be moved",
              },
              "take(address,address,uint256)": {
                notice: "Called by the user to net out some value owed to the user",
              },
            },
            version: 1,
          },
        },
        settings: {
          remappings: [
            "@openzeppelin/=lib/openzeppelin-contracts/",
            "@pancakeswap/v4-core/=lib/pancake-v4-core/",
            "@pancakeswap/v4-periphery/=lib/pancake-v4-periphery/",
            "ds-test/=lib/forge-std/lib/ds-test/src/",
            "erc4626-tests/=lib/openzeppelin-contracts/lib/erc4626-tests/",
            "forge-gas-snapshot/=lib/pancake-v4-core/lib/forge-gas-snapshot/src/",
            "forge-std/=lib/forge-std/src/",
            "openzeppelin-contracts/=lib/openzeppelin-contracts/",
            "openzeppelin/=lib/openzeppelin-contracts/contracts/",
            "pancake-v4-core/=lib/pancake-v4-core/",
            "pancake-v4-periphery/=lib/pancake-v4-periphery/",
            "solmate/=lib/solmate/src/",
          ],
          optimizer: {
            enabled: true,
            runs: 200,
          },
          metadata: {
            bytecodeHash: "ipfs",
          },
          compilationTarget: {
            "lib/pancake-v4-core/src/Vault.sol": "Vault",
          },
          evmVersion: "cancun",
          libraries: {},
        },
        sources: {
          "lib/openzeppelin-contracts/contracts/access/Ownable.sol": {
            keccak256: "0xba43b97fba0d32eb4254f6a5a297b39a19a247082a02d6e69349e071e2946218",
            urls: [
              "bzz-raw://fc980984badf3984b6303b377711220e067722bbd6a135b24669ff5069ef9f32",
              "dweb:/ipfs/QmPHXMSXj99XjSVM21YsY6aNtLLjLVXDbyN76J5HQYvvrz",
            ],
            license: "MIT",
          },
          "lib/openzeppelin-contracts/contracts/utils/Context.sol": {
            keccak256: "0xe2e337e6dde9ef6b680e07338c493ebea1b5fd09b43424112868e9cc1706bca7",
            urls: [
              "bzz-raw://6df0ddf21ce9f58271bdfaa85cde98b200ef242a05a3f85c2bc10a8294800a92",
              "dweb:/ipfs/QmRK2Y5Yc6BK7tGKkgsgn3aJEQGi5aakeSPZvS65PV8Xp3",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/Vault.sol": {
            keccak256: "0x97bb3584ac122da57dfcf59b7cd5622c271a10e7460df393fe716134c4c9e67c",
            urls: [
              "bzz-raw://17133e31fa861aa02d7d52452d9d8eb59c0b2840e13737e8179d9a4459186c92",
              "dweb:/ipfs/Qmf7PgHL3y4VvN8BizKGF4EGL6fryXrqBvEG52jArVAwtj",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/VaultToken.sol": {
            keccak256: "0x6ccc2a610ae7e2d6292b323ef895a27509190c80b0d2cc4cef4ebd76cb3b6c5b",
            urls: [
              "bzz-raw://6d988970b6dbb345e1cd3343c342fa7fc780e16fcf7825ae9741eca80e9335c9",
              "dweb:/ipfs/QmNSb9eSAAFsmFhDNnmrHwTNKsKreZZcJDKTWupzJUfXJw",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/interfaces/IERC20Minimal.sol": {
            keccak256: "0xd21325930292346a3d8ccd787a3c1f2e96da5af5b8b1871f3230ef40a2dfb080",
            urls: [
              "bzz-raw://adc2083a73040d486be24418b86bd46380aaac7a06923d8a3b1675d6a03d0f99",
              "dweb:/ipfs/QmVE6sj6CBdR1tus2aYQoRTKFtjGaUufZN2C9QV88birgc",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IHooks.sol": {
            keccak256: "0x1a47a0c52d038f3f231de66c7d558fc6dfc663f4b24c6e95bef922423cfdc027",
            urls: [
              "bzz-raw://eb2792b93a6601ba00141245e8101bd35c91df2d7e13e8cc31966ed85fde291a",
              "dweb:/ipfs/QmTihJz4NjA1G4217v58LaBYwLo5xaMXyLGUrbaFKXRLDd",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/ILockCallback.sol": {
            keccak256: "0xb65613a1af3d5cc9210cdaa71081a118b3fd729927d2344e01038959b94187ad",
            urls: [
              "bzz-raw://9e82a64f3628e923c38656c35d597336e209fad1c2412dbd096ca263763a2e38",
              "dweb:/ipfs/QmXxfn9qoLmZRckicBgmpiwmbnX9BtkG4fxAFb5u3mzLPp",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IPoolManager.sol": {
            keccak256: "0xfd7838e6d0fea2d6b54f9630565eb33c9faa93f22855aea4e8da28daa702a753",
            urls: [
              "bzz-raw://6d30982bdc29e3bf25d8777197415320c073e3ff6685e5650b96578cfecd0ae8",
              "dweb:/ipfs/QmTJS36mqJfFFsBBTDDBxgjVtCmFHwwebyuufsoxtdnjiS",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IVault.sol": {
            keccak256: "0xd014af3287d3e97a53c9fdd29a349a050605f04a4ea62280389564e1d935faf0",
            urls: [
              "bzz-raw://327661e6aa0491f82996abcbb21f6d2489c36893f289706f37721894ad0aceba",
              "dweb:/ipfs/QmYBmBHV6NPY8wHpqu2SZTdZ5KVDZ8912816DhB9H1Xj5L",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/interfaces/IVaultToken.sol": {
            keccak256: "0xd797ac4079da85c7a567113387e28c80e7500f4d86c8135db8de95abdf5c6e99",
            urls: [
              "bzz-raw://3aef9e38b91d5c8dae9f6c363e29cab77b761a69ceee9fbd24403154a03b8660",
              "dweb:/ipfs/QmeiSkKB2M5knX5JB7rUiCNoVXAmxpm5VWumeStrDjBFDB",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/libraries/SafeCast.sol": {
            keccak256: "0x7e7f09dd3e83f8a46295959888b10c52b3a3a470479bed7f9297d9d84c945e55",
            urls: [
              "bzz-raw://ed5355d2b52d395beb9f6d961c9a46ea36dc261a34b7b4b1df44881eb73594db",
              "dweb:/ipfs/QmeGihtbD6sgbJj5CRLxkyoXQbBGgJg2YL4HDXscNTjXSk",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/libraries/SettlementGuard.sol": {
            keccak256: "0xd72cbacba4538ec9c5aa9f9e89cb522a3528e593da2c1b7194952f392ffb4532",
            urls: [
              "bzz-raw://2feff143424f7a2922e5aeec33abdbd4f1d5e5878062891d156af5630e2f72c3",
              "dweb:/ipfs/QmbLR3M2ChDuGpt3zqh7vQ4V3dmQEy81HJZCF5v29GKXEQ",
            ],
            license: "GPL-2.0-or-later",
          },
          "lib/pancake-v4-core/src/types/BalanceDelta.sol": {
            keccak256: "0x19cc7a26b782c7f0ac92daf7df3116be271864b869208b3eb8a4139fa46df998",
            urls: [
              "bzz-raw://4c6f33ccba6ad98848be2ccc20909eedfb0c0feae252869d6d08d121b31fc637",
              "dweb:/ipfs/QmZ8f7NHB13S3d5fnEDz4MrVcZpDiHoTbuzEBwoCUYWXzT",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/types/Currency.sol": {
            keccak256: "0x81622643b14e180e32a644f7bc885b8ba754570c25cbe3af1a95cdb03b8bdf20",
            urls: [
              "bzz-raw://7bdb351264422ade9596a1fe79d2ea1e78f1edc013d7fd06a31cde725545b5a0",
              "dweb:/ipfs/QmbyyiNJSaCwVRuaA5oxjMFzm3pDtUWzf22sWSjhEEVwgg",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/types/PoolId.sol": {
            keccak256: "0xfca58dcea1e9d77257f5a108b748c9439389b5f7ef48e37478720228c712f533",
            urls: [
              "bzz-raw://ab1dea325943064519a060d7f4322b5fe1f33868e6d96d0dd8699683a80f3ab4",
              "dweb:/ipfs/QmV7V7fLUrEZ3XZ3jKCAWKwnoak3azJ44TXqNuCnugoTTp",
            ],
            license: "MIT",
          },
          "lib/pancake-v4-core/src/types/PoolKey.sol": {
            keccak256: "0xb8aa7017794cd10fb711720ae2ea4f87e871b1c113b2e285960e63f4f52fc5c6",
            urls: [
              "bzz-raw://f19a1975d93d1ddec92d5512979b5c4f2aa38296c3eaacf97af47dbd64804be0",
              "dweb:/ipfs/QmSZjYFnwdTYT3W6F3T3m4exrUKUP58P15Mt8VcYFh4UQo",
            ],
            license: "MIT",
          },
        },
        version: 1,
      },
      id: 40,
    },
    StablePoint: {
      name: "Stablepoint",
      address: "0x6cff4a33fb158196dc39b030c2fbaeab00731fc3",
      abi: [
        {
          inputs: [
            {
              internalType: "address",
              name: "_minter",
              type: "address",
            },
          ],
          name: "addMinter",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "approve",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "initialOwner",
              type: "address",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          inputs: [],
          name: "ECDSAInvalidSignature",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "length",
              type: "uint256",
            },
          ],
          name: "ECDSAInvalidSignatureLength",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "ECDSAInvalidSignatureS",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "allowance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "needed",
              type: "uint256",
            },
          ],
          name: "ERC20InsufficientAllowance",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "balance",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "needed",
              type: "uint256",
            },
          ],
          name: "ERC20InsufficientBalance",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "approver",
              type: "address",
            },
          ],
          name: "ERC20InvalidApprover",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "receiver",
              type: "address",
            },
          ],
          name: "ERC20InvalidReceiver",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "sender",
              type: "address",
            },
          ],
          name: "ERC20InvalidSender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "ERC20InvalidSpender",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
          ],
          name: "ERC2612ExpiredSignature",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "signer",
              type: "address",
            },
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "ERC2612InvalidSigner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "currentNonce",
              type: "uint256",
            },
          ],
          name: "InvalidAccountNonce",
          type: "error",
        },
        {
          inputs: [],
          name: "InvalidShortString",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "OwnableInvalidOwner",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "OwnableUnauthorizedAccount",
          type: "error",
        },
        {
          inputs: [
            {
              internalType: "string",
              name: "str",
              type: "string",
            },
          ],
          name: "StringTooLong",
          type: "error",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [],
          name: "EIP712DomainChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "deadline",
              type: "uint256",
            },
            {
              internalType: "uint8",
              name: "v",
              type: "uint8",
            },
            {
              internalType: "bytes32",
              name: "r",
              type: "bytes32",
            },
            {
              internalType: "bytes32",
              name: "s",
              type: "bytes32",
            },
          ],
          name: "permit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "_minter",
              type: "address",
            },
          ],
          name: "removeMinter",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "renounceOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "transfer",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "transferFrom",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "newOwner",
              type: "address",
            },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              internalType: "address",
              name: "spender",
              type: "address",
            },
          ],
          name: "allowance",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "account",
              type: "address",
            },
          ],
          name: "balanceOf",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [
            {
              internalType: "uint8",
              name: "",
              type: "uint8",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [
            {
              internalType: "bytes32",
              name: "",
              type: "bytes32",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "eip712Domain",
          outputs: [
            {
              internalType: "bytes1",
              name: "fields",
              type: "bytes1",
            },
            {
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              internalType: "string",
              name: "version",
              type: "string",
            },
            {
              internalType: "uint256",
              name: "chainId",
              type: "uint256",
            },
            {
              internalType: "address",
              name: "verifyingContract",
              type: "address",
            },
            {
              internalType: "bytes32",
              name: "salt",
              type: "bytes32",
            },
            {
              internalType: "uint256[]",
              name: "extensions",
              type: "uint256[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          name: "minters",
          outputs: [
            {
              internalType: "bool",
              name: "",
              type: "bool",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "address",
              name: "owner",
              type: "address",
            },
          ],
          name: "nonces",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [
            {
              internalType: "address",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "symbol",
          outputs: [
            {
              internalType: "string",
              name: "",
              type: "string",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [
            {
              internalType: "uint256",
              name: "",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
      ],
      filePath: "default_workspace/contracts/StablePoint.sol",
      pinnedAt: 1710583879649,
    },
  },
} as const;

export default externalContracts satisfies GenericContractsDeclaration;
