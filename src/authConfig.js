import { LogLevel } from "@azure/msal-browser";

/**
 * To learn more about user flows, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/user-flow-overview
 * To learn more about custom policies, visit: https://docs.microsoft.com/en-us/azure/active-directory-b2c/custom-policy-overview
 */
export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_DevSignInSignUp",
        forgotPassword: "<Forgot Password Name - in the form of B2C_1_xxx>",
        editProfile: "<Edit Profile Name - in the form of B2C_1_xxx>"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://wpo365bc.b2clogin.com/wpo365bc.onmicrosoft.com/B2C_1_DevSignInSignUp",
        },
        forgotPassword: {
            authority: "https://wpo365bc.b2clogin.com/wpo365bc.onmicrosoft.com/<Forgot Password Name - in the form of B2C_1_xxx>",
        },
        editProfile: {
            authority: "https://wpo365bc.b2clogin.com/wpo365bc.onmicrosoft.com/<Edit Profile Name - in the form of B2C_1_xxx>"
        }
    },
    authorityDomain: "wpo365bc.b2clogin.com"
}

/**
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md 
 */
export const msalConfig = {
    auth: {
        clientId: "5905b126-68d2-441d-9a22-556ffec78bf1", 
        authority: b2cPolicies.authorities.signUpSignIn.authority, 
        knownAuthorities: [b2cPolicies.authorityDomain], 
        redirectUri: "/",
        postLogoutRedirectUri: "/",
        navigateToLoginRequestUrl: false, 
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    },
    system: {	
        loggerOptions: {	
            loggerCallback: (level, message, containsPii) => {	
                if (containsPii) {		
                    return;		
                }		
                switch (level) {		
                    case LogLevel.Error:		
                        console.error(message);		
                        return;		
                    case LogLevel.Info:		
                        console.info(message);		
                        return;		
                    case LogLevel.Verbose:		
                        console.debug(message);		
                        return;		
                    case LogLevel.Warning:		
                        console.warn(message);		
                        return;
                    default:
                        return;
                }	
            }	
        }	
    }
};

/**
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: []
};
