import library1Variable from '@mhal007/monorepo-lerna-library-1'
import library2Variable from '@mhal007/monorepo-lerna-library-2'
import library3Variable from '@mhal007/monorepo-lerna-library-3'

console.log('library-1 variable value is ' + library1Variable)
console.log('library-2 variable value is ' + library2Variable)
console.log('library-3 variable value is ' + library3Variable)

console.log('Hello World from application-3');

const changeThisToTriggerNewVersion = 2;

export default changeThisToTriggerNewVersion
