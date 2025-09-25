# 🔒 HTTPS Setup Guide for HerixAI Website

## Overview
This guide will help you enable HTTPS for your HerixAI website using AWS CloudFront, which provides SSL certificates and secure connections.

## Step 1: Create CloudFront Distribution

### 1.1 Access CloudFront Console
1. Go to [AWS CloudFront Console](https://console.aws.amazon.com/cloudfront/)
2. Click **"Create Distribution"**

### 1.2 Configure Origin Settings
```
Origin Domain: [your-bucket-name].s3.amazonaws.com
  Example: herixai-website.s3.amazonaws.com

Origin Path: (leave empty)

Origin Access: Public

Origin Access Control: (leave as default)
```

### 1.3 Configure Default Cache Behavior
```
Viewer Protocol Policy: Redirect HTTP to HTTPS
Allowed HTTP Methods: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
Cache Policy: CachingOptimized
Compress Objects Automatically: Yes
```

### 1.4 Configure Distribution Settings
```
Price Class: Use All Edge Locations (Best Performance)
Alternate Domain Names (CNAMEs): 
  - herixai.com (if you have a custom domain)
  - www.herixai.com (if you have www subdomain)

SSL Certificate: 
  - Default CloudFront Certificate (if using CloudFront domain)
  - Custom SSL Certificate (if using custom domain)

Default Root Object: index.html
Custom Error Pages:
  - HTTP Error Code: 403
  - Response Page Path: /index.html
  - HTTP Response Code: 200
  - HTTP Error Code: 404
  - Response Page Path: /index.html
  - HTTP Response Code: 200
```

### 1.5 Create Distribution
1. Click **"Create Distribution"**
2. Wait 10-15 minutes for deployment
3. Note the **Distribution ID** (e.g., E1234567890ABC)

## Step 2: Configure Custom Domain (Optional)

### 2.1 Request SSL Certificate
1. Go to [AWS Certificate Manager](https://console.aws.amazon.com/acm/)
2. Click **"Request a certificate"**
3. Choose **"Request a public certificate"**
4. Add your domain names:
   - herixai.com
   - www.herixai.com
5. Choose **DNS validation**
6. Add the required DNS records to your domain registrar

### 2.2 Update CloudFront Distribution
1. Go back to CloudFront console
2. Select your distribution
3. Click **"Edit"**
4. In **"Alternate Domain Names (CNAMEs)"**, add:
   - herixai.com
   - www.herixai.com
5. In **"SSL Certificate"**, select your custom certificate
6. Save changes

## Step 3: Update GitHub Secrets

### 3.1 Add CloudFront Distribution ID
1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Add a new secret:
   - Name: `CLOUDFRONT_DISTRIBUTION_ID`
   - Value: Your CloudFront Distribution ID (e.g., E1234567890ABC)

### 3.2 Verify Existing Secrets
Make sure you have these secrets configured:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `S3_BUCKET_NAME`
- `CLOUDFRONT_DISTRIBUTION_ID` (new)

## Step 4: Test HTTPS

### 4.1 Access Your Website
- **CloudFront Domain**: `https://d1234567890abc.cloudfront.net`
- **Custom Domain**: `https://herixai.com` (if configured)

### 4.2 Verify Security
1. Check the padlock icon in your browser
2. Verify SSL certificate is valid
3. Test that HTTP redirects to HTTPS

## Step 5: Update DNS (If Using Custom Domain)

### 5.1 Create CNAME Records
In your domain registrar's DNS settings:
```
Type: CNAME
Name: @ (or leave empty for root domain)
Value: d1234567890abc.cloudfront.net

Type: CNAME
Name: www
Value: d1234567890abc.cloudfront.net
```

## Troubleshooting

### Common Issues:
1. **"This site can't be reached"**: CloudFront is still deploying (wait 10-15 minutes)
2. **SSL Certificate Error**: Ensure certificate is validated in ACM
3. **404 Errors**: Check that S3 bucket has proper permissions and index.html exists
4. **Mixed Content Warnings**: Ensure all resources use HTTPS

### Testing Commands:
```bash
# Test CloudFront distribution
curl -I https://d1234567890abc.cloudfront.net

# Test custom domain
curl -I https://herixai.com

# Check SSL certificate
openssl s_client -connect herixai.com:443 -servername herixai.com
```

## Benefits of CloudFront:
- ✅ Free SSL certificates
- ✅ Global CDN for faster loading
- ✅ Automatic HTTP to HTTPS redirect
- ✅ DDoS protection
- ✅ Custom error pages for SPA routing
- ✅ Compression and caching

## Cost:
- CloudFront: ~$0.085 per GB transferred
- SSL Certificate: Free with ACM
- S3: Existing costs only

Your website will now be accessible via HTTPS with professional SSL certificates!
