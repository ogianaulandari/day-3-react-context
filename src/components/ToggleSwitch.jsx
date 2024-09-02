import PropTypes from 'prop-types';

const ToggleSwitch = ({ isChecked, onToggle, label }) => {
    return (
        <div className="flex items-center">
            <label className="relative inl items-center cursor-pointer">
                <input
                    type="checkbox"
                    checked={ isChecked}
                    onChange={onToggle}
                    className="sr-only"
                />
                <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700 rounded-full peer-checked:bg-teal-600">
                    <div className={`w-5 h-5 bg-white rounded-full transform transition-transform duration-200 ${isChecked ? 'translate-x-5' : 'translate-x-0'}`}></div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-300">{label}</span>
            </label>
        </div>
    );
};

ToggleSwitch.propTypes = {
    isChecked: PropTypes.bool.isRequired,
    onToggle: PropTypes.func.isRequired,
    label: PropTypes.string,
};

export default ToggleSwitch;
