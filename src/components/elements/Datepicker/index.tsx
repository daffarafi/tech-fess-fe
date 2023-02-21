import React, { useEffect, useState } from 'react'
import { DatepickerProps } from './interface'

export const Datepicker: React.FC<DatepickerProps> = ({ date, setDate }) => {
    const [availableDay, setAvailableDay] = useState(31)
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const months = [
        { value: '01', label: 'Januari' },
        { value: '02', label: 'Februari' },
        { value: '03', label: 'Maret' },
        { value: '04', label: 'April' },
        { value: '05', label: 'Mei' },
        { value: '06', label: 'Juni' },
        { value: '07', label: 'Juli' },
        { value: '08', label: 'Agustus' },
        { value: '09', label: 'September' },
        { value: '10', label: 'Oktober' },
        { value: '11', label: 'November' },
        { value: '12', label: 'Desember' },
    ]

    const days = Array.from({ length: availableDay }, (_, i) => i + 1).map(
        (day) => {
            return { value: day, label: day }
        }
    )

    const currentYear = new Date().getFullYear()
    const years = Array.from(Array(100).keys()).map((year) => {
        const yearNum = currentYear - year
        return { value: yearNum.toString(), label: yearNum.toString() }
    })

    const handleDateChange = (
        event: React.ChangeEvent<HTMLSelectElement>,
        type: string
    ) => {
        const selectedValue = event.target.value
        switch (type) {
            case 'day':
                setDay(selectedValue)
                break
            case 'month':
                setMonth(selectedValue)
                break
            case 'year':
                setYear(selectedValue)
                break
        }
    }

    useEffect(() => {
        const is31Day =
            month === '01' ||
            month === '03' ||
            month === '05' ||
            month === '07' ||
            month === '08' ||
            month === '10' ||
            month === '12'

        const isFebruary = month === '02'

        const isLeapYear =
            (parseInt(year) % 4 === 0 && parseInt(year) % 100 !== 0) ||
            parseInt(year) % 400 === 0

        if (isFebruary) {
            if (isLeapYear) {
                setAvailableDay(29)
            } else {
                setAvailableDay(28)
            }
        } else {
            if (is31Day) {
                setAvailableDay(31)
            } else {
                setAvailableDay(30)
            }
        }
        setDate(`${year}-${month}-${day}`)
    }, [day, month, year])

    return (
        <div className="flex  w-full justify-between gap-2">
            <select
                name="tanggal"
                value={day}
                onChange={(e) => handleDateChange(e, 'day')}
                className="bg-transparent py-4 flex-grow-[3] border border-secondary/50"
            >
                <option value="" className="bg-primary"></option>
                {days.map((day) => (
                    <option
                        key={day.value}
                        value={day.value}
                        className="bg-primary"
                    >
                        {day.label}
                    </option>
                ))}
            </select>
            <select
                name="bulan"
                value={month}
                onChange={(e) => handleDateChange(e, 'month')}
                className="bg-transparent py-4 flex-grow-[5] border border-secondary/50"
            >
                <option value="" className="bg-primary"></option>
                {months.map((month) => (
                    <option
                        key={month.value}
                        value={month.value}
                        className="bg-primary"
                    >
                        {month.label}
                    </option>
                ))}
            </select>
            <select
                name="tahun"
                value={year}
                onChange={(e) => handleDateChange(e, 'year')}
                className="bg-transparent py-4 flex-grow-[2] border border-secondary/50"
            >
                <option value="" className="bg-primary"></option>
                {years.map((year) => (
                    <option
                        key={year.value}
                        value={year.value}
                        className="bg-primary"
                    >
                        {year.label}
                    </option>
                ))}
            </select>
        </div>
    )
}
