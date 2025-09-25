#!/bin/bash

# HerixAI Website Deployment Script
# Usage: ./deploy.sh [environment]

set -e

ENVIRONMENT=${1:-production}
BUCKET_NAME=${2:-herixai.com}

echo "🚀 Starting deployment to $ENVIRONMENT..."

# Build the project
echo "📦 Building project..."
npm run build

# Check if build was successful
if [ ! -d "out" ]; then
    echo "❌ Build failed - out directory not found"
    exit 1
fi

echo "✅ Build completed successfully"

# Deploy to S3
echo "🌐 Deploying to S3 bucket: $BUCKET_NAME"
aws s3 sync ./out s3://$BUCKET_NAME --delete

# Copy index.html as 404.html for client-side routing
echo "📄 Setting up client-side routing..."
aws s3 cp s3://$BUCKET_NAME/index.html s3://$BUCKET_NAME/404.html

echo "✅ Deployment completed successfully!"

# Optional: Invalidate CloudFront
if [ ! -z "$CLOUDFRONT_DISTRIBUTION_ID" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
    echo "✅ CloudFront cache invalidated"
fi

echo "🎉 Website is now live!"
echo "📍 URL: https://$BUCKET_NAME"

