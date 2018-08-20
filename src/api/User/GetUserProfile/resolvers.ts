import User from '../../../entities/User'
import { Resolvers } from '../../../types/resolvers'
import { GetUserQueryArgs, GetUserResponse } from '../../../types/graph'

const resolvers: Resolvers = {
  Query: {
    GetUser: async (_, args: GetUserQueryArgs): Promise<GetUserResponse> => {
      try {
        const user = await User.findOne({
          id: args.id
        })
        if (user) {
          return {
            ok: true,
            error: null,
            user
          }
        } else {
          return {
            ok: false,
            error: 'User not found',
            user: null
          }
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          user: null
        }
      }
    }
  }
}

export default resolvers
