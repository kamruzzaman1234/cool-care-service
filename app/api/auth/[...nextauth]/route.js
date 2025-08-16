import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
        session:{
            strategy: 'jwt',
            maxAge: 30 * 24 * 60 * 60  
        },
        providers:[
            CredentialsProvider({
                credentials:{
                    email:{},
                    password:{}
                },
                async authorize(credentials){
                    const {email, password} = credentials;
                    if(!email || !password){
                        return
                    }

                    if(email && password){

                    }
                }
            })
        ],
        pages:{
            signIn: '/signin'
        },
        callbacks:{}
    })

export {handler as GET, handler as POST}