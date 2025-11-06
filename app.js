const { useState } = React;
const { Video, MessageCircle, Book, Users, Send, Upload, Play, FileText, Calendar, Clock, User } = window.lucide;

function EnglishLearningPlatform() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [messages, setMessages] = useState([
    { id: 1, sender: 'Instructor', text: 'Welcome to today\'s class!', time: '09:00 AM', type: 'instructor' },
    { id: 2, sender: 'Student A', text: 'Good morning!', time: '09:01 AM', type: 'student' }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [contents, setContents] = useState([
    { id: 1, title: 'Grammar Basics - Present Tense', type: 'video', date: '2025-11-05', views: 45 },
    { id: 2, title: 'Common English Phrases', type: 'document', date: '2025-11-04', views: 32 },
    { id: 3, title: 'Pronunciation Guide', type: 'video', date: '2025-11-03', views: 58 }
  ]);
  const [isInCall, setIsInCall] = useState(false);
  const [participants] = useState([
    { id: 1, name: 'You (Instructor)', status: 'online' },
    { id: 2, name: 'Alice Johnson', status: 'online' },
    { id: 3, name: 'Bob Smith', status: 'online' },
    { id: 4, name: 'Carol White', status: 'online' }
  ]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        sender: 'You',
        text: newMessage,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: 'instructor'
      }]);
      setNewMessage('');
    }
  };

  const renderDashboard = () => (
    React.createElement('div', { className: 'space-y-6' },
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-3 gap-4' },
        React.createElement('div', { className: 'bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-lg' },
          React.createElement(Users, { className: 'w-8 h-8 mb-3' }),
          React.createElement('h3', { className: 'text-2xl font-bold' }, '24'),
          React.createElement('p', { className: 'text-blue-100' }, 'Active Students')
        ),
        React.createElement('div', { className: 'bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-lg' },
          React.createElement(Book, { className: 'w-8 h-8 mb-3' }),
          React.createElement('h3', { className: 'text-2xl font-bold' }, '12'),
          React.createElement('p', { className: 'text-green-100' }, 'Content Shared')
        ),
        React.createElement('div', { className: 'bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-lg' },
          React.createElement(Calendar, { className: 'w-8 h-8 mb-3' }),
          React.createElement('h3', { className: 'text-2xl font-bold' }, '5'),
          React.createElement('p', { className: 'text-purple-100' }, 'Classes This Week')
        )
      ),
      React.createElement('div', { className: 'bg-white rounded-xl shadow-md p-6' },
        React.createElement('h3', { className: 'text-xl font-bold text-gray-800 mb-4' }, 'Upcoming Classes'),
        React.createElement('div', { className: 'space-y-3' },
          React.createElement('div', { className: 'flex items-center justify-between p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500' },
            React.createElement('div', { className: 'flex items-center gap-3' },
              React.createElement(Clock, { className: 'w-5 h-5 text-blue-600' }),
              React.createElement('div', {},
                React.createElement('p', { className: 'font-semibold text-gray-800' }, 'Advanced Grammar Class'),
                React.createElement('p', { className: 'text-sm text-gray-600' }, 'Group A - Intermediate Level')
              )
            ),
            React.createElement('span', { className: 'text-sm font-medium text-blue-600' }, 'Today, 2:00 PM')
          ),
          React.createElement('div', { className: 'flex items-center justify-between p-4 bg-green-50 rounded-lg border-l-4 border-green-500' },
            React.createElement('div', { className: 'flex items-center gap-3' },
              React.createElement(Clock, { className: 'w-5 h-5 text-green-600' }),
              React.createElement('div', {},
                React.createElement('p', { className: 'font-semibold text-gray-800' }, 'Conversation Practice'),
                React.createElement('p', { className: 'text-sm text-gray-600' }, 'Group B - Beginner Level')
              )
            ),
            React.createElement('span', { className: 'text-sm font-medium text-green-600' }, 'Tomorrow, 10:00 AM')
          )
        )
      )
    )
  );

  const renderVideoCall = () => (
    React.createElement('div', { className: 'space-y-4' },
      React.createElement('div', { className: 'bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-8 aspect-video flex items-center justify-center relative shadow-2xl' },
        !isInCall ? (
          React.createElement('div', { className: 'text-center' },
            React.createElement(Video, { className: 'w-16 h-16 text-white mx-auto mb-4' }),
            React.createElement('h3', { className: 'text-2xl font-bold text-white mb-2' }, 'Ready to Start Class?'),
            React.createElement('p', { className: 'text-gray-300 mb-6' }, 'Click below to begin video session'),
            React.createElement('button', {
              onClick: () => setIsInCall(true),
              className: 'bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition shadow-lg'
            }, 'Start Video Call')
          )
        ) : (
          React.createElement('div', { className: 'w-full h-full relative' },
            React.createElement('div', { className: 'absolute inset-0 bg-gradient-to-br from-blue-900 to-purple-900 rounded-lg flex items-center justify-center' },
              React.createElement('div', { className: 'text-center' },
                React.createElement(Video, { className: 'w-12 h-12 text-white mx-auto mb-2 animate-pulse' }),
                React.createElement('p', { className: 'text-white' }, 'Video Call In Progress...')
              )
            ),
            React.createElement('div', { className: 'absolute bottom-4 right-4 grid grid-cols-2 gap-2' },
              participants.slice(1).map(p =>
                React.createElement('div', { key: p.id, className: 'w-32 h-24 bg-gray-700 rounded-lg flex items-center justify-center' },
                  React.createElement(User, { className: 'w-8 h-8 text-gray-400' })
                )
              )
            )
          )
        )
      ),
      isInCall && React.createElement('div', { className: 'flex justify-center gap-4' },
        React.createElement('button', { className: 'bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition' }, 'Mute Audio'),
        React.createElement('button', { className: 'bg-gray-700 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-semibold transition' }, 'Stop Video'),
        React.createElement('button', { className: 'bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition' }, 'Share Screen'),
        React.createElement('button', {
          onClick: () => setIsInCall(false),
          className: 'bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition'
        }, 'End Call')
      ),
      React.createElement('div', { className: 'bg-white rounded-xl shadow-md p-6' },
        React.createElement('h3', { className: 'text-lg font-bold text-gray-800 mb-4' }, `Participants (${participants.length})`),
        React.createElement('div', { className: 'space-y-2' },
          participants.map(p =>
            React.createElement('div', { key: p.id, className: 'flex items-center justify-between p-3 bg-gray-50 rounded-lg' },
              React.createElement('div', { className: 'flex items-center gap-3' },
                React.createElement('div', { className: 'w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold' }, p.name[0]),
                React.createElement('span', { className: 'font-medium text-gray-800' }, p.name)
              ),
              React.createElement('span', { className: 'w-3 h-3 bg-green-500 rounded-full' })
            )
          )
        )
      )
    )
  );

  const renderChat = () => (
    React.createElement('div', { className: 'bg-white rounded-xl shadow-md flex flex-col h-[600px]' },
      React.createElement('div', { className: 'p-4 border-b bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-xl' },
        React.createElement('h3', { className: 'text-xl font-bold' }, 'Class Chat'),
        React.createElement('p', { className: 'text-sm text-blue-100' }, 'Group Discussion')
      ),
      React.createElement('div', { className: 'flex-1 overflow-y-auto p-4 space-y-3' },
        messages.map(msg =>
          React.createElement('div', { key: msg.id, className: `flex ${msg.type === 'instructor' ? 'justify-end' : 'justify-start'}` },
            React.createElement('div', { className: `max-w-xs ${msg.type === 'instructor' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-800'} rounded-lg p-3 shadow` },
              React.createElement('p', { className: 'font-semibold text-sm mb-1' }, msg.sender),
              React.createElement('p', { className: 'text-sm' }, msg.text),
              React.createElement('p', { className: `text-xs mt-1 ${msg.type === 'instructor' ? 'text-blue-100' : 'text-gray-500'}` }, msg.time)
            )
          )
        )
      ),
      React.createElement('div', { className: 'p-4 border-t bg-gray-50 rounded-b-xl' },
        React.createElement('div', { className: 'flex gap-2' },
          React.createElement('input', {
            type: 'text',
            value: newMessage,
            onChange: (e) => setNewMessage(e.target.value),
            onKeyPress: (e) => e.key === 'Enter' && handleSendMessage(),
            placeholder: 'Type your message...',
            className: 'flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
          }),
          React.createElement('button', {
            onClick: handleSendMessage,
            className: 'bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition flex items-center gap-2'
          },
            React.createElement(Send, { className: 'w-4 h-4' }),
            'Send'
          )
        )
      )
    )
  );

  const renderContent = () => (
    React.createElement('div', { className: 'space-y-6' },
      React.createElement('div', { className: 'flex justify-between items-center' },
        React.createElement('h3', { className: 'text-2xl font-bold text-gray-800' }, 'Learning Materials'),
        React.createElement('button', { className: 'bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition flex items-center gap-2 shadow-lg' },
          React.createElement(Upload, { className: 'w-5 h-5' }),
          'Upload Content'
        )
      ),
      React.createElement('div', { className: 'grid grid-cols-1 md:grid-cols-2 gap-4' },
        contents.map(content =>
          React.createElement('div', { key: content.id, className: 'bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition' },
            React.createElement('div', { className: 'flex items-start justify-between mb-4' },
              React.createElement('div', { className: 'flex items-center gap-3' },
                content.type === 'video' ? (
                  React.createElement('div', { className: 'w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center' },
                    React.createElement(Play, { className: 'w-6 h-6 text-red-600' })
                  )
                ) : (
                  React.createElement('div', { className: 'w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center' },
                    React.createElement(FileText, { className: 'w-6 h-6 text-blue-600' })
                  )
                ),
                React.createElement('div', {},
                  React.createElement('h4', { className: 'font-bold text-gray-800' }, content.title),
                  React.createElement('p', { className: 'text-sm text-gray-500' }, content.date)
                )
              )
            ),
            React.createElement('div', { className: 'flex items-center justify-between' },
              React.createElement('span', { className: 'text-sm text-gray-600' }, `${content.views} views`),
              React.createElement('button', { className: 'text-blue-600 hover:text-blue-700 font-semibold text-sm' }, 'View Content →')
            )
          )
        )
      )
    )
  );

  return (
    React.createElement('div', { className: 'min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100' },
      React.createElement('nav', { className: 'bg-white shadow-lg border-b border-gray-200' },
        React.createElement('div', { className: 'max-w-7xl mx-auto px-4 py-4' },
          React.createElement('div', { className: 'flex items-center justify-between' },
            React.createElement('div', { className: 'flex items-center gap-3' },
              React.createElement('div', { className: 'w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg' },
                React.createElement(Book, { className: 'w-7 h-7 text-white' })
              ),
              React.createElement('div', {},
                React.createElement('h1', { className: 'text-2xl font-bold text-gray-800' }, 'English Learning Hub'),
                React.createElement('p', { className: 'text-sm text-gray-600' }, 'Instructor Dashboard')
              )
            ),
            React.createElement('div', { className: 'flex items-center gap-3' },
              React.createElement('div', { className: 'text-right' },
                React.createElement('p', { className: 'font-semibold text-gray-800' }, 'English Instructor'),
                React.createElement('p', { className: 'text-sm text-gray-600' }, 'Online')
              ),
              React.createElement('div', { className: 'w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold' }, 'EI')
            )
          )
        )
      ),
      React.createElement('div', { className: 'max-w-7xl mx-auto px-4 py-8' },
        React.createElement('div', { className: 'flex gap-4 mb-6' },
          React.createElement('button', {
            onClick: () => setActiveTab('dashboard'),
            className: `flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition shadow-md ${activeTab === 'dashboard' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`
          },
            React.createElement(Book, { className: 'w-5 h-5' }),
            'Dashboard'
          ),
          React.createElement('button', {
            onClick: () => setActiveTab('video'),
            className: `flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition shadow-md ${activeTab === 'video' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`
          },
            React.createElement(Video, { className: 'w-5 h-5' }),
            'Video Call'
          ),
          React.createElement('button', {
            onClick: () => setActiveTab('chat'),
            className: `flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition shadow-md ${activeTab === 'chat' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`
          },
            React.createElement(MessageCircle, { className: 'w-5 h-5' }),
            'Chat'
          ),
          React.createElement('button', {
            onClick: () => setActiveTab('content'),
            className: `flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition shadow-md ${activeTab === 'content' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`
          },
            React.createElement(FileText, { className: 'w-5 h-5' }),
            'Content'
          )
        ),
        activeTab === 'dashboard' && renderDashboard(),
        activeTab === 'video' && renderVideoCall(),
        activeTab === 'chat' && renderChat(),
        activeTab === 'content' && renderContent()
      )
    )
  );
}

ReactDOM.render(React.createElement(EnglishLearningPlatform), document.getElementById('root'));
