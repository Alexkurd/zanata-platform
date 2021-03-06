package org.zanata.webtrans.shared.model;

import java.io.Serializable;
import java.util.Date;

import com.google.gwt.user.client.rpc.IsSerializable;

public class AuditInfo implements IsSerializable, Serializable {
    private static final long serialVersionUID = 3542554308558606387L;
    private Date date;
    private String username;

    // for GWT
    public AuditInfo() {
    }

    public AuditInfo(Date date, String username) {
        this.date = date != null ? new Date(date.getTime()) : null;
        this.username = username;
    }

    public Date getDate() {
        return date != null ? new Date(date.getTime()) : null;
    }

    public String getUsername() {
        return username;
    }

    @Override
    public int hashCode() {
        final int prime = 31;
        int result = 1;
        result =
                prime * result + ((username == null) ? 0 : username.hashCode());
        result = prime * result + ((date == null) ? 0 : date.hashCode());
        return result;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        AuditInfo other = (AuditInfo) obj;
        if (username == null) {
            if (other.username != null)
                return false;
        } else if (!username.equals(other.username))
            return false;
        if (date == null) {
            if (other.date != null)
                return false;
        } else if (!date.equals(other.date))
            return false;
        return true;
    }

}
