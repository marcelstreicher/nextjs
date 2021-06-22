import { ApolloServer, gql } from 'apollo-server-micro'
import dbConnect from '../../utils/dbConnect'
import Registration from '../../models/Registration'
import Newsletter from '../../models/Newsletter'
import Cidade from '../../models/Cidade'

dbConnect()

const typeDefs = gql`
  type Registration {
    id: ID!
    name: String
    email: String
    modules:[Int]!
    payment:String!
    tel:String!
    instagram:String!
    valor: Int
    valorprazo: Int
    city: String!
  }
  type Newsletter {
    id: ID!
    name: String
    email: String
  }
  type Cidade {
    id: ID!
    name: String
    uf: String
    slug: String
  }
  type Query {
    registrations: [Registration!]!
    newsletter(email:String): [Newsletter]!
    allNewsletter: [Newsletter]!
    cidades: [Cidade]!
  }
  type Mutation {
      addRegistration(name:String!,email:String!,modules:[Int]!,payment:String!,tel:String!,instagram:String!,valor:Int!,valorprazo:Int!,city:String!):Registration
      addNewsletter(name:String!,email:String!):Newsletter
      addCidade(name:String!,uf:String!,slug:String!):Cidade
  }
`

const resolvers = {
  Query: {
    registrations(parent, args, context) {
        return Registration.find()
    },
    newsletter: (_, {email}) => {
        return Newsletter.find({email:email})
    },
    allNewsletter(parent, args, context){
        return Newsletter.find()
    },
    cidades(parent,args,context) {
        return Cidade.find()
    }
  },
  Mutation: {
    addRegistration: (_, {name,email,modules,payment,tel,instagram,valor,valorprazo,city}) => {
        return Registration.create({name,email,modules,payment,tel,instagram,valor,valorprazo,city})
    },
    addNewsletter: async (_, {name,email}) => {
        var v = await Newsletter.countDocuments({email:email})
        if (v == 0) return Newsletter.create({name,email})
        else return {"name":name,"email":email}
    },
    addCidade: async (_, {name,uf,slug}) => {
        var v = await Cidade.countDocuments({name:name,uf:uf,slug:slug})
        if (v == 0) return Cidade.create({name,uf,slug})
        else return {"name":name,"uf":uf,"slug":slug}
    },
  }
}

const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })