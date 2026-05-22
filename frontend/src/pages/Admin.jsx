import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, MessageSquare, Image, LogOut, ChevronRight, Mail, Phone, Calendar, HandHeart, Tag, Pencil, Trash2, Settings, Edit, Zap } from 'lucide-react';

const formatTime = (timeStr) => {
  if (!timeStr) return '';
  const match = timeStr.match(/^([0-1]?[0-9]|2[0-3]):([0-5][0-9])$/);
  if (match) {
    let hour = parseInt(match[1]);
    const min = match[2];
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12;
    hour = hour ? hour : 12;
    return `${hour}:${min} ${ampm}`;
  }
  return timeStr;
};

const Admin = () => {
  const [activeTab, setActiveTab] = useState('photos');
  const [data, setData] = useState({ 
    photos: [], 
    certifications: [], 
    publications: [],
    programs: [],
    successfulPrograms: [],
    volunteerActionImages: [],
    volunteers: [],
    events: []
  });
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState(''); // 'photo', 'cert', 'pub', 'event'
  const [formData, setFormData] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
 
  const fetchData = async () => {
    setLoading(true);
    try {
      const [res1, res2, res3, res4, res5, res6, res7, res8] = await Promise.all([
        fetch('http://localhost:5000/api/photos'),
        fetch('http://localhost:5000/api/certifications'),
        fetch('http://localhost:5000/api/publications'),
        fetch('http://localhost:5000/api/programs'),
        fetch('http://localhost:5000/api/successful-programs'),
        fetch('http://localhost:5000/api/volunteer-action-images'),
        fetch('http://localhost:5000/api/volunteers'),
        fetch('http://localhost:5000/api/events')
      ]);
 
      const photos = await res1.json();
      const certifications = await res2.json();
      const publications = await res3.json();
      const programs = await res4.json();
      const successfulPrograms = await res5.json();
      const volunteerActionImages = await res6.json();
      const volunteers = await res7.json();
      const events = await res8.json();
 
      setData({ photos, certifications, publications, programs, successfulPrograms, volunteerActionImages, volunteers, events });
    } catch (error) {
      console.error('Error fetching admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id, type) => {
    if (!window.confirm('Are you sure you want to delete this?')) return;
    
    let endpoint = '';
    if (type === 'photo') endpoint = `http://localhost:5000/api/photos/${id}`;
    if (type === 'cert') endpoint = `http://localhost:5000/api/certifications/${id}`;
    if (type === 'pub') endpoint = `http://localhost:5000/api/publications/${id}`;
    if (type === 'program') endpoint = `http://localhost:5000/api/programs/${id}`;
    if (type === 'successful-program') endpoint = `http://localhost:5000/api/successful-programs/${id}`;
    if (type === 'volunteer-action-image') endpoint = `http://localhost:5000/api/volunteer-action-images/${id}`;
    if (type === 'volunteer') endpoint = `http://localhost:5000/api/volunteers/${id}`;
    if (type === 'event') endpoint = `http://localhost:5000/api/events/${id}`;

    try {
      const response = await fetch(endpoint, { method: 'DELETE' });
      if (response.ok) {
        fetchData();
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const handleFileUpload = async (e, fieldName = 'image') => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);
 
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData
      });
      const data = await response.json();
      
      // Update the specific field (image, icon, src, etc.)
      setFormData(prev => ({ ...prev, [fieldName]: data.url }));
      
      if (fieldName === 'image') {
        setFormData(prev => ({ ...prev, src: data.url })); // Legacy support
      }

      alert('Image uploaded successfully!');
    } catch (error) {
      console.error('Upload error:', error);
      alert('Upload failed');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item, type) => {
    setFormData(item);
    setEditId(item._id);
    setModalType(type);
    setIsEditing(true);
    setShowModal(true);
  };

  const handleAddData = async (e) => {
    e.preventDefault();
    let endpoint = '';
    if (modalType === 'photo') endpoint = 'http://localhost:5000/api/photos';
    if (modalType === 'cert') endpoint = 'http://localhost:5000/api/certifications';
    if (modalType === 'pub') endpoint = 'http://localhost:5000/api/publications';
    if (modalType === 'program') endpoint = 'http://localhost:5000/api/programs';
    if (modalType === 'successful-program') endpoint = 'http://localhost:5000/api/successful-programs';
    if (modalType === 'volunteer-action-image') endpoint = 'http://localhost:5000/api/volunteer-action-images';
    if (modalType === 'event') endpoint = 'http://localhost:5000/api/events';

    if (isEditing) {
      endpoint = `${endpoint}/${editId}`;
    }

    try {
      const response = await fetch(endpoint, {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setShowModal(false);
        setFormData({});
        setIsEditing(false);
        setEditId(null);
        fetchData();
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  const SidebarItem = ({ id, icon: Icon, label }) => (
    <button
      onClick={() => setActiveTab(id)}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '1rem 1.5rem',
        border: 'none',
        background: activeTab === id ? '#ffcc00' : 'transparent',
        color: activeTab === id ? '#111' : '#666',
        borderRadius: '12px',
        cursor: 'pointer',
        fontWeight: '700',
        transition: 'all 0.3s ease',
        marginBottom: '0.5rem'
      }}
    >
      <Icon size={20} />
      {label}
      {activeTab === id && <ChevronRight size={16} style={{ marginLeft: 'auto' }} />}
    </button>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8f9fa', paddingTop: '80px' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '300px', 
        background: '#fff', 
        padding: '2rem 1.5rem', 
        borderRight: '1px solid #eee',
        position: 'fixed',
        height: 'calc(100vh - 80px)',
        left: 0,
        overflowY: 'auto'
      }}>
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#111' }}>Admin Panel</h2>
          <p style={{ fontSize: '0.85rem', color: '#888' }}>BK Educational Society</p>
        </div>

        <SidebarItem id="programs" icon={Zap} label="Our Programs" />
        <SidebarItem id="events" icon={Calendar} label="Upcoming Events" />
        <SidebarItem id="successfulPrograms" icon={HandHeart} label="Successful Programs" />
        <SidebarItem id="volunteerActionImages" icon={Users} label="Volunteers in Action" />
        <SidebarItem id="volunteers" icon={MessageSquare} label={`Volunteer Applications (${data.volunteers?.length || 0})`} />
        <SidebarItem id="photos" icon={Image} label="Gallery Management" />
        <SidebarItem id="certifications" icon={Settings} label="Certifications" />
        <SidebarItem id="publications" icon={Tag} label="Media & News" />

        <div style={{ marginTop: 'auto', paddingTop: '2rem' }}>
          <button 
            onClick={() => {
              localStorage.removeItem('adminToken');
              localStorage.removeItem('adminUser');
              window.location.href = '/login';
            }}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '1rem',
              border: 'none',
              background: '#fff',
              color: '#e53935',
              cursor: 'pointer',
              fontWeight: '700'
            }}
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, marginLeft: '360px', padding: '4rem 3rem' }}>
        <header style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '2.5rem', fontWeight: '800', textTransform: 'capitalize' }}>
            {activeTab.replace(/([A-Z])/g, ' $1')}
          </h1>
          <p style={{ color: '#666' }}>Manage your website's dynamic content and submissions.</p>
        </header>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '5rem' }}>Loading data...</div>
        ) : (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'programs' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {data.programs.map((prog) => (
                  <div key={prog._id} style={{ 
                    background: '#fff', 
                    borderRadius: '20px', 
                    overflow: 'hidden', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    border: '1px solid #eee'
                  }}>
                    <img alt="BK Education & Welfare Society"  src={prog.image} style={{ width: '100%', height: '160px', objectFit: 'cover' }}  />
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>{prog.title}</h3>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button onClick={() => handleEdit(prog, 'program')} style={{ color: '#ffcc00', border: 'none', background: 'transparent', cursor: 'pointer' }}><Edit size={20} /></button>
                          <button onClick={() => handleDelete(prog._id, 'program')} style={{ color: '#e53935', border: 'none', background: 'transparent', cursor: 'pointer' }}><Trash2 size={20} /></button>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5' }}>{prog.description.substring(0, 100)}...</p>
                    </div>
                  </div>
                ))}
                <div 
                  onClick={() => { setModalType('program'); setShowModal(true); setFormData({}); setIsEditing(false); }}
                  style={{ 
                    border: '2px dashed #ddd', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    minHeight: '260px',
                    cursor: 'pointer'
                  }}>
                  <p style={{ color: '#888', fontWeight: '700' }}>+ Add New Program</p>
                </div>
              </div>
            )}

            {activeTab === 'events' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {data.events.map((event) => (
                  <div key={event._id} style={{ 
                    background: '#fff', 
                    borderRadius: '20px', 
                    overflow: 'hidden', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    border: '1px solid #eee'
                  }}>
                    <img alt="BK Education & Welfare Society"  src={event.image || '/sanskar.jpeg'} style={{ width: '100%', height: '160px', objectFit: 'cover' }}  />
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#1a1a1a', margin: 0 }}>{event.title}</h3>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button onClick={() => handleEdit(event, 'event')} style={{ color: '#ffcc00', border: 'none', background: 'transparent', cursor: 'pointer' }}><Edit size={20} /></button>
                          <button onClick={() => handleDelete(event._id, 'event')} style={{ color: '#e53935', border: 'none', background: 'transparent', cursor: 'pointer' }}><Trash2 size={20} /></button>
                        </div>
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.85rem', color: '#666', marginBottom: '1.2rem' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>📅 {event.date}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>⏰ {formatTime(event.time)}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>📍 {event.location}</span>
                        <span style={{ 
                          alignSelf: 'flex-start',
                          marginTop: '4px',
                          background: '#ffe8e8', 
                          color: '#e53935', 
                          padding: '2px 8px', 
                          borderRadius: '10px', 
                          fontSize: '0.75rem', 
                          fontWeight: '800',
                          textTransform: 'uppercase',
                          letterSpacing: '0.5px'
                        }}>{event.status || 'Upcoming'}</span>
                      </div>
                      <p style={{ fontSize: '0.85rem', color: '#555', lineHeight: '1.6', margin: 0 }}>
                        {event.description?.substring(0, 120)}{event.description?.length > 120 ? '...' : ''}
                      </p>
                    </div>
                  </div>
                ))}
                <div 
                  onClick={() => { setModalType('event'); setShowModal(true); setFormData({}); setIsEditing(false); }}
                  style={{ 
                    border: '2px dashed #ddd', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    minHeight: '280px',
                    cursor: 'pointer'
                  }}>
                  <p style={{ color: '#888', fontWeight: '700' }}>+ Add New Event</p>
                </div>
              </div>
            )}

            {activeTab === 'successfulPrograms' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {data.successfulPrograms.map((prog) => (
                  <div key={prog._id} style={{ 
                    background: '#fff', 
                    borderRadius: '20px', 
                    overflow: 'hidden', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    border: '1px solid #eee'
                  }}>
                    <img alt="BK Education & Welfare Society"  src={prog.img} style={{ width: '100%', height: '160px', objectFit: 'cover' }}  />
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '800' }}>{prog.title}</h3>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button onClick={() => handleEdit(prog, 'successful-program')} style={{ color: '#ffcc00', border: 'none', background: 'transparent', cursor: 'pointer' }}><Edit size={20} /></button>
                          <button onClick={() => handleDelete(prog._id, 'successful-program')} style={{ color: '#e53935', border: 'none', background: 'transparent', cursor: 'pointer' }}><Trash2 size={20} /></button>
                        </div>
                      </div>
                      <span style={{ background: '#f97316', color: '#fff', padding: '2px 10px', borderRadius: '10px', fontSize: '0.7rem', fontWeight: '800' }}>{prog.tag}</span>
                      <p style={{ fontSize: '0.85rem', color: '#666', lineHeight: '1.5', marginTop: '1rem' }}>{prog.desc.substring(0, 100)}...</p>
                    </div>
                  </div>
                ))}
                <div 
                  onClick={() => { setModalType('successful-program'); setShowModal(true); setFormData({}); setIsEditing(false); }}
                  style={{ 
                    border: '2px dashed #ddd', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    minHeight: '260px',
                    cursor: 'pointer'
                  }}>
                  <p style={{ color: '#888', fontWeight: '700' }}>+ Add Success Story</p>
                </div>
              </div>
            )}

            {activeTab === 'photos' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                {data.photos.map((photo) => (
                  <div key={photo._id} style={{ 
                    background: '#fff', 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)' 
                  }}>
                    <img alt="BK Education & Welfare Society"  src={photo.src} style={{ width: '100%', height: '180px', objectFit: 'cover' }}  />
                    <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <p style={{ fontWeight: '800', fontSize: '1.1rem', margin: 0 }}>{photo.category}</p>
                      <div style={{ display: 'flex', gap: '20px', marginTop: '8px' }}>
                        <button onClick={() => handleEdit(photo, 'photo')} style={{ color: '#ffcc00', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><Edit size={28} /></button>
                        <button onClick={() => handleDelete(photo._id, 'photo')} style={{ color: '#e53935', border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><Trash2 size={28} /></button>
                      </div>
                    </div>
                  </div>
                ))}
                <div 
                  onClick={() => { setModalType('photo'); setShowModal(true); setFormData({}); setIsEditing(false); }}
                  style={{ 
                    border: '2px dashed #ddd', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    minHeight: '240px',
                    cursor: 'pointer'
                  }}>
                  <p style={{ color: '#888', fontWeight: '700' }}>+ Add New Photo</p>
                </div>
              </div>
            )}

            {activeTab === 'certifications' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                {data.certifications.map((cert) => (
                  <div key={cert._id} style={{ 
                    background: '#fff', 
                    padding: '2rem', 
                    borderRadius: '20px', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                    borderLeft: `6px solid ${cert.color || '#ffcc00'}`
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '0.75rem', color: '#d34b07', fontWeight: '800', textTransform: 'uppercase', marginBottom: '0.25rem' }}>{cert.subtitle}</p>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: '800', margin: 0 }}>{cert.title}</h3>
                      </div>
                      <div style={{ display: 'flex', gap: '20px', marginLeft: '1rem', marginTop: '8px' }}>
                        <button onClick={() => handleEdit(cert, 'cert')} style={{ color: '#ffcc00', border: 'none', background: 'transparent', cursor: 'pointer' }}><Edit size={28} /></button>
                        <button onClick={() => handleDelete(cert._id, 'cert')} style={{ color: '#e53935', border: 'none', background: 'transparent', cursor: 'pointer' }}><Trash2 size={28} /></button>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '1rem' }}>{cert.organization}</p>
                    <div style={{ fontSize: '0.8rem', background: '#f5f5f5', padding: '0.5rem', borderRadius: '8px' }}>
                      <strong>ID:</strong> {cert.idNumber}
                    </div>
                  </div>
                ))}
                <div 
                  onClick={() => { setModalType('cert'); setShowModal(true); setFormData({}); setIsEditing(false); }}
                  style={{ 
                    border: '2px dashed #ddd', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    minHeight: '150px',
                    cursor: 'pointer'
                  }}>
                  <p style={{ color: '#888', fontWeight: '700' }}>+ Add Certification</p>
                </div>
              </div>
            )}

            {activeTab === 'publications' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {data.publications.map((pub) => (
                  <div key={pub._id} style={{ 
                    background: '#fff', 
                    display: 'flex', 
                    gap: '2rem',
                    padding: '1.5rem', 
                    borderRadius: '20px', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
                  }}>
                    <img alt="BK Education & Welfare Society"  src={pub.src} style={{ width: '120px', height: '120px', borderRadius: '12px', objectFit: 'cover' }}  />
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <span style={{ fontSize: '0.75rem', background: '#ffcc00', padding: '2px 8px', borderRadius: '10px', fontWeight: '700' }}>{pub.tag}</span>
                          <span style={{ fontSize: '0.75rem', color: '#888' }}>{pub.date}</span>
                        </div>
                        <div style={{ display: 'flex', gap: '20px', marginTop: '8px' }}>
                          <button onClick={() => handleEdit(pub, 'pub')} style={{ color: '#ffcc00', border: 'none', background: 'transparent', cursor: 'pointer' }}><Edit size={28} /></button>
                          <button onClick={() => handleDelete(pub._id, 'pub')} style={{ color: '#e53935', border: 'none', background: 'transparent', cursor: 'pointer' }}><Trash2 size={28} /></button>
                        </div>
                      </div>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '0.5rem' }}>{pub.title}</h3>
                      <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>{pub.fullContent?.substring(0, 150)}...</p>
                    </div>
                  </div>
                ))}
                <div 
                  onClick={() => { setModalType('pub'); setShowModal(true); setFormData({}); setIsEditing(false); }}
                  style={{ 
                    border: '2px dashed #ddd', 
                    borderRadius: '20px', 
                    padding: '2rem',
                    textAlign: 'center',
                    cursor: 'pointer'
                  }}>
                  <p style={{ color: '#888', fontWeight: '700' }}>+ Add New Publication</p>
                </div>
              </div>
            )}
            {activeTab === 'volunteerActionImages' && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}>
                {data.volunteerActionImages.map((image) => (
                  <div key={image._id} style={{ 
                    background: '#fff', 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)' 
                  }}>
                    <img alt="BK Education & Welfare Society"  src={image.src} style={{ width: '100%', height: '180px', objectFit: 'cover' }}  />
                    <div style={{ padding: '1.5rem', display: 'flex', justifyContent: 'flex-end', gap: '15px' }}>
                      <button onClick={() => handleDelete(image._id, 'volunteer-action-image')} style={{ color: '#e53935', border: 'none', background: 'transparent', cursor: 'pointer' }}><Trash2 size={24} /></button>
                    </div>
                  </div>
                ))}
                <div 
                  onClick={() => { setModalType('volunteer-action-image'); setShowModal(true); setFormData({}); setIsEditing(false); }}
                  style={{ 
                    border: '2px dashed #ddd', 
                    borderRadius: '16px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    minHeight: '240px',
                    cursor: 'pointer'
                  }}>
                  <p style={{ color: '#888', fontWeight: '700' }}>+ Add Action Photo</p>
                </div>
              </div>
            )}

            {activeTab === 'volunteers' && (
              <div style={{ background: '#fff', padding: '2rem', borderRadius: '24px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid #eee' }}>
                        <th style={{ padding: '1rem', fontWeight: '800' }}>Name</th>
                        <th style={{ padding: '1rem', fontWeight: '800' }}>Email</th>
                        <th style={{ padding: '1rem', fontWeight: '800' }}>Phone</th>
                        <th style={{ padding: '1rem', fontWeight: '800' }}>Interested Field</th>
                        <th style={{ padding: '1rem', fontWeight: '800' }}>Message</th>
                        <th style={{ padding: '1rem', fontWeight: '800' }}>Date</th>
                        <th style={{ padding: '1rem', fontWeight: '800', textAlign: 'center' }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.volunteers?.length === 0 ? (
                        <tr>
                          <td colSpan="7" style={{ padding: '2rem', textAlign: 'center', color: '#888' }}>No volunteer applications found.</td>
                        </tr>
                      ) : (
                        data.volunteers?.map((vol) => (
                          <tr key={vol._id} style={{ borderBottom: '1px solid #eee' }}>
                            <td style={{ padding: '1rem', fontWeight: '700' }}>{vol.name}</td>
                            <td style={{ padding: '1rem' }}><a href={`mailto:${vol.email}`} style={{ color: '#007bff', textDecoration: 'none' }}>{vol.email}</a></td>
                            <td style={{ padding: '1rem' }}>{vol.phone}</td>
                            <td style={{ padding: '1rem' }}>
                              <span style={{ 
                                padding: '0.25rem 0.75rem', 
                                borderRadius: '12px', 
                                background: '#ffe8e8', 
                                color: '#e53935', 
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                textTransform: 'capitalize' 
                              }}>
                                {vol.field?.replace('_', ' ')}
                              </span>
                            </td>
                            <td style={{ padding: '1rem', maxWidth: '250px', whiteSpace: 'pre-wrap', wordBreak: 'break-word', fontSize: '0.9rem', color: '#555' }}>{vol.message}</td>
                            <td style={{ padding: '1rem', fontSize: '0.85rem', color: '#888' }}>{new Date(vol.createdAt).toLocaleDateString()}</td>
                            <td style={{ padding: '1rem', textAlign: 'center' }}>
                              <button 
                                onClick={() => handleDelete(vol._id, 'volunteer')} 
                                style={{ color: '#e53935', border: 'none', background: 'transparent', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
                              >
                                <Trash2 size={20} />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </main>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: '#fff',
            padding: '2.5rem',
            borderRadius: '24px',
            width: '90%',
            maxWidth: '650px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
            boxSizing: 'border-box'
          }}>
            <h2 style={{ marginBottom: '2rem', fontWeight: '800' }}>Add New {modalType.toUpperCase()}</h2>
            <form onSubmit={handleAddData} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {modalType === 'photo' && (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#666' }}>Upload Photo</label>
                    <input type="file" accept="image/*" onChange={handleFileUpload} style={{ padding: '0.5rem' }} required />
                  </div>
                  <input type="text" placeholder="Category (e.g. EVENTS)" onChange={(e) => setFormData({...formData, category: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} required />
                </>
              )}
              {modalType === 'cert' && (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#666' }}>Upload Certificate Image</label>
                    <input type="file" accept="image/*" onChange={handleFileUpload} style={{ padding: '0.5rem' }} />
                  </div>
                  <input type="text" placeholder="Subtitle (e.g. REGISTRATION CERTIFICATE)" defaultValue={formData.subtitle} onChange={(e) => setFormData({...formData, subtitle: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} required />
                  <input type="text" placeholder="Certification Title" defaultValue={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} required />
                  <input type="text" placeholder="Organization" defaultValue={formData.organization} onChange={(e) => setFormData({...formData, organization: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} required />
                  <input type="text" placeholder="ID Number" defaultValue={formData.idNumber} onChange={(e) => setFormData({...formData, idNumber: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} required />
                  <textarea placeholder="Description" defaultValue={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', minHeight: '80px', width: '100%', boxSizing: 'border-box' }} required />
                </>
              )}
              {modalType === 'pub' && (
                <>
                  <input type="text" placeholder="Title" defaultValue={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} required />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input type="text" placeholder="Tag (e.g. IMPACT)" defaultValue={formData.tag} onChange={(e) => setFormData({...formData, tag: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} required />
                    <input type="text" placeholder="Date (e.g. March 2024)" defaultValue={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} required />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#666' }}>Upload Featured Image</label>
                    <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'src')} style={{ padding: '0.5rem' }} />
                  </div>
                  <textarea placeholder="Content" defaultValue={formData.fullContent} onChange={(e) => setFormData({...formData, fullContent: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', minHeight: '150px', width: '100%', boxSizing: 'border-box' }} required />
                </>
              )}
              {modalType === 'program' && (
                <>
                  <input type="text" placeholder="Program Title" defaultValue={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} required />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#666' }}>Program Icon (Image Upload)</label>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                      <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'icon')} style={{ flex: 1, fontSize: '0.8rem' }} />
                      <input type="color" title="Theme Color" value={formData.color || '#e53935'} onChange={(e) => setFormData({...formData, color: e.target.value})} style={{ width: '60px', height: '40px', padding: '4px', borderRadius: '8px', border: '1px solid #ddd', cursor: 'pointer' }} />
                    </div>
                    {formData.icon && formData.icon.startsWith('http') && (
                      <p style={{ fontSize: '0.75rem', color: '#4caf50', margin: 0 }}>✓ Icon uploaded</p>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#666' }}>Main Program Image</label>
                    <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'image')} style={{ padding: '0.5rem' }} />
                  </div>
                  <input type="text" placeholder="Category (e.g. Welfare)" defaultValue={formData.category} onChange={(e) => setFormData({...formData, category: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} />
                  <textarea placeholder="Full Description" defaultValue={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', minHeight: '120px', width: '100%', boxSizing: 'border-box' }} required />
                </>
              )}
              {modalType === 'successful-program' && (
                <>
                  <input type="text" placeholder="Success Story Title (e.g. Life-Saving Blood Camps)" defaultValue={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} required />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#666' }}>Program Icon</label>
                      <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'icon')} style={{ fontSize: '0.8rem' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#666' }}>Featured Image</label>
                      <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'img')} style={{ fontSize: '0.8rem' }} />
                    </div>
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input type="text" placeholder="Tag (e.g. BLOOD DONATION)" defaultValue={formData.tag} onChange={(e) => setFormData({...formData, tag: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} />
                    <select 
                      defaultValue={formData.objectPosition || 'center'} 
                      onChange={(e) => setFormData({...formData, objectPosition: e.target.value})}
                      style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }}
                    >
                      <option value="top">Image Align: Top</option>
                      <option value="center">Image Align: Center</option>
                      <option value="bottom">Image Align: Bottom</option>
                    </select>
                  </div>
                  <textarea placeholder="Success Story Description (Full Content)" defaultValue={formData.desc} onChange={(e) => setFormData({...formData, desc: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', minHeight: '150px', width: '100%', boxSizing: 'border-box' }} required />
                </>
              )}
              {modalType === 'volunteer-action-image' && (
                <>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#666' }}>Upload Action Photo</label>
                    <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'src')} style={{ padding: '0.5rem' }} required />
                  </div>
                  <input type="text" placeholder="Alt Text (Optional)" defaultValue={formData.alt} onChange={(e) => setFormData({...formData, alt: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} />
                </>
              )}
              {modalType === 'event' && (
                <>
                  <input type="text" placeholder="Event Title" defaultValue={formData.title} onChange={(e) => setFormData({...formData, title: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} required />
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input type="text" placeholder="Date (e.g. August 15, 2026)" defaultValue={formData.date} onChange={(e) => setFormData({...formData, date: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} required />
                    <input type="time" defaultValue={formData.time} onChange={(e) => setFormData({...formData, time: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <input type="text" placeholder="Location (e.g. BK Gurukul Vidyaniketan)" defaultValue={formData.location} onChange={(e) => setFormData({...formData, location: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} />
                    <input type="text" placeholder="Status (e.g. Upcoming, Registration Open)" defaultValue={formData.status} onChange={(e) => setFormData({...formData, status: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', width: '100%', boxSizing: 'border-box' }} />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '700', color: '#666' }}>Featured Image</label>
                    <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'image')} style={{ padding: '0.5rem' }} />
                  </div>
                  <textarea placeholder="Event Description" defaultValue={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #ddd', minHeight: '100px', width: '100%', boxSizing: 'border-box' }} required />
                </>
              )}
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <button type="submit" style={{ flex: 1, background: '#ffcc00', padding: '1rem', border: 'none', borderRadius: '12px', fontWeight: '800', cursor: 'pointer' }}>Save</button>
                <button type="button" onClick={() => setShowModal(false)} style={{ flex: 1, background: '#f5f5f5', padding: '1rem', border: 'none', borderRadius: '12px', fontWeight: '800', cursor: 'pointer' }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
