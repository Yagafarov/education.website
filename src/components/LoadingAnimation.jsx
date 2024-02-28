import { CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'

const LoadingAnimation =()=>{
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        // Simulate loading delay for demonstration purposes
        const timeout = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timeout);
      }, []);

    return(
        <div style={{ background:'red',display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {loading && <CircularProgress />}
    </div>
    )
}

export default LoadingAnimation