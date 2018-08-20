import User from '../../../entities/User'
import { DeleteUserMutationArgs, DeleteUserResponse } from '../../../types/graph'
import { Resolvers } from '../../../types/resolvers'

const resolvers: Resolvers = {
  Mutation: {
    DeleteUser: async (_, args: DeleteUserMutationArgs): Promise<DeleteUserResponse> => {
      const { email } = args
      try {
        const user = await User.findOne({ email })
        console.log(user)
        if (user) {
          user.remove()
          return {
            ok: true,
            error: null
          }
        }
        return {
          ok: false,
          error: null
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message
        }
      }
    }
  }
}
export default resolvers
