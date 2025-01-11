import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useTranslation } from 'react-i18next';

const ManageAuditMembers = ({ userType }) => { // تمرير userType كـ prop
  const { t, i18n } = useTranslation();
  const [members, setMembers] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [editingMember, setEditingMember] = useState(null);
  const [message, setMessage] = useState("");  // رسالة للمستخدم

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get('http://localhost:9000/auditMembers');
        setMembers(response.data);
      } catch (error) {
        setMessage(t('general.loadingError'));  // رسالة في حال فشل التحميل
        console.error('Error fetching audit members', error);
      }
    };

    fetchMembers();
  }, [t]);

  const handleAddMember = async () => {
    const newMember = { name, role };
    try {
      const response = await axios.post('http://localhost:9000/auditMembers', newMember);
      setMembers([...members, response.data]);
      setMessage(t('admin.members.addSuccess'));
      setName("");
      setRole("");
    } catch (error) {
      setMessage(t('admin.members.addError'));
      console.error('Error adding audit member', error);
    }
  };

  const handleDeleteMember = async (id) => {
    try {
      await axios.delete(`http://localhost:9000/auditMembers/${id}`);
      setMembers(members.filter(member => member.id !== id));
      setMessage(t('admin.members.deleteSuccess'));
    } catch (error) {
      setMessage(t('admin.members.deleteError'));
      console.error('Error deleting audit member', error);
    }
  };

  const handleEditMember = (member) => {
    setEditingMember(member);
    setName(member.name);
    setRole(member.role);
  };

  const handleUpdateMember = async () => {
    const updatedMember = { ...editingMember, name, role };
    try {
      const response = await axios.put(`http://localhost:9000/auditMembers/${editingMember.id}`, updatedMember);
      setMembers(members.map(member => 
        member.id === editingMember.id ? response.data : member
      ));
      setMessage(t('admin.members.updateSuccess'));
      setEditingMember(null);
      setName("");
      setRole("");
    } catch (error) {
      setMessage(t('admin.members.updateError'));
      console.error('Error updating audit member', error);
    }
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="manage-audit-members">
      <button onClick={toggleLanguage} style={{ position: 'absolute', top: '-10px', right: '10px' }}>
        {t('buttons.switchLanguage')}
      </button>
      <h2>{t('admin.members.manageTitle')}</h2>
      {message && <p>{message}</p>}
      <div>
        <label>{t('admin.members.nameLabel')}</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder={t('admin.members.namePlaceholder')} 
        />
      </div>
      <div>
        <label>{t('admin.members.roleLabel')}</label>
        <input 
          type="text" 
          value={role} 
          onChange={(e) => setRole(e.target.value)} 
          placeholder={t('admin.members.rolePlaceholder')} 
        />
      </div>

      {/* عرض الأزرار بناءً على نوع المستخدم */}
      {userType === 'admin' ? (
        editingMember ? (
          <button onClick={handleUpdateMember}>{t('admin.members.updateButton')}</button>
        ) : (
          <button onClick={handleAddMember}>{t('admin.members.addButton')}</button>
        )
      ) : null} {/* لا تظهر الأزرار إذا لم يكن المستخدم مسؤولًا */}

      <h3>{t('admin.members.membersListTitle')}</h3>
      <ul>
        {members.length > 0 ? (
          members.map(member => (
            <li key={member.id}>
              {member.name} - {member.role}
              {userType === 'admin' && (
                <>
                  <button onClick={() => handleEditMember(member)}>{t('admin.members.editButton')}</button>
                  <button onClick={() => handleDeleteMember(member.id)}>{t('admin.members.deleteButton')}</button>
                </>
              )}
            </li>
          ))
        ) : (
          <p>{t('general.noMembers')}</p>
        )}
      </ul>
    </div>
  );
};

export default ManageAuditMembers;
