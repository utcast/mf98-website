.DEFAULT_GOAL := help
.PHONY: help
help: ## ヘルプを表示
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

.PHONY: deploy-stg
deploy-stg: ## ステージング環境へのデプロイ
	npm run generate
	cp .htaccess .output/public/.htaccess
	rsync -avz --delete -e "ssh" .output/public/ cast:utcast-mate.com/public_html/test/mayfes2025/

.PHONY: deploy-prod
deploy-prod: ## 本番環境へのデプロイ
	npm run generate
	cp .htaccess .output/public/.htaccess
	rsync -avz --delete -e "ssh" .output/public/ cast:ut-cast.net/public_html/mayfes2025/