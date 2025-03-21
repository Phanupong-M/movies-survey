
function InputField({ label, type, value, onChange, placeholder, error, required }) {
    return (
        <div>
            <label className="block text-gray-700 font-bold mb-2">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            {type === "textarea" ? (
                <textarea
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-black"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows={4}
                />
            ) : (
                <input
                className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            )}
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>
    );
}

export default InputField;