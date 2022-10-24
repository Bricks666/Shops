import { AbiItem } from 'web3-utils';

export const abi: AbiItem[] = [
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'login',
				type: 'address',
			},
			{
				indexed: false,
				internalType: 'enum Users.Roles',
				name: 'role',
				type: 'uint8',
			},
		],
		name: 'ChangeRole',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
			{
				indexed: false,
				internalType: 'enum Requests.Status',
				name: 'status',
				type: 'uint8',
			},
		],
		name: 'ChangeStatus',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'shopId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'reviewId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'commentId',
				type: 'uint256',
			},
		],
		name: 'NewComment',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: false, internalType: 'uint256', name: 'id', type: 'uint256' },
		],
		name: 'NewRequest',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'shopId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'uint256',
				name: 'reviewId',
				type: 'uint256',
			},
		],
		name: 'NewReview',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'shopId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'salesman',
				type: 'address',
			},
		],
		name: 'NewSalesman',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: 'address',
				name: 'login',
				type: 'address',
			},
		],
		name: 'NewShop',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'login',
				type: 'address',
			},
		],
		name: 'NewUser',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'shopId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'reviewId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'commentId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'enum Reviews.Reaction',
				name: 'reaction',
				type: 'uint8',
			},
		],
		name: 'ReactionComment',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'shopId',
				type: 'uint256',
			},
			{
				indexed: true,
				internalType: 'uint256',
				name: 'reviewId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'enum Reviews.Reaction',
				name: 'reaction',
				type: 'uint8',
			},
		],
		name: 'ReactionReview',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'uint256',
				name: 'shopId',
				type: 'uint256',
			},
			{
				indexed: false,
				internalType: 'address',
				name: 'salesman',
				type: 'address',
			},
		],
		name: 'RemoveSalesman',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'login',
				type: 'address',
			},
		],
		name: 'RemoveShop',
		type: 'event',
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: 'address',
				name: 'login',
				type: 'address',
			},
		],
		name: 'RemoveUser',
		type: 'event',
	},
	{
		inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
		name: 'aprove_request',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
		name: 'cancel_request',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: 'shopId', type: 'uint256' },
			{ internalType: 'uint256', name: 'reviewId', type: 'uint256' },
			{ internalType: 'string', name: 'content', type: 'string' },
		],
		name: 'create_comment',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'enum Users.Roles', name: 'role', type: 'uint8' },
			{ internalType: 'uint256', name: 'shopId', type: 'uint256' },
		],
		name: 'create_request',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: 'shopId', type: 'uint256' },
			{ internalType: 'string', name: 'content', type: 'string' },
			{ internalType: 'uint256', name: 'mark', type: 'uint256' },
		],
		name: 'create_review',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'address', name: 'login', type: 'address' },
			{ internalType: 'bytes32', name: 'password', type: 'bytes32' },
			{ internalType: 'string', name: 'city', type: 'string' },
		],
		name: 'create_shop',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: 'shopId', type: 'uint256' },
			{ internalType: 'uint256', name: 'reviewId', type: 'uint256' },
		],
		name: 'get_comments',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address', name: 'author', type: 'address' },
					{ internalType: 'string', name: 'content', type: 'string' },
					{ internalType: 'uint256', name: 'likes', type: 'uint256' },
					{ internalType: 'uint256', name: 'dislikes', type: 'uint256' },
					{ internalType: 'address[]', name: 'reviewers', type: 'address[]' },
				],
				internalType: 'struct Comments.Comment[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'get_requests',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address', name: 'sender', type: 'address' },
					{ internalType: 'enum Users.Roles', name: 'role', type: 'uint8' },
					{
						internalType: 'enum Requests.Status',
						name: 'status',
						type: 'uint8',
					},
					{ internalType: 'uint256', name: 'shopId', type: 'uint256' },
				],
				internalType: 'struct Requests.Request[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: 'shopId', type: 'uint256' }],
		name: 'get_reviews',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address', name: 'author', type: 'address' },
					{ internalType: 'string', name: 'content', type: 'string' },
					{ internalType: 'uint256', name: 'mark', type: 'uint256' },
					{ internalType: 'uint256', name: 'likes', type: 'uint256' },
					{ internalType: 'uint256', name: 'dislikes', type: 'uint256' },
					{ internalType: 'address[]', name: 'reviewers', type: 'address[]' },
				],
				internalType: 'struct Reviews.Review[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'get_shops',
		outputs: [
			{
				components: [
					{ internalType: 'uint256', name: 'id', type: 'uint256' },
					{ internalType: 'address', name: 'login', type: 'address' },
					{ internalType: 'string', name: 'city', type: 'string' },
				],
				internalType: 'struct Shops.Shop[]',
				name: '',
				type: 'tuple[]',
			},
		],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [],
		name: 'get_user_addresses',
		outputs: [{ internalType: 'address[]', name: '', type: 'address[]' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'bytes32', name: 'password', type: 'bytes32' }],
		name: 'login',
		outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
		stateMutability: 'view',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: 'shopId', type: 'uint256' },
			{ internalType: 'uint256', name: 'reviewId', type: 'uint256' },
			{ internalType: 'uint256', name: 'commentId', type: 'uint256' },
			{
				internalType: 'enum Reviews.Reaction',
				name: 'reaction',
				type: 'uint8',
			},
		],
		name: 'reaction_comment',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [
			{ internalType: 'uint256', name: 'shopId', type: 'uint256' },
			{ internalType: 'uint256', name: 'reviewId', type: 'uint256' },
			{
				internalType: 'enum Reviews.Reaction',
				name: 'reaction',
				type: 'uint8',
			},
		],
		name: 'reaction_review',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'bytes32', name: 'password', type: 'bytes32' }],
		name: 'registration',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
	{
		inputs: [{ internalType: 'uint256', name: 'id', type: 'uint256' }],
		name: 'remove_shop',
		outputs: [],
		stateMutability: 'nonpayable',
		type: 'function',
	},
];
