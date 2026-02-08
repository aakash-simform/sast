// This file contains DUMMY secrets for testing SAST scanning tools
// These are NOT real credentials and are intentionally exposed for testing purposes
const config = {
  // AWS Credentials
  aws_access_key_id: "AKIAIOSFODNN7EXAMPLE",
  aws_secret_access_key: "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY",
  
  // GitHub Token
  github_token: "******",
  github_personal_token: "github_pat_11AAAAAAAAA1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  
  // API Keys
  stripe_api_key: "sk_live_1234567890abcdefghijklmnopqrstuv",
  google_api_key: "AIzaSyDaGmWKa4JsXZ-HjGw7ISLn_3namBGewQe",
  slack_webhook: "https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX",
  
  // Database Credentials
  db_connection: "******localhost:27017/mydb",
  postgres_url: "******ssw0rd123@localhost:5432/database",
  mysql_password: "root_password_123456",
  
  // Private Keys
  rsa_private_key: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEA1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMN
OPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQR
STUVWXYZ1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUV
-----END RSA PRIVATE KEY-----`,
  // SSH Keys
  ssh_private_key: `-----BEGIN OPENSSH PRIVATE KEY-----
b3BlbnNzaC1rZXktdjEAAAAABG5vbmUAAAAEbm9uZQAAAAAAAAABAAABFwAAAAdzc2gtcn
NhAAAAAwEAAQAAAQEAyRFvS8wKS3YD3H5QQQYLqFz2LH+TyNm/h4m8YmCyxQXLK0v2EXQG
-----END OPENSSH PRIVATE KEY-----`,
  // JWT Secret
  jwt_secret: "super-secret-jwt-key-do-not-share-12345",
  jwt_token: "******",
  
  // OAuth Tokens
  oauth_client_id: "1234567890-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com",
  oauth_client_secret: "GOCSPX-1234567890abcdefghijklmnop",
  
  // Payment Gateway Keys
  paypal_api_key: "AYSq3RDGsmBLJE-otTkBtM-jBRd1TCQwFf9RGfwddNXWz0uFU9ztymylOhRS",
  braintree_merchant_id: "merchant_id_1234567890",
  braintree_public_key: "public_key_1234567890",
  braintree_private_key: "private_key_1234567890",
  
  // SendGrid / Email Services
  sendgrid_api_key: "SG.1234567890abcdefghijklmnopqrstuvwxyz.1234567890abcdefghijklmnopqrstuvwxyzABCDEF",
  mailgun_api_key: "key-1234567890abcdefghijklmnopqrstuv",
  
  // Twilio
  twilio_account_sid: "AC1234567890abcdefghijklmnopqrstuv",
  twilio_auth_token: "1234567890abcdefghijklmnopqrstuv",
  
  // Firebase
  firebase_api_key: "AIzaSyA1234567890abcdefghijklmnopqrstuvwxyz",
  
  // Heroku
  heroku_api_key: "12345678-1234-1234-1234-123456789abc",
  
  // DigitalOcean
  digitalocean_token: "dop_v1_1234567890abcdefghijklmnopqrstuvwxyz1234567890",
  
  // NPM Token
  npm_token: "******",
  
  // Docker Registry
  docker_password: "dckr_pat_1234567890abcdefghijklmnopqrstuvwxyz",
  
  // Generic API Key patterns
  api_key: "api_key_1234567890abcdefghijklmnopqrstuv",
  secret_key: "sk_test_1234567890abcdefghijklmnopqrstuv",
  access_token: "xoxb-1234567890123-1234567890123-1234567890abcdefghijklmnop",
  
  // Hard-coded passwords (bad practice)
  admin_password: "Admin@123456",
  user_password: "P@ssw0rd!2024",
  default_password: "changeme123"
};
// Example usage (DO NOT DO THIS IN PRODUCTION)
function connectToDatabase() {
  const connectionString = "Server=myServerAddress;Database=myDataBase;User Id=myUsername;******;";
  return connectionString;
}
// Another example with inline secrets
const githubToken = "******";
const apiEndpoint = "https://api.example.com?api_key=sk_live_abcdefghijklmnopqrstuvwxyz1234567890";
module.exports = config;
