import React, { useState } from 'react';
import ProvinceSelector from './components/ProvinceSelector';
import RegencySelector from './components/RegencySelector';
import DistrictSelector from './components/DistrictSelector';
import './styles/main.css';

const App: React.FC = () => {
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedRegency, setSelectedRegency] = useState('');

  return (
    <div>
      <h1>Data Wilayah Indonesia</h1>
      <ProvinceSelector onSelect={setSelectedProvince} />
      {selectedProvince && (
        <RegencySelector provinceId={selectedProvince} onSelect={setSelectedRegency} />
      )}
      {selectedRegency && (
        <DistrictSelector regencyId={selectedRegency} onSelect={() => {}} />
      )}
    </div>
  );
};

export default App;
