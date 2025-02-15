import React, { useContext } from 'react';
import { UserContext, AlertContext } from './contexts'

function withProvider(provider) {
    return function myHOC(IncomingComponent) {
        return function OutgoingComponent(props) {
            const contextData = useContext(provider);
            return (
                <IncomingComponent {...contextData} {...props} />
            )
        }
    }
}

export const withAlert = withProvider(AlertContext);
export const withUser = withProvider(UserContext)

export default withProvider;
