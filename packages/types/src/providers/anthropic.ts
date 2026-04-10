import type { ModelInfo } from "../model.js"

// https://docs.anthropic.com/en/docs/about-claude/models
// https://platform.claude.com/docs/en/about-claude/pricing

export type AnthropicModelId = keyof typeof anthropicModels
export const anthropicDefaultModelId: AnthropicModelId = "claude-sonnet-4-5"

export const anthropicModels = {
	"claude-sonnet-4-6": {
		maxTokens: 64_000, // Overridden to 8k if `enableReasoningEffort` is false.
		contextWindow: 200_000, // Default 200K, extendable to 1M with beta flag 'context-1m-2025-08-07'
		supportsImages: true,
		supportsPromptCache: true,
		inputPrice: 3.0, // $3 per million input tokens (≤200K context)
		outputPrice: 15.0, // $15 per million output tokens (≤200K context)
		cacheWritesPrice: 3.75, // $3.75 per million tokens
		cacheReadsPrice: 0.3, // $0.30 per million tokens
		supportsReasoningBudget: true,
		// Tiered pricing for extended context (requires beta flag 'context-1m-2025-08-07')
		tiers: [
			{
				contextWindow: 1_000_000, // 1M tokens with beta flag
				inputPrice: 6.0, // $6 per million input tokens (>200K context)
				outputPrice: 22.5, // $22.50 per million output tokens (>200K context)
				cacheWritesPrice: 7.5, // $7.50 per million tokens (>200K context)
				cacheReadsPrice: 0.6, // $0.60 per million tokens (>200K context)
			},
		],
	},
	"claude-sonnet-4-5": {
		maxTokens: 64_000, // Overridden to 8k if `enableReasoningEffort` is false.
		contextWindow: 200_000, // Default 200K, extendable to 1M with beta flag 'context-1m-2025-08-07'
		supportsImages: true,
		supportsPromptCache: true,
		inputPrice: 3.0, // $3 per million input tokens (≤200K context)
		outputPrice: 15.0, // $15 per million output tokens (≤200K context)
		cacheWritesPrice: 3.75, // $3.75 per million tokens
		cacheReadsPrice: 0.3, // $0.30 per million tokens
		supportsReasoningBudget: true,
		// Tiered pricing for extended context (requires beta flag 'context-1m-2025-08-07')
		tiers: [
			{
				contextWindow: 1_000_000, // 1M tokens with beta flag
				inputPrice: 6.0, // $6 per million input tokens (>200K context)
				outputPrice: 22.5, // $22.50 per million output tokens (>200K context)
				cacheWritesPrice: 7.5, // $7.50 per million tokens (>200K context)
				cacheReadsPrice: 0.6, // $0.60 per million tokens (>200K context)
			},
		],
	},
	"claude-sonnet-4-20250514": {
		maxTokens: 64_000, // Overridden to 8k if `enableReasoningEffort` is false.
		contextWindow: 200_000, // Default 200K, extendable to 1M with beta flag 'context-1m-2025-08-07'
		supportsImages: true,
		supportsPromptCache: true,
		inputPrice: 3.0, // $3 per million input tokens (≤200K context)
		outputPrice: 15.0, // $15 per million output tokens (≤200K context)
		cacheWritesPrice: 3.75, // $3.75 per million tokens
		cacheReadsPrice: 0.3, // $0.30 per million tokens
		supportsReasoningBudget: true,
		// Tiered pricing for extended context (requires beta flag 'context-1m-2025-08-07')
		tiers: [
			{
				contextWindow: 1_000_000, // 1M tokens with beta flag
				inputPrice: 6.0, // $6 per million input tokens (>200K context)
				outputPrice: 22.5, // $22.50 per million output tokens (>200K context)
				cacheWritesPrice: 7.5, // $7.50 per million tokens (>200K context)
				cacheReadsPrice: 0.6, // $0.60 per million tokens (>200K context)
			},
		],
	},
	"claude-opus-4-6": {
		maxTokens: 128_000, // Overridden to 8k if `enableReasoningEffort` is false.
		contextWindow: 200_000, // Default 200K, extendable to 1M with beta flag
		supportsImages: true,
		supportsPromptCache: true,
		inputPrice: 5.0, // $5 per million input tokens (≤200K context)
		outputPrice: 25.0, // $25 per million output tokens (≤200K context)
		cacheWritesPrice: 6.25, // $6.25 per million tokens
		cacheReadsPrice: 0.5, // $0.50 per million tokens
		supportsReasoningBudget: true,
		// Tiered pricing for extended context (requires beta flag)
		tiers: [
			{
				contextWindow: 1_000_000, // 1M tokens with beta flag
				inputPrice: 10.0, // $10 per million input tokens (>200K context)
				outputPrice: 37.5, // $37.50 per million output tokens (>200K context)
				cacheWritesPrice: 12.5, // $12.50 per million tokens (>200K context)
				cacheReadsPrice: 1.0, // $1.00 per million tokens (>200K context)
			},
		],
	},
	"claude-opus-4-5-20251101": {
		maxTokens: 32_000, // Overridden to 8k if `enableReasoningEffort` is false.
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: true,
		inputPrice: 5.0, // $5 per million input tokens
		outputPrice: 25.0, // $25 per million output tokens
		cacheWritesPrice: 6.25, // $6.25 per million tokens
		cacheReadsPrice: 0.5, // $0.50 per million tokens
		supportsReasoningBudget: true,
	},
	"claude-opus-4-1-20250805": {
		maxTokens: 32_000, // Overridden to 8k if `enableReasoningEffort` is false.
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: true,
		inputPrice: 15.0, // $15 per million input tokens
		outputPrice: 75.0, // $75 per million output tokens
		cacheWritesPrice: 18.75, // $18.75 per million tokens
		cacheReadsPrice: 1.5, // $1.50 per million tokens
		supportsReasoningBudget: true,
	},
	"claude-opus-4-20250514": {
		maxTokens: 32_000, // Overridden to 8k if `enableReasoningEffort` is false.
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: true,
		inputPrice: 15.0, // $15 per million input tokens
		outputPrice: 75.0, // $75 per million output tokens
		cacheWritesPrice: 18.75, // $18.75 per million tokens
		cacheReadsPrice: 1.5, // $1.50 per million tokens
		supportsReasoningBudget: true,
	},
	"claude-3-7-sonnet-20250219:thinking": {
		maxTokens: 128_000, // Unlocked by passing `beta` flag to the model. Otherwise, it's 64k.
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: true,
		inputPrice: 3.0, // $3 per million input tokens
		outputPrice: 15.0, // $15 per million output tokens
		cacheWritesPrice: 3.75, // $3.75 per million tokens
		cacheReadsPrice: 0.3, // $0.30 per million tokens
		supportsReasoningBudget: true,
		requiredReasoningBudget: true,
	},
	"claude-3-7-sonnet-20250219": {
		maxTokens: 8192, // Since we already have a `:thinking` virtual model we aren't setting `supportsReasoningBudget: true` here.
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: true,
		inputPrice: 3.0, // $3 per million input tokens
		outputPrice: 15.0, // $15 per million output tokens
		cacheWritesPrice: 3.75, // $3.75 per million tokens
		cacheReadsPrice: 0.3, // $0.30 per million tokens
	},
	"claude-3-5-sonnet-20241022": {
		maxTokens: 8192,
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: true,
		inputPrice: 3.0, // $3 per million input tokens
		outputPrice: 15.0, // $15 per million output tokens
		cacheWritesPrice: 3.75, // $3.75 per million tokens
		cacheReadsPrice: 0.3, // $0.30 per million tokens
	},
	"claude-3-5-haiku-20241022": {
		maxTokens: 8192,
		contextWindow: 200_000,
		supportsImages: false,
		supportsPromptCache: true,
		inputPrice: 1.0,
		outputPrice: 5.0,
		cacheWritesPrice: 1.25,
		cacheReadsPrice: 0.1,
	},
	"claude-3-opus-20240229": {
		maxTokens: 4096,
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: true,
		inputPrice: 15.0,
		outputPrice: 75.0,
		cacheWritesPrice: 18.75,
		cacheReadsPrice: 1.5,
	},
	"claude-3-haiku-20240307": {
		maxTokens: 4096,
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: true,
		inputPrice: 0.25,
		outputPrice: 1.25,
		cacheWritesPrice: 0.3,
		cacheReadsPrice: 0.03,
	},
	"claude-haiku-4-5-20251001": {
		maxTokens: 64_000,
		contextWindow: 200_000,
		supportsImages: true,
		supportsPromptCache: true,
		inputPrice: 1.0,
		outputPrice: 5.0,
		cacheWritesPrice: 1.25,
		cacheReadsPrice: 0.1,
		supportsReasoningBudget: true,
		description:
			"Claude Haiku 4.5 delivers near-frontier intelligence at lightning speeds with extended thinking, vision, and multilingual support.",
	},
	"qwen3.6-plus": {
        maxTokens: 64_000,
        contextWindow: 1_000_000,
        supportsImages: true,
        supportsPromptCache: true,
        inputPrice: 2.0,
        outputPrice: 12.0,
        cacheWritesPrice: 2.5,
        cacheReadsPrice: 0.2,
        description:
            "Qwen3.6-Plus - Alibaba Cloud model with 1M context window, 64K output, and tiered pricing (CNY per million tokens)",
    },
	"qwen3.5-plus": {
        maxTokens: 64_000,
        contextWindow: 1_000_000,
        supportsImages: true,
        supportsPromptCache: true,
        inputPrice: 0.8,
        outputPrice: 4.8,
        cacheWritesPrice: 1.0,
        cacheReadsPrice: 0.08,
        description:
            "Qwen3.5-Plus - Alibaba Cloud model with 1M context window, 64K output, and tiered pricing (CNY per million tokens)",
    },
    "qwen3.5-flash": {
        maxTokens: 64_000,
        contextWindow: 1_000_000,
        supportsImages: true,
        supportsPromptCache: true,
        inputPrice: 0.2,
        outputPrice: 2.0,
        cacheWritesPrice: 0.25,
        cacheReadsPrice: 0.02,
        description:
            "Qwen3.5-Flash - Alibaba Cloud fast model with 1M context window, 64K output, and tiered pricing (CNY per million tokens)",
    },
    "doubao-seed-2.0-code": {
        maxTokens: 128_000,
        contextWindow: 256_000,
        supportsImages: true,
        supportsPromptCache: true,
        inputPrice: 3.2,
        outputPrice: 16.0,
        cacheWritesPrice: 3.2,
        cacheReadsPrice: 0.64,
        description:
            "Doubao Seed 2.0 Code - ByteDance coding model with 256K context window, 128K output, and tiered pricing (CNY per million tokens)",
    },
    "doubao-seed-2.0-pro": {
        maxTokens: 128_000,
        contextWindow: 256_000,
        supportsImages: true,
        supportsPromptCache: true,
        inputPrice: 3.2,
        outputPrice: 16.0,
        cacheWritesPrice: 3.2,
        cacheReadsPrice: 0.64,
        description:
            "Doubao Seed 2.0 Pro - ByteDance pro model with 256K context window, 128K output, and tiered pricing (CNY per million tokens)",
    },
} as const satisfies Record<string, ModelInfo>

export const ANTHROPIC_DEFAULT_MAX_TOKENS = 8192
