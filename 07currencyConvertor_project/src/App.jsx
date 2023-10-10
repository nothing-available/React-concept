import InputBox from './components/InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { useState } from 'react'

function App() {
    const [amount, setAmount] = useState(0)
    const [from, setfrom] = useState('usd')
    const [to, setto] = useState('inr')
    const [convertedAmount, setConvertedAmount] = useState(0)

    const currencyInfo = useCurrencyInfo(from)

    const option = Object.keys(currencyInfo)

    const swap = () => {
        setfrom(to)
        setto(from)
        setConvertedAmount(amount)
        setAmount(convertedAmount)
    }

    const convert = () => {
        setConvertedAmount(amount * currencyInfo[to])
    }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://i.pinimg.com/474x/26/cf/3c/26cf3c80b7b5923f89fba8fe140dd660.jpg')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();

                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount={amount}
                                currencyOptions={option}
                                onCurrencyChange={(currency) => setAmount(currency)}
                                selectCurrency={from}
                                onAmountChange={(amount) => setAmount(amount)}

                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="to"
                                amount={convertedAmount}
                                currencyOptions={option}
                                onCurrencyChange={(currency) => {
                                    setto(currency)
                                }}
                                selectCurrency={to}
                                amountDisabled

                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert {from.toUpperCase()} to {to.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App