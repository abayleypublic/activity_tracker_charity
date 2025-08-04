import { useLocalStorage } from 'usehooks-ts'
import { PolicyAcknowledgement } from '@/features/policy/types'

const PolicyKey = 'policy-acknowledged'

const usePolicy = () => useLocalStorage(PolicyKey, PolicyAcknowledgement.No)

export default usePolicy
