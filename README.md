#Set up API with router:
# check authen
# Login
POST /api/authenticate
# get authen info after login
GET /api/authenticate

# get user list
GET /api/user

# Build project
run:
 npm run install
 npm run build
 npm run start