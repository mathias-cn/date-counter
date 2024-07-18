import { format, addDays, subDays } from 'date-fns'

interface DisplayedDateProps {
    count: number
}

export function DisplayedDate({ count }: DisplayedDateProps) {
    return (
        <h2 className="text-2xl font-semibold">
            {
                count === 0
                ? `Today is ${format(new Date(), 'E LLL d y')}`
                : count > 0
                ? `${count} days from today is ${format(addDays(new Date(), count), 'E LLL d y')}`
                : `${Math.abs(count)} days ago was ${format(subDays(new Date(), count), 'E LLL d y')}`
            }
        </h2>
    )
}