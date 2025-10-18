import {
    Card,
    Heading,
    Skeleton,
    VStack,
    Text,
    Divider,
} from '@chakra-ui/react'
import moment, { Moment } from 'moment'
import { useMemo } from 'react'

interface StatsProps {
    challenge?: Challenge
    progress?: Progress
}

const Stats = ({ progress, challenge }: StatsProps) => {
    const weeksBetween = (beginnning: Moment, end: Moment) => {
        const duration = moment.duration(end.diff(beginnning))
        return duration.asWeeks()
    }

    const remainingDistance = useMemo(() => {
        if (!challenge || !progress) return 0
        if (progress.distanceCovered > challenge.target.totalDistance) return 0

        return challenge.target.totalDistance - progress.distanceCovered
    }, [challenge, progress])

    const requiredAvg = useMemo(() => {
        if (!challenge || !progress) return 0

        const now = moment(moment.now())
        const end = moment(challenge.endDate)

        if (remainingDistance == 0 || now.isAfter(end)) return 0

        const weeksLeft = weeksBetween(now, end)
        return (remainingDistance / weeksLeft).toFixed(2)
    }, [challenge, progress])

    return (
        <Card w={'full'} p={2}>
            <VStack alignItems={'center'}>
                <Heading size="md">Stats</Heading>
                <Divider />
                <Skeleton
                    minH={100}
                    w={'full'}
                    isLoaded={!!(progress && challenge)}
                >
                    <VStack>
                        <Text>Progress: {progress?.percent.toFixed(2)}%</Text>
                        <Text>
                            Covered: {progress?.distanceCovered.toFixed(2)} km
                        </Text>
                        <Text>
                            Remaining:{' '}
                            {remainingDistance}{' '}
                            km
                        </Text>
                        <Text>
                            Required Avg / Week:{' '}
                            {requiredAvg}{' '}
                            km
                        </Text>
                    </VStack>
                </Skeleton>
            </VStack>
        </Card>
    )
}

export default Stats
