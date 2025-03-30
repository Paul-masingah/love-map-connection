
import React, { useState, useRef } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { motion } from 'framer-motion';
import { PlayCircle, PauseCircle, SkipBack, SkipForward, VolumeX, Volume2 } from 'lucide-react';

const AIVideoShowcase = () => {
  // State for video controls
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [activeTab, setActiveTab] = useState('network');
  const videoRef = useRef<HTMLIFrameElement>(null);
  
  // Handle playback controls
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
    
    // YouTube iframe API control
    try {
      const iframe = videoRef.current;
      if (iframe) {
        const iframeWindow = iframe.contentWindow;
        if (iframeWindow) {
          iframeWindow.postMessage(
            JSON.stringify({
              event: 'command',
              func: isPlaying ? 'pauseVideo' : 'playVideo'
            }), 
            '*'
          );
        }
      }
    } catch (error) {
      console.log('Error controlling YouTube iframe:', error);
    }
  };
  
  // Handle mute toggle
  const toggleMute = () => {
    setIsMuted(!isMuted);
    
    try {
      const iframe = videoRef.current;
      if (iframe) {
        const iframeWindow = iframe.contentWindow;
        if (iframeWindow) {
          iframeWindow.postMessage(
            JSON.stringify({
              event: 'command',
              func: isMuted ? 'unMute' : 'mute'
            }), 
            '*'
          );
        }
      }
    } catch (error) {
      console.log('Error controlling YouTube iframe:', error);
    }
  };
  
  // Format time for display
  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our AI Technology in Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how our advanced AI algorithms create perfect matches for your events
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Enhanced Video Showcase */}
          <motion.div 
            className="rounded-xl overflow-hidden shadow-lg bg-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  ref={videoRef}
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/qWVxMbg8j9o?autoplay=0&controls=0&enablejsapi=1&rel=0" 
                  title="AI Matchmaking Algorithm Visualization"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              {/* Custom Video Controls */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex flex-col">
                  {/* Progress Bar */}
                  <div className="mb-2">
                    <Slider
                      value={[currentTime]}
                      max={duration}
                      step={1}
                      className="w-full"
                      onValueChange={(value) => setCurrentTime(value[0])}
                    />
                  </div>
                  
                  {/* Control Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={togglePlayback}>
                        {isPlaying ? <PauseCircle size={24} /> : <PlayCircle size={24} />}
                      </Button>
                      <span className="text-white text-sm">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                    
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/20" onClick={toggleMute}>
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold mb-2">AI Matchmaking Visualization</h3>
              <p className="text-gray-600 mb-4">Watch how our algorithm analyzes personality traits to create optimal matches.</p>
              
              {/* Interactive buttons for different visualizations */}
              <div className="flex gap-2 flex-wrap">
                <Button 
                  variant={activeTab === 'network' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveTab('network')}
                  className={activeTab === 'network' ? 'bg-purple-600' : ''}
                >
                  Neural Network
                </Button>
                <Button 
                  variant={activeTab === 'compatibility' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveTab('compatibility')}
                  className={activeTab === 'compatibility' ? 'bg-purple-600' : ''}
                >
                  Compatibility Matrix
                </Button>
                <Button 
                  variant={activeTab === 'matching' ? 'default' : 'outline'} 
                  size="sm"
                  onClick={() => setActiveTab('matching')}
                  className={activeTab === 'matching' ? 'bg-purple-600' : ''}
                >
                  Matching Process
                </Button>
              </div>
            </div>
          </motion.div>
          
          {/* AI Animation with interactive elements */}
          <Card className="overflow-hidden shadow-lg transform transition-all duration-500 hover:translate-y-[-5px]">
            <CardContent className="p-0">
              <div className="p-6 bg-purple-600 text-white">
                <h3 className="text-lg font-bold mb-2">The Power of AI Matchmaking</h3>
                <p>Our neural networks process thousands of data points to find the perfect matches.</p>
              </div>
              
              {/* Dynamic visualization based on selected tab */}
              <div className="relative h-[300px] bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
                {activeTab === 'network' && (
                  <>
                    {/* Enhanced animated network nodes */}
                    <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 800 600">
                      <g className="animate-pulse-slow">
                        {Array.from({ length: 20 }).map((_, i) => (
                          <motion.circle 
                            key={i}
                            cx={100 + (i % 5) * 150} 
                            cy={100 + Math.floor(i / 5) * 150} 
                            r={5 + Math.random() * 8}
                            fill="rgba(255, 255, 255, 0.6)"
                            initial={{ scale: 0.5, opacity: 0.3 }}
                            animate={{ 
                              scale: [0.5, 1, 0.5],
                              opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{
                              duration: 2 + Math.random() * 3,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                        {Array.from({ length: 30 }).map((_, i) => (
                          <motion.line 
                            key={`line-${i}`}
                            x1={100 + (i % 5) * 150} 
                            y1={100 + Math.floor(i / 5) * 150}
                            x2={100 + ((i + 1) % 5) * 150}
                            y2={100 + Math.floor((i + 1) / 5) * 150}
                            stroke="rgba(255, 255, 255, 0.3)"
                            strokeWidth="1"
                            initial={{ pathLength: 0, opacity: 0.1 }}
                            animate={{ 
                              pathLength: [0, 1, 0],
                              opacity: [0.1, 0.5, 0.1]
                            }}
                            transition={{
                              duration: 3 + Math.random() * 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          />
                        ))}
                      </g>
                    </svg>
                  </>
                )}
                
                {activeTab === 'compatibility' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-5 gap-1 p-4 max-w-xs">
                      {Array.from({ length: 25 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-10 h-10 rounded-md"
                          style={{ 
                            backgroundColor: `rgba(${180 - (i % 5) * 20}, ${100 + (i % 3) * 30}, ${220 - (i % 7) * 10}, 0.7)` 
                          }}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ 
                            scale: 1, 
                            opacity: 0.5 + Math.random() * 0.5
                          }}
                          transition={{ 
                            delay: i * 0.03,
                            duration: 0.3,
                            yoyo: Infinity,
                            repeatDelay: 3
                          }}
                        />
                      ))}
                    </div>
                    <motion.div 
                      className="absolute top-4 left-4 text-white bg-purple-700/50 backdrop-blur-sm rounded px-2 py-1"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <p className="text-xs font-medium">Compatibility Matrix</p>
                    </motion.div>
                  </div>
                )}
                
                {activeTab === 'matching' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full max-w-xs">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute flex items-center justify-between w-full px-6"
                          style={{ top: `${40 + i * 40}px` }}
                        >
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-purple-400 flex items-center justify-center text-white font-bold"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.2 }}
                          >
                            P{i+1}
                          </motion.div>
                          
                          <motion.div 
                            className="h-0.5 bg-white/50 flex-1 mx-2"
                            initial={{ scaleX: 0, opacity: 0 }}
                            animate={{ scaleX: 1, opacity: 1 }}
                            transition={{ delay: i * 0.2 + 0.2, duration: 0.5 }}
                          />
                          
                          <motion.div 
                            className="w-12 h-12 rounded-full bg-indigo-400 flex items-center justify-center text-white font-bold"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: i * 0.2 + 0.4 }}
                          >
                            M{i+1}
                          </motion.div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Static content in foreground for all tabs */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="text-center p-8">
                    <div className="inline-flex rounded-full bg-purple-700 p-4 mb-4 animate-pulse-slow">
                      <svg 
                        className="w-16 h-16 text-white" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24" 
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth="1.5" 
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">Neural Network Processing</h4>
                    <p className="text-purple-100">Analyzing compatibility with 99.4% accuracy</p>
                  </div>
                </div>
              </div>
              
              {/* Interactive data points */}
              <div className="p-4 bg-white">
                <h4 className="font-medium text-sm mb-2">Real-time AI Insights:</h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Personality Traits", value: "32" },
                    { label: "Communication Styles", value: "16" },
                    { label: "Values Alignment", value: "28" },
                    { label: "Intellectual Compatibility", value: "24" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      className="bg-purple-50 rounded px-2 py-1 text-xs flex items-center gap-1"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <span className="font-medium">{item.label}:</span>
                      <span className="text-purple-700">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AIVideoShowcase;
